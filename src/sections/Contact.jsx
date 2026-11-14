import { useState } from "react";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { site } from "../data/site.config";
import { copyText } from "../lib/utils";

function CopyButton({ text, message }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="btn btn--ghost btn--small"
      onClick={async () => {
        await copyText(text, message);
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      }}
    >
      <Icon name={copied ? "check" : "copy"} size={14} />
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export default function Contact() {
  return (
    <section className="section" id="contact" aria-label="Contact">
      <div className="container">
        <Reveal className="section-head">
          <p className="overline">05 — Contact</p>
          <h2 className="section-head__title">
            Let's build something{" "}
            <span className="serif-accent">useful</span>.
          </h2>
          <p className="section-head__intro">
            The fastest way to reach me is email — whether it's a project, a
            question, or feedback on my code. I read everything.
          </p>
        </Reveal>

        <div className="contact__grid">
          <Reveal className="copy-card" delay={0}>
            <span className="copy-card__label">Email</span>
            <span className="copy-card__value">{site.email}</span>
            <div className="copy-card__actions">
              <CopyButton text={site.email} message="Email address copied" />
              <a className="btn btn--gold btn--small" href={`mailto:${site.email}`}>
                <Icon name="mail" size={14} />
                Write
              </a>
            </div>
          </Reveal>

          <Reveal className="copy-card" delay={90}>
            <span className="copy-card__label">Phone</span>
            <span className="copy-card__value">{site.phoneDisplay}</span>
            <div className="copy-card__actions">
              <CopyButton text={site.phone} message="Phone number copied" />
              <a className="btn btn--gold btn--small" href={`tel:${site.phone}`}>
                <Icon name="phone" size={14} />
                Call
              </a>
            </div>
          </Reveal>

          <Reveal className="copy-card" delay={180}>
            <span className="copy-card__label">GitHub</span>
            <span className="copy-card__value">github.com/EsmaelDev</span>
            <div className="copy-card__actions">
              <CopyButton
                text={site.github}
                message="GitHub URL copied"
              />
              <a
                className="btn btn--gold btn--small"
                href={site.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon name="github" size={14} />
                Open profile
              </a>
            </div>
          </Reveal>

          <Reveal className="copy-card" delay={270}>
            <span className="copy-card__label">Digital Card</span>
            <span className="copy-card__value">Esmael Gemechu (AMU)</span>
            <div className="copy-card__actions">
              <button
                type="button"
                className="btn btn--gold btn--small"
                onClick={() => {
                  const vcard = [
                    "BEGIN:VCARD",
                    "VERSION:3.0",
                    `FN:${site.name}`,
                    `N:Gemechu;Esmael;;;`,
                    `TITLE:${site.role}`,
                    `ORG:${site.school}`,
                    `EMAIL;TYPE=INTERNET,HOME:${site.email}`,
                    `TEL;TYPE=CELL:${site.phone}`,
                    `URL:${site.github}`,
                    `NOTE:Software Engineering Student at Arba Minch University, Ethiopia`,
                    "END:VCARD",
                  ].join("\r\n");

                  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = "Esmael-Gemechu-AMU.vcf";
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                  URL.revokeObjectURL(url);
                }}
              >
                <Icon name="check" size={14} />
                Add to contacts (.vcf)
              </button>
            </div>
          </Reveal>
        </div>

        <p className="contact__foot">
          <Icon name="info" size={15} />
          <span>
            No contact form — this portfolio is fully static and honest about
            it. (Want a real form later? The README explains how to wire one
            up.)
          </span>
        </p>
      </div>
    </section>
  );
}
