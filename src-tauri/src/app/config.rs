use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct WindowConfig {
    pub url: String,
    pub hide_title_bar: bool,
    pub fullscreen: bool,
    pub maximize: bool,
    pub width: f64,
    pub height: f64,
    pub resizable: bool,
    pub url_type: String,
    pub always_on_top: bool,
    pub dark_mode: bool,
    pub disabled_web_shortcuts: bool,
    pub activation_shortcut: String,
    pub hide_on_close: bool,
    pub incognito: bool,
    pub title: Option<String>,
    pub enable_wasm: bool,
    pub enable_drag_drop: bool,
    #[serde(default)]
    pub new_window: bool,
    pub start_to_tray: bool,
    #[serde(default)]
    pub force_internal_navigation: bool,
    #[serde(default)]
    pub internal_url_regex: String,
    #[serde(default)]
    pub enable_find: bool,
    #[serde(default = "default_zoom")]
    pub zoom: u32,
    #[serde(default)]
    pub min_width: f64,
    #[serde(default)]
    pub min_height: f64,
    #[serde(default)]
    pub ignore_certificate_errors: bool,
    #[serde(default = "default_version")]
    pub version: String,
}

fn default_version() -> String {
    env!("CARGO_PKG_VERSION").to_string()
}

fn default_zoom() -> u32 {
    100
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct PakeConfig {
    pub windows: Vec<WindowConfig>,
    pub user_agent: String,
    pub system_tray: bool,
    pub system_tray_path: String,
    pub proxy_url: String,
    #[serde(default)]
    pub multi_instance: bool,
    #[serde(default)]
    pub multi_window: bool,
}
