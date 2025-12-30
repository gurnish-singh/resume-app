// File: `src/components/RedirectBanner.js`
import React, { useEffect, useState, useRef } from "react";

export default function RedirectBanner({ target = "https://gurnish-singh.vercel.app/", delay = 5 }) {
    const [visible, setVisible] = useState(false);
    const [count, setCount] = useState(delay);
    const intervalRef = useRef(null);
    const storageKey = "redirectBannerDismissed_v1";

    useEffect(() => {
        // If user previously chose to stay, don't show
        if (localStorage.getItem(storageKey)) return;

        // If the visitor came from the target host, do nothing
        try {
            const ref = document.referrer;
            if (ref) {
                const refHost = new URL(ref).host;
                const targetHost = new URL(target).host;
                if (refHost === targetHost) return;
            }
        } catch (e) {
            // ignore parsing errors and proceed
        }

        setVisible(true);
        setCount(delay);

        intervalRef.current = setInterval(() => {
            setCount((c) => {
                if (c <= 1) {
                    clearInterval(intervalRef.current);
                    // replace so back button doesn't return here
                    window.location.replace(target);
                    return 0;
                }
                return c - 1;
            });
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [delay, target]);

    if (!visible) return null;

    const goNow = () => {
        clearInterval(intervalRef.current);
        window.location.replace(target);
    };

    const stay = () => {
        clearInterval(intervalRef.current);
        // remember choice for future visits
        localStorage.setItem(storageKey, "1");
        // hide banner with a short fade
        setVisible(false);
    };

    const bannerStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "#111",
        color: "#fff",
        padding: "0.6rem 1rem",
        display: "flex",
        justifyContent: "center",
        fontFamily: "system-ui, Arial, Helvetica, sans-serif",
    };

    const innerStyle = {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        maxWidth: 1200,
        width: "100%",
        justifyContent: "space-between",
    };

    const leftStyle = { display: "flex", alignItems: "center", gap: "1rem", flex: 1, fontSize: "1.5rem" };
    const linkStyle = { color: "#4fc3f7", textDecoration: "underline" };
    const btnPrimary = { background: "#4fc3f7", border: "none", color: "#000", padding: "0.4rem 0.6rem", borderRadius: 4, cursor: "pointer" };
    const btnSecondary = { background: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "0.3rem 0.6rem", borderRadius: 4, cursor: "pointer" };

    return (
        <div style={bannerStyle} role="status" aria-live="polite">
            <div style={innerStyle}>
                <div style={leftStyle}>
                    <strong>Notice:</strong>
                    <span >This page is no longer being updated. You will be redirected to</span>
                    <a href={target} style={linkStyle} target="_blank" rel="noopener noreferrer">{new URL(target).host}</a>
                    <span>in <strong>{count}</strong>s</span>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                    <button onClick={goNow} style={btnPrimary}>Go now</button>
                    <button onClick={stay} style={btnSecondary}>Stay</button>
                </div>
            </div>
        </div>
    );
}
