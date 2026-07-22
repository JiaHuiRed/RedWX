// Bridge the Web Notification + Web Badging APIs to Rust commands so pages
// running inside the webview can drive the taskbar badge. Installs
// synchronously instead of waiting for DOMContentLoaded so feature-detection
// on Notification/setAppBadge returns the polyfill before site scripts run.
(function () {
  const invoke = window.__TAURI__?.core?.invoke;
  if (!invoke) return;

  let permVal = "granted";
  let lastNotifTime = 0;
  let lastNotif = null;
  let pageManagedBadge = false;
  let autoBadgeActive = false;

  const normalizeBadgeCount = (count) => {
    if (typeof count !== "number" || !Number.isFinite(count)) {
      throw new TypeError("Badge count must be a finite number.");
    }
    const normalized = Math.floor(count);
    return normalized > 0 ? Math.min(normalized, 99999) : null;
  };
  const setBadge = (count) => {
    pageManagedBadge = true;
    autoBadgeActive = false;
    return invoke("set_dock_badge", { count }).catch(() => {});
  };
  const clearBadge = () => invoke("clear_dock_badge").catch(() => {});
  const setLabel = (label) => {
    pageManagedBadge = true;
    autoBadgeActive = false;
    return invoke("set_dock_badge_label", { label }).catch(() => {});
  };
  const incrementAutoBadge = () => {
    if (pageManagedBadge) return Promise.resolve();
    autoBadgeActive = true;
    return invoke("increment_dock_badge").catch(() => {});
  };

  window.addEventListener("focus", () => {
    if (lastNotif?.onclick && Date.now() - lastNotifTime < 5000) {
      lastNotif.onclick(new Event("click"));
      lastNotif = null;
    }
  });

  const clearAutoBadge = () => {
    if (pageManagedBadge || !autoBadgeActive) return;
    autoBadgeActive = false;
    clearBadge();
  };
  document.addEventListener("click", clearAutoBadge, true);
  document.addEventListener("keydown", clearAutoBadge, true);

  const wrappedNotification = function (title, options) {
    const body = options?.body || "";
    let icon = options?.icon || "";
    if (icon.startsWith("/")) {
      icon = window.location.origin + icon;
    }

    const notif = {
      onclick: null,
      onclose: null,
      onshow: null,
      onerror: null,
      close: () => {},
    };

    lastNotifTime = Date.now();
    lastNotif = notif;
    invoke("send_notification", { params: { title, body, icon } })
      .then(() => incrementAutoBadge())
      .then(() => {
        if (notif.onshow) notif.onshow(new Event("show"));
      });

    return notif;
  };

  wrappedNotification.requestPermission = async () => "granted";
  Object.defineProperty(wrappedNotification, "permission", {
    enumerable: true,
    get: () => permVal,
    set: (v) => {
      permVal = v;
    },
  });

  try {
    Object.defineProperty(window, "Notification", {
      configurable: true,
      writable: true,
      value: wrappedNotification,
    });
  } catch (_) {}

  const setAppBadge = (count) => {
    if (count === undefined) return setLabel("•");
    let normalized;
    try {
      normalized = normalizeBadgeCount(count);
    } catch (error) {
      return Promise.reject(error);
    }
    if (normalized === null) {
      pageManagedBadge = false;
      autoBadgeActive = false;
      return clearBadge();
    }
    return setBadge(normalized);
  };
  const clearAppBadge = () => {
    pageManagedBadge = false;
    autoBadgeActive = false;
    return clearBadge();
  };
  try {
    Object.defineProperty(navigator, "setAppBadge", {
      configurable: true,
      writable: true,
      value: setAppBadge,
    });
    Object.defineProperty(navigator, "clearAppBadge", {
      configurable: true,
      writable: true,
      value: clearAppBadge,
    });
  } catch (_) {}
})();
