use crate::util::{check_file_or_append, get_download_message_with_lang, show_toast, MessageType};
use std::fs::{self, File};
use std::io::Write;
use std::str::FromStr;
use std::sync::atomic::{AtomicI64, Ordering};
use tauri::http::Method;
use tauri::{command, AppHandle, Manager, Url, WebviewWindow};
use tauri_plugin_http::reqwest::{ClientBuilder, Request};

static BADGE_COUNT: AtomicI64 = AtomicI64::new(0);
const MAX_BADGE_COUNT: i64 = 99_999;
const MAX_BADGE_LABEL_CHARS: usize = 16;

fn normalize_badge_count(count: Option<i64>) -> Option<i64> {
    count.filter(|n| (1..=MAX_BADGE_COUNT).contains(n))
}

fn normalize_badge_label(label: Option<&str>) -> Result<Option<String>, String> {
    let Some(label) = label.map(str::trim).filter(|label| !label.is_empty()) else {
        return Ok(None);
    };

    if label.chars().count() > MAX_BADGE_LABEL_CHARS {
        return Err(format!(
            "Badge label must be {MAX_BADGE_LABEL_CHARS} characters or fewer"
        ));
    }

    Ok(Some(label.to_string()))
}

fn apply_badge(app: &AppHandle, count: Option<i64>) -> Result<(), String> {
    let label = normalize_badge_count(count).map(|n| n.to_string());
    apply_badge_label(app, label.as_deref())
}

fn apply_badge_label(app: &AppHandle, label: Option<&str>) -> Result<(), String> {
    let window = app
        .get_webview_window("pake")
        .ok_or("Main window not found")?;
    let count = label.and_then(|s| s.parse::<i64>().ok());
    window
        .set_badge_count(count)
        .map_err(|e| format!("Failed to set badge count: {e}"))
}

#[derive(serde::Deserialize)]
pub struct DownloadFileParams {
    url: String,
    filename: String,
    language: Option<String>,
}

#[derive(serde::Deserialize)]
pub struct BinaryDownloadParams {
    filename: String,
    binary: Vec<u8>,
    language: Option<String>,
}

#[derive(serde::Deserialize)]
pub struct NotificationParams {
    title: String,
    body: String,
    icon: String,
}

#[command]
pub async fn download_file(app: AppHandle, params: DownloadFileParams) -> Result<(), String> {
    let window: WebviewWindow = app.get_webview_window("pake").ok_or("Window not found")?;

    show_toast(
        &window,
        &get_download_message_with_lang(MessageType::Start, params.language.clone()),
    );

    let download_dir = app
        .path()
        .download_dir()
        .map_err(|e| format!("Failed to get download dir: {}", e))?;

    let output_path = download_dir.join(&params.filename);

    let path_str = output_path.to_str().ok_or("Invalid output path")?;

    let file_path = check_file_or_append(path_str);

    let client = ClientBuilder::new()
        .build()
        .map_err(|e| format!("Failed to build client: {}", e))?;

    let url = Url::from_str(&params.url).map_err(|e| format!("Invalid URL: {}", e))?;

    let request = Request::new(Method::GET, url);

    let response = client.execute(request).await;

    match response {
        Ok(mut res) => {
            let mut file =
                File::create(file_path).map_err(|e| format!("Failed to create file: {}", e))?;

            while let Some(chunk) = res
                .chunk()
                .await
                .map_err(|e| format!("Failed to get chunk: {}", e))?
            {
                file.write_all(&chunk)
                    .map_err(|e| format!("Failed to write chunk: {}", e))?;
            }

            show_toast(
                &window,
                &get_download_message_with_lang(MessageType::Success, params.language.clone()),
            );
            Ok(())
        }
        Err(e) => {
            show_toast(
                &window,
                &get_download_message_with_lang(MessageType::Failure, params.language),
            );
            Err(e.to_string())
        }
    }
}

#[command]
pub async fn download_file_by_binary(
    app: AppHandle,
    params: BinaryDownloadParams,
) -> Result<(), String> {
    let window: WebviewWindow = app.get_webview_window("pake").ok_or("Window not found")?;

    show_toast(
        &window,
        &get_download_message_with_lang(MessageType::Start, params.language.clone()),
    );

    let download_dir = app
        .path()
        .download_dir()
        .map_err(|e| format!("Failed to get download dir: {}", e))?;

    let output_path = download_dir.join(&params.filename);

    let path_str = output_path.to_str().ok_or("Invalid output path")?;

    let file_path = check_file_or_append(path_str);

    match fs::write(file_path, &params.binary) {
        Ok(_) => {
            show_toast(
                &window,
                &get_download_message_with_lang(MessageType::Success, params.language.clone()),
            );
            Ok(())
        }
        Err(e) => {
            show_toast(
                &window,
                &get_download_message_with_lang(MessageType::Failure, params.language),
            );
            Err(e.to_string())
        }
    }
}

#[command]
pub fn send_notification(app: AppHandle, params: NotificationParams) -> Result<(), String> {
    use tauri_plugin_notification::NotificationExt;
    app.notification()
        .builder()
        .title(&params.title)
        .body(&params.body)
        .icon(&params.icon)
        .show()
        .map_err(|e| format!("Failed to show notification: {}", e))?;
    Ok(())
}

#[command]
pub fn set_dock_badge(app: AppHandle, count: Option<i64>) -> Result<(), String> {
    let normalized = normalize_badge_count(count);
    BADGE_COUNT.store(normalized.unwrap_or(0), Ordering::SeqCst);
    apply_badge(&app, normalized)
}

#[command]
pub fn increment_dock_badge(app: AppHandle) -> Result<(), String> {
    let current = BADGE_COUNT.load(Ordering::SeqCst);
    let next = current.saturating_add(1).clamp(1, MAX_BADGE_COUNT);
    BADGE_COUNT.store(next, Ordering::SeqCst);
    apply_badge(&app, Some(next))
}

#[command]
pub fn clear_dock_badge(app: AppHandle) -> Result<(), String> {
    BADGE_COUNT.store(0, Ordering::SeqCst);
    apply_badge(&app, None)
}

#[command]
pub fn set_dock_badge_label(app: AppHandle, label: Option<String>) -> Result<(), String> {
    BADGE_COUNT.store(0, Ordering::SeqCst);
    let label = normalize_badge_label(label.as_deref())?;
    apply_badge_label(&app, label.as_deref())
}

#[command]
pub async fn update_theme_mode(_app: AppHandle, _mode: String) {}

#[command]
#[allow(unreachable_code)]
pub fn clear_cache_and_restart(app: AppHandle) -> Result<(), String> {
    if let Some(window) = app.get_webview_window("pake") {
        match window.clear_all_browsing_data() {
            Ok(_) => {
                // Clear all browsing data successfully
                app.restart();
                Ok(())
            }
            Err(e) => {
                eprintln!("Failed to clear browsing data: {}", e);
                Err(format!("Failed to clear browsing data: {}", e))
            }
        }
    } else {
        Err("Main window not found".to_string())
    }
}

#[command]
pub fn minimize_window(app: AppHandle) -> Result<(), String> {
    if let Some(window) = app.get_webview_window("pake") {
        window.minimize().map_err(|e| e.to_string())
    } else {
        Err("Main window not found".to_string())
    }
}

#[command]
pub fn maximize_window(app: AppHandle) -> Result<(), String> {
    if let Some(window) = app.get_webview_window("pake") {
        if window.is_maximized().unwrap_or(false) {
            window.unmaximize().map_err(|e| e.to_string())
        } else {
            window.maximize().map_err(|e| e.to_string())
        }
    } else {
        Err("Main window not found".to_string())
    }
}

#[command]
pub fn close_window(app: AppHandle) -> Result<(), String> {
    if let Some(window) = app.get_webview_window("pake") {
        window.close().map_err(|e| e.to_string())
    } else {
        Err("Main window not found".to_string())
    }
}
