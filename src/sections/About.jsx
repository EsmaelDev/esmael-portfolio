import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { site } from "../data/site.config";

const principles = [
  {
    num: "01",
    title: "Useful first.",
    copy: "If it doesn't help a real person do a real thing, it doesn't ship. Every feature here earns its place.",
  },
  {
    num: "02",
    title: "Details are the design.",
    copy: "Spacing, contrast, focus states, load order — the small things are the whole thing.",
  },
  {
    num: "03",
    title: "Keep it honest.",
    copy: "No fake buttons, no invented metrics, no borrowed work. What you see here is what exists.",
  },
  {
    num: "04",
    title: "Learn by building.",
    copy: "The fastest way to understand something is to break it while making it — then fix it properly.",
  },
];

export default function About() {
  return (
    <section className="section" id="about" aria-label="About me">
      <div className="container about__grid">
        <div className="about__lead">
          <Reveal>
            <p className="overline">02 — About</p>
            <h2 className="section-head__title">
              Student by title,{" "}
              <span className="serif-accent">builder</span> by habit.
            </h2>
            <p className="about__statement">
              I like software that pays rent — pages that load fast, menus that
              just work, code the next person can read.
            </p>
          </Reveal>

          <Reveal delay={120} className="about__body">
            <p>
              I'm Esmael Gemechu, a Software Engineering student at Arba Minch
              University in Arba Minch, Ethiopia. My GitHub bio reads
              “Software Engineering Student | Full-Stack Developer | AI &amp; Web
              Enthusiast” — and that's genuinely the order I'd put things in:
              study the craft, build the thing, stay curious about what's next.
            </p>
            <p>
              What pulls me toward software is usefulness. A bakery that can
              finally show its cakes beautifully, a clothing center whose
              garments are presented with dignity, a hotel menu that lives one
              scan away — these are small pieces of software that make someone's
              day slightly better, and that's the kind of work I want to keep
              doing.
            </p>
            <p>
              I'm early in the journey and honest about it. Every project on
              this site is a learning artifact as much as a product — designed,
              built and improved in the open, commit by commit, on GitHub.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="facts">
            <h3 className="facts__title">In short</h3>
            <dl>
              <div className="facts__row">
                <dt>Studying</dt>
                <dd>Software Engineering — Arba Minch University</dd>
              </div>
              <div className="facts__row">
                <dt>Based in</dt>
                <dd>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5em",
                    }}
                  >
                    <Icon name="mapPin" size={14} /> {site.location}
                  </span>
                </dd>
              </div>
              <div className="facts__row">
                <dt>Focused on</dt>
                <dd>Useful, fast, accessible web experiences</dd>
              </div>
              <div className="facts__row">
                <dt>Find me</dt>
                <dd>
                  <a href={site.github} target="_blank" rel="noreferrer noopener">
                    github.com/EsmaelDev
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <ul className="principles" style={{ listStyle: "none" }}>
            {principles.map((p) => (
              <li key={p.num}>
                <span className="num">{p.num}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.copy}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
