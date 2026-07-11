import React from "react";

/* UI primitives ported from the "Regor Portfolio.dc.html" design system
   (RegorCarloEscondePortfolioDesignSystem): Button, IconButton, Card,
   Tag, Badge, Avatar — warm, tactile, a little hand-made. */

export function Button({
  children,
  variant = "primary",
  size = "md",
  full = false,
  disabled = false,
  as: As = "button",
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: "7px 14px", fontSize: "var(--text-sm)", gap: "6px", radius: "var(--radius-sm)" },
    md: { padding: "11px 20px", fontSize: "var(--text-md)", gap: "8px", radius: "var(--radius-md)" },
    lg: { padding: "15px 28px", fontSize: "var(--text-lg)", gap: "10px", radius: "var(--radius-md)" },
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--text-on-accent)",
      border: "var(--stroke) solid transparent",
      boxShadow: "var(--shadow-sm)",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-strong)",
      border: "var(--stroke) solid var(--border-strong)",
      boxShadow: "none",
    },
    sticker: {
      background: "var(--surface-raised)",
      color: "var(--text-strong)",
      border: "var(--stroke-bold) solid var(--border-ink)",
      boxShadow: "var(--shadow-sticker-sm)",
    },
  };
  const v = variants[variant] || variants.primary;
  return (
    <As
      disabled={As === "button" ? disabled : undefined}
      style={{
        display: full ? "flex" : "inline-flex",
        width: full ? "100%" : "auto",
        alignItems: "center",
        justifyContent: "center",
        gap: s.gap,
        padding: s.padding,
        fontFamily: "var(--font-body)",
        fontSize: s.fontSize,
        fontWeight: "var(--weight-semibold)",
        lineHeight: 1,
        letterSpacing: "0.01em",
        borderRadius: s.radius,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        textDecoration: "none",
        transition:
          "transform var(--dur-fast) var(--ease-bounce), box-shadow var(--dur) var(--ease-out), background var(--dur) var(--ease-out)",
        ...v,
        ...style,
      }}
      onMouseDown={(e) => {
        if (!disabled) e.currentTarget.style.transform = "translate(1px, 1px)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
      }}
      {...rest}
    >
      {children}
    </As>
  );
}

export function IconButton({
  children,
  variant = "ghost",
  size = "md",
  round = false,
  disabled = false,
  label,
  as: As = "button",
  style = {},
  ...rest
}) {
  const sizes = { sm: 32, md: 40, lg: 48 };
  const dim = sizes[size] || sizes.md;
  const variants = {
    ghost: {
      background: "transparent",
      color: "var(--text-body)",
      border: "var(--stroke) solid var(--border-strong)",
    },
    solid: {
      background: "var(--accent)",
      color: "var(--text-on-accent)",
      border: "var(--stroke) solid transparent",
    },
    sticker: {
      background: "var(--surface-raised)",
      color: "var(--text-strong)",
      border: "var(--stroke-bold) solid var(--border-ink)",
      boxShadow: "var(--shadow-sticker-sm)",
    },
  };
  const v = variants[variant] || variants.ghost;
  return (
    <As
      aria-label={label}
      title={label}
      disabled={As === "button" ? disabled : undefined}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: dim,
        height: dim,
        borderRadius: round ? "var(--radius-pill)" : "var(--radius-sm)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        textDecoration: "none",
        transition:
          "transform var(--dur-fast) var(--ease-bounce), background var(--dur) var(--ease-out), color var(--dur) var(--ease-out)",
        ...v,
        ...style,
      }}
      onMouseDown={(e) => {
        if (!disabled) e.currentTarget.style.transform = "translate(1px,1px)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
      }}
      {...rest}
    >
      {children}
    </As>
  );
}

export function Card({
  children,
  variant = "soft",
  interactive = false,
  padding = "var(--space-5)",
  style = {},
  ...rest
}) {
  const variants = {
    soft: {
      background: "var(--surface-card)",
      border: "var(--stroke) solid var(--border-soft)",
      boxShadow: "var(--shadow-sm)",
    },
    sticker: {
      background: "var(--surface-raised)",
      border: "var(--stroke-bold) solid var(--border-ink)",
      boxShadow: "var(--shadow-sticker)",
    },
    flat: {
      background: "var(--bg-sunken)",
      border: "var(--stroke) solid var(--border-soft)",
      boxShadow: "none",
    },
  };
  const v = variants[variant] || variants.soft;
  return (
    <div
      style={{
        borderRadius: "var(--radius-md)",
        padding,
        transition:
          "transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)",
        cursor: interactive ? "pointer" : "default",
        ...v,
        ...style,
      }}
      onMouseEnter={
        interactive
          ? (e) => {
              e.currentTarget.style.transform = "translate(-2px,-3px)";
              e.currentTarget.style.boxShadow =
                variant === "sticker" ? "6px 7px 0 var(--border-ink)" : "var(--shadow-lg)";
            }
          : undefined
      }
      onMouseLeave={
        interactive
          ? (e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = v.boxShadow;
            }
          : undefined
      }
      {...rest}
    >
      {children}
    </div>
  );
}

export function Tag({ children, tone = "neutral", outline = false, style = {}, ...rest }) {
  const tones = {
    neutral: { fill: "var(--bg-sunken)", text: "var(--text-body)", line: "var(--border-strong)" },
    terracotta: { fill: "var(--accent-soft)", text: "var(--terracotta-600)", line: "var(--terracotta-300)" },
    ochre: { fill: "var(--accent-2-soft)", text: "var(--ochre-500)", line: "var(--ochre-300)" },
    olive: { fill: "var(--accent-3-soft)", text: "var(--olive-500)", line: "var(--olive-300)" },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        padding: "4px 11px",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-xs)",
        fontWeight: "var(--weight-medium)",
        lineHeight: 1.4,
        color: t.text,
        background: outline ? "transparent" : t.fill,
        border: `var(--stroke) solid ${t.line}`,
        borderRadius: "var(--radius-pill)",
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}

export function Badge({ children, status = "neutral", dot = false, style = {}, ...rest }) {
  const map = {
    neutral: { fill: "var(--bg-sunken)", text: "var(--text-muted)", dot: "var(--clay-400)" },
    good: { fill: "var(--status-good-bg)", text: "var(--status-good)", dot: "var(--status-good)" },
    warn: { fill: "var(--status-warn-bg)", text: "var(--status-warn)", dot: "var(--status-warn)" },
    bad: { fill: "var(--status-bad-bg)", text: "var(--status-bad)", dot: "var(--status-bad)" },
  };
  const m = map[status] || map.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "3px 9px",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-2xs)",
        fontWeight: "var(--weight-normal)",
        letterSpacing: "var(--tracking-wide)",
        textTransform: "uppercase",
        color: m.text,
        background: m.fill,
        borderRadius: "var(--radius-xs)",
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: "50%", background: m.dot }} />}
      {children}
    </span>
  );
}

export function Avatar({ src, name = "", size = "md", sticker = false, style = {}, ...rest }) {
  const sizes = { sm: 32, md: 44, lg: 64, xl: 96 };
  const dim = sizes[size] || sizes.md;
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: dim,
        height: dim,
        borderRadius: "var(--radius-pill)",
        overflow: "hidden",
        background: "var(--accent-2-soft)",
        color: "var(--ochre-500)",
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-bold)",
        fontSize: dim * 0.38,
        border: sticker
          ? "var(--stroke-bold) solid var(--border-ink)"
          : "var(--stroke) solid var(--border-soft)",
        boxShadow: sticker ? "var(--shadow-sticker-sm)" : "none",
        flexShrink: 0,
        ...style,
      }}
      {...rest}
    >
      {src ? (
        <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        initials || "?"
      )}
    </span>
  );
}

export function Sparkle({ fill = "var(--accent-2)", size = 48, style = {}, className = "" }) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24 3 C26.5 16.5 31.5 21.5 45 24 C31.5 26.5 26.5 31.5 24 45 C21.5 31.5 16.5 26.5 3 24 C16.5 21.5 21.5 16.5 24 3Z"
        fill={fill}
        stroke="var(--border-ink)"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
