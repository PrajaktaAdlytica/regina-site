import React, { useEffect, useState } from "react";
import { EnvelopeSimple, Copy, Check } from "@phosphor-icons/react";
import { organisation as org } from "./content.js";
import { Button } from "./components.jsx";
export function validateContact(values) {
  const errors = {};
  if (!values.name?.trim() || values.name.length > 100)
    errors.name = "Podaj imię (maksymalnie 100 znaków).";
  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email || "") ||
    values.email.length > 254
  )
    errors.email = "Podaj poprawny adres email.";
  if (!values.subject?.trim() || values.subject.length > 160)
    errors.subject = "Podaj temat (maksymalnie 160 znaków).";
  if (
    !values.message?.trim() ||
    values.message.trim().length < 10 ||
    values.message.length > 5000
  )
    errors.message = "Wpisz wiadomość od 10 do 5000 znaków.";
  return errors;
}
export default function ContactForm() {
  const [values, setValues] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    }),
    [errors, setErrors] = useState({}),
    [draft, setDraft] = useState(null),
    [copied, setCopied] = useState(false);
  useEffect(() => {
    const subject = new URLSearchParams(location.search).get("temat");
    if (subject) setValues((v) => ({ ...v, subject: subject.slice(0, 160) }));
  }, []);
  const change = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    setDraft(null);
    setCopied(false);
  };
  const submit = (e) => {
    e.preventDefault();
    const next = validateContact(values);
    setErrors(next);
    if (Object.keys(next).length) {
      document.getElementById("contact-" + Object.keys(next)[0])?.focus();
      return;
    }
    const body = `Imię: ${values.name.trim()}\nEmail do odpowiedzi: ${values.email.trim()}\n\n${values.message.trim()}`;
    setDraft({
      body,
      url: `mailto:${org.email}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`,
    });
  };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(
        `Do: ${org.email}\nTemat: ${values.subject}\n\n${draft.body}`,
      );
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };
  return (
    <div className="contact-form-panel">
      <p className="eyebrow">Napisz do nas</p>
      <h2>Jak możemy pomóc?</h2>
      <p className="form-explainer">
        <EnvelopeSimple size={20} />
        Formularz przygotuje wiadomość w Twoim programie pocztowym. Nic nie
        zostanie wysłane automatycznie.
      </p>
      <form onSubmit={submit} noValidate>
        <div className="form-grid">
          {[
            ["name", "Imię", "text", "given-name"],
            ["email", "Email", "email", "email"],
            ["subject", "Temat", "text", "off"],
          ].map(([name, label, type, auto]) => (
            <div
              key={name}
              className={"form-field " + (name === "subject" ? "wide" : "")}
            >
              <label htmlFor={"contact-" + name}>
                {label} <span aria-hidden="true">*</span>
              </label>
              <input
                id={"contact-" + name}
                name={name}
                type={type}
                autoComplete={auto}
                value={values[name]}
                onChange={change}
                required
                maxLength={
                  name === "name" ? 100 : name === "subject" ? 160 : 254
                }
                aria-invalid={!!errors[name]}
                aria-describedby={errors[name] ? name + "-error" : undefined}
              />
              {errors[name] && (
                <p id={name + "-error"} className="field-error">
                  {errors[name]}
                </p>
              )}
            </div>
          ))}
          <div className="form-field wide">
            <label htmlFor="contact-message">
              Wiadomość <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows="6"
              value={values.message}
              onChange={change}
              required
              minLength={10}
              maxLength={5000}
              aria-invalid={!!errors.message}
              aria-describedby={
                errors.message ? "message-error" : "message-hint"
              }
            />
            {errors.message ? (
              <p id="message-error" className="field-error">
                {errors.message}
              </p>
            ) : (
              <p id="message-hint" className="field-hint">
                Nie zamieszczaj danych wrażliwych. Maksymalnie 5000 znaków.
              </p>
            )}
          </div>
        </div>
        <p className="form-privacy">
          Pola oznaczone * są wymagane. Przeczytaj{" "}
          <a href="/prywatnosc/">informację o prywatności</a>.
        </p>
        <Button type="submit">Przygotuj wiadomość</Button>
      </form>
      {draft && (
        <div className="draft-result" role="status">
          <h3>Wiadomość jest przygotowana.</h3>
          <p>
            Otwórz program pocztowy, sprawdź treść i wyślij ją. Możesz też
            skopiować wiadomość i wkleić ją do swojej poczty.
          </p>
          <a className="site-text-link" href={draft.url}>
            Otwórz program pocztowy <EnvelopeSimple size={20} />
          </a>
          <button className="copy-message" onClick={copy}>
            {copied ? <Check size={18} /> : <Copy size={18} />}{" "}
            {copied ? "Skopiowano" : "Kopiuj wiadomość"}
          </button>
          <p className="field-hint">Adres odbiorcy: {org.email}</p>
        </div>
      )}
    </div>
  );
}
