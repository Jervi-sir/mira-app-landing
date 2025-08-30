"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function VisitPing() {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    const ua = navigator.userAgent;
    const isMobile = /Mobi|Android/i.test(ua);
    const deviceType = isMobile ? "mobile" : "desktop";

    const payload = {
      deviceType,
      deviceBrand: null,   // hard to detect in browser reliably
      deviceModel: null,
      os: navigator.platform,
      browser: ua.split(" ")[0], // crude, you can improve
      screenW: window.screen?.width,
      screenH: window.screen?.height,
    };

    const blob = new Blob([JSON.stringify(payload)], {
      type: "application/json",
    });
    const ok = navigator.sendBeacon?.("/api/visit", blob);
    if (!ok) {
      fetch("/api/visit", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {});
    }
  }, [pathname, search]);

  return null;
}
