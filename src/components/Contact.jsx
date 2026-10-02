import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionHeading, { Reveal } from "./SectionHeading";

// ============================================================
// Nastav tyto hodnoty po registraci na emailjs.com
// Nebo pouzij .env soubor (viz .env.example)
// ============================================================
const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_xxxxxxx";
const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_xxxxxxx";
const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "xxxxxxxxxxxxxxxxxxxx";

const SOCIAL = [
  {
    name: "GitHub",
    icon: "img/gh.png",
    href: "https://github.com/Fietstopa",
  },
  {
    name: "LinkedIn",
    icon: "img/linkedin.png",
    href: "https://www.linkedin.com/in/bohdan-myshko-716577206/",
  },
  {
    name: "Instagram",
    icon: "img/ig.png",
    href: "https://www.instagram.com/bohdxn.x/",
  },
  {
    name: "Facebook",
    icon: "img/fb.png",
    href: "https://www.facebook.com/profile.php?id=100014153014796",
  },
];

function FloatingInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  required,
  textarea,
}) {
  const [focused, setFocused] = useState(false);
  const raised = focused || value.length > 0;

  const sharedStyle = {
    width: "100%",
    background: "var(--bg)",
    border: `1px solid ${focused ? "var(--accent)" : "var(--border-strong)"}`,
    padding: textarea ? "2.2rem 1.1rem 0.9rem" : "1.6rem 1.1rem 0.5rem",
    color: "var(--text)",
    fontSize: "1rem",
    fontFamily: "inherit",
    outline: "none",
    resize: textarea ? "vertical" : undefined,
    minHeight: textarea ? "130px" : undefined,
    transition: "border-color 0.25s, box-shadow 0.25s",
    boxShadow: focused ? "0 0 0 3px var(--accent-bg)" : "none",
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <motion.label
        htmlFor={id}
        animate={{
          top: raised ? "10px" : textarea ? "1.1rem" : "50%",
          translateY: raised ? "0%" : "-50%",
          fontSize: raised ? "0.72rem" : "0.95rem",
          color: raised
            ? focused
              ? "var(--accent-text)"
              : "var(--text-muted)"
            : "var(--text-muted)",
        }}
        transition={{ duration: 0.2 }}
        style={{
          position: "absolute",
          left: "1.1rem",
          pointerEvents: "none",
          fontWeight: 500,
          letterSpacing: "0.02em",
          zIndex: 1,
        }}
      >
        {label}
        {required && <span style={{ color: "var(--text-muted)" }}> *</span>}
      </motion.label>

      {textarea ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          style={sharedStyle}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          style={sharedStyle}
        />
      )}
    </div>
  );
}

const SendIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          message: `Předmět: ${form.subject}\nEmail: ${form.email}\n\n${form.message}`,
          time: new Date().toLocaleString("cs-CZ"),
          reply_to: form.email,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="kontakt"
      className="dot-grid"
      style={{
        padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeading style={{ marginBottom: "3.5rem" }}>Napiš mi</SectionHeading>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
            gap: "clamp(2.5rem, 6vw, 5rem)",
            alignItems: "start",
          }}
        >
          {/* ── Left panel – info ── */}
          <Reveal
            style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
          >
            <div>
              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                  fontSize: "1.05rem",
                  maxWidth: "42ch",
                  marginBottom: "1.5rem",
                }}
              >
                Máš projekt, nápad nebo chceš jen říct ahoj? Napiš mi – odpovím
                co nejdříve. Aktuálně mám prostor na nové projekty.
              </p>
              <a
                href="mailto:bmisko984@gmail.com"
                className="contact-email"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  fontSize: "clamp(1.15rem, 2.4vw, 1.5rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  paddingBottom: "4px",
                  borderBottom: "1px solid var(--border-strong)",
                }}
              >
                <MailIcon />
                bmisko984@gmail.com
              </a>
            </div>

            {/* Social links */}
            <div>
              <p className="label" style={{ marginBottom: "0.9rem" }}>
                Najdeš mě i na
              </p>
              <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap" }}>
                {SOCIAL.map((s) => (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    title={s.name}
                    whileHover={{ y: -2, borderColor: "rgba(255,255,255,0.3)" }}
                    whileTap={{ y: 0, scale: 0.96 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "46px",
                      height: "46px",
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <img
                      src={s.icon}
                      alt=""
                      style={{
                        width: "20px",
                        height: "20px",
                        objectFit: "contain",
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── Right panel – form ── */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                padding: "clamp(1.5rem, 4vw, 2.5rem)",
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
                  gap: "1.2rem",
                }}
              >
                <FloatingInput
                  id="name"
                  label="Jméno"
                  value={form.name}
                  onChange={update("name")}
                  required
                />
                <FloatingInput
                  id="email"
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  required
                />
              </div>

              <FloatingInput
                id="subject"
                label="Předmět"
                value={form.subject}
                onChange={update("subject")}
                required
              />

              <FloatingInput
                id="message"
                label="Zpráva"
                value={form.message}
                onChange={update("message")}
                required
                textarea
              />

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "sending" || status === "success"}
                whileHover={status === "idle" ? { y: -2 } : {}}
                whileTap={status === "idle" ? { y: 0, scale: 0.98 } : {}}
                style={{
                  width: "100%",
                  padding: "14px",
                  border: "none",
                  fontWeight: 500,
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition: "background 0.3s, opacity 0.2s",
                  background:
                    status === "success"
                      ? "#0f9d58"
                      : status === "error"
                        ? "var(--danger)"
                        : "var(--text)",
                  color: status === "idle" || status === "sending" ? "var(--bg)" : "#fff",
                  opacity: status === "sending" ? 0.7 : 1,
                }}
              >
                <AnimatePresence mode="wait">
                  {status === "idle" && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      Odeslat zprávu <SendIcon />
                    </motion.span>
                  )}
                  {status === "sending" && (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <SpinnerIcon /> Odesílám...
                    </motion.span>
                  )}
                  {status === "success" && (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <CheckIcon /> Zpráva odeslána!
                    </motion.span>
                  )}
                  {status === "error" && (
                    <motion.span
                      key="error"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Neodesláno – zkus to znovu
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <p
                role="status"
                aria-live="polite"
                style={{
                  color: status === "error" ? "var(--danger)" : "var(--text-muted)",
                  fontSize: "0.85rem",
                  textAlign: "center",
                  minHeight: "1.4em",
                }}
              >
                {status === "error" &&
                  "Zprávu se nepodařilo odeslat. Zkus to za chvíli, nebo mi napiš přímo na email."}
                {status === "success" && "Díky! Ozvu se ti co nejdřív."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
      <style>{`
        .contact-email { transition: color 0.2s, border-color 0.2s; }
        .contact-email svg { color: var(--text-muted); transition: color 0.2s; }
        .contact-email:hover { color: var(--accent-text); border-color: var(--accent) !important; }
        .contact-email:hover svg { color: var(--accent-text); }
      `}</style>
    </section>
  );
}

const SpinnerIcon = () => (
  <motion.svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
  >
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </motion.svg>
);

const MailIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <rect x="2" y="4" width="20" height="16" />
    <path d="M2 6l10 7 10-7" />
  </svg>
);

