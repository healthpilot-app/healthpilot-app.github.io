import type { ReactNode } from "react";

export function PrivacyPage() {
  return (
    <article className="relative px-6 pb-24 pt-16 lg:px-10 lg:pt-24">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <header className="mb-14 border-b border-white/10 pb-10">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path
                d="M19 12H5M11 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to home
          </a>
          <h1 className="mt-6 text-[40px] font-semibold leading-[1.05] tracking-tight md:text-[52px] text-balance">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-white/50">Last updated: 9 May 2026</p>
        </header>

        {/* Body */}
        <div className="space-y-16 text-[16px] leading-[1.75] text-white/75">
          <Intro />

          <Section n="1" title="Summary in plain English">
            <List>
              <li>
                HealthPilot stores your data <Strong>on your device</Strong>. We operate no servers
                and do not collect your data ourselves.
              </li>
              <li>
                The AI Coach, Meal Snap, and Document Analysis features send data to a{" "}
                <Strong>third-party AI provider you choose</Strong> (Anthropic, OpenAI, Google,
                OpenRouter, NVIDIA, or a custom OpenAI-compatible endpoint). You supply your own
                API key. The app sends requests directly from your device to the provider — never
                through our servers.
              </li>
              <li>
                We never sell your data, never share it for advertising, and never use it to train
                AI models ourselves.
              </li>
              <li>
                You can revoke AI consent, delete your API key, and export or wipe your local data
                at any time inside the app.
              </li>
            </List>
          </Section>

          <Section n="2" title="Data we collect and where it lives">
            <SubHeading>2.1 On-device only</SubHeading>
            <p>
              The following data lives in encrypted-at-rest storage on your iPhone or iPad. None
              of it is uploaded to any HealthPilot-operated server (we do not run any).
            </p>
            <DataTable
              headers={["Category", "How collected", "Where stored"]}
              rows={[
                [
                  "Profile (name, age, gender, goals, declared health concerns, diet preference, activity level, medical conditions, medications)",
                  "You enter it during onboarding or in Settings",
                  "iOS AsyncStorage",
                ],
                [
                  "Apple Health metrics (steps, sleep, calories, water, weight, BMI, heart rate, VO2 max, blood pressure, glucose, workouts, mindful minutes)",
                  "Read with your permission via Apple's HealthKit API",
                  "iOS SQLite (summarised daily values; raw HealthKit records remain in Apple's database, not ours)",
                ],
                ["Food logs (meals, photos, macros)", "You log them manually or via Meal Snap", "iOS SQLite + on-device files"],
                ["Workouts", "Imported from Apple Health, optionally with route + flyover videos", "iOS SQLite + on-device files"],
                [
                  "Mood / energy check-ins, water intake, medicine and supplement logs",
                  "You enter manually",
                  "iOS SQLite",
                ],
                [
                  "Health documents (lab reports, prescriptions, photos)",
                  "You upload them",
                  "On-device files; extracted text in SQLite",
                ],
                ["Chat conversations with the AI Coach", "Generated as you chat", "iOS SQLite"],
                [
                  "Custom instructions and AI memory items",
                  "You author them, or the app extracts durable facts from chats with your permission",
                  "iOS AsyncStorage",
                ],
                [
                  "App preferences (theme, units, timezone, reminder settings, AI provider choice and API key)",
                  "You set them in Settings",
                  "iOS AsyncStorage",
                ],
              ]}
            />

            <SubHeading>2.2 Data we do not collect</SubHeading>
            <List>
              <li>We do not collect any analytics, telemetry, crash reports, or usage data.</li>
              <li>We do not collect device identifiers (IDFA, advertising IDs).</li>
              <li>
                We do not access your contacts, microphone, or location for any cloud-bound
                purpose. (Location is read on-device only when the optional 3D Flyover feature
                renders a workout route, and is never transmitted.)
              </li>
              <li>We do not have a backend; HealthPilot operates no servers, no databases, and no logs.</li>
            </List>
          </Section>

          <Section n="3" title="Third-party AI services">
            <p>
              The AI Coach, Meal Snap, and Document Analysis features send selected data to an AI
              provider <em>you</em> choose in <Code>Settings → AI Coach</Code>. You supply your own
              API key. Requests go{" "}
              <Strong>directly from your device to the provider over HTTPS</Strong>. HealthPilot
              does not proxy, cache, or log these requests.
            </p>
            <p>
              You will be asked to explicitly agree to this data sharing the first time the app
              launches (or after this policy materially changes). You can revoke consent at any
              time in <Code>Settings → AI Coach → Data Sharing &amp; Privacy</Code>; doing so
              immediately disables every AI feature.
            </p>

            <SubHeading>3.1 Supported providers and endpoints</SubHeading>
            <DataTable
              headers={["Provider", "API endpoint", "Their privacy policy"]}
              rows={[
                ["Anthropic (Claude)", "api.anthropic.com", { link: { href: "https://www.anthropic.com/legal/privacy", label: "anthropic.com/legal/privacy" } }],
                ["OpenAI (GPT)", "api.openai.com", { link: { href: "https://openai.com/policies/privacy-policy", label: "openai.com/policies/privacy-policy" } }],
                ["Google (Gemini)", "generativelanguage.googleapis.com", { link: { href: "https://policies.google.com/privacy", label: "policies.google.com/privacy" } }],
                ["OpenRouter", "openrouter.ai", { link: { href: "https://openrouter.ai/privacy", label: "openrouter.ai/privacy" } }],
                ["NVIDIA NIM", "integrate.api.nvidia.com", { link: { href: "https://www.nvidia.com/en-us/about-nvidia/privacy-policy/", label: "nvidia.com/en-us/about-nvidia/privacy-policy" } }],
                ["Custom (user-supplied)", "Your endpoint", "Per your own configuration"],
              ]}
            />

            <SubHeading>3.2 What is sent to the provider</SubHeading>
            <List>
              <li>Your chat messages, plus any photos or PDFs you upload.</li>
              <li>Your profile fields (name, age, gender, goals, declared concerns, diet, activity level).</li>
              <li>
                A summary of your day from Apple Health (steps, sleep, calories, water, exercise
                minutes, latest weight / BMI / vitals) and a 7-day trend.
              </li>
              <li>Your food log roll-up and recent workouts.</li>
              <li>Custom instructions and AI memory items you have authored or approved.</li>
              <li>
                Names of any uploaded documents. Full extracted text of a document is sent only
                when you explicitly upload that document for analysis or chat about it.
              </li>
            </List>

            <SubHeading>3.3 What is not sent</SubHeading>
            <List>
              <li>Raw HealthKit records — only the summarised values listed above.</li>
              <li>
                Your API key — used only to authenticate the request; not included in the request
                body.
              </li>
              <li>Other users' data — HealthPilot is single-user, on-device.</li>
              <li>Anything you have not typed, uploaded, or logged.</li>
            </List>

            <p>
              Each provider's privacy policy governs how they store, retain, and use the data they
              receive. Please review the provider's terms before agreeing.
            </p>
          </Section>

          <Section n="4" title="Other third-party services">
            <DataTable
              headers={["Service", "Purpose", "Data sent"]}
              rows={[
                ["Apple HealthKit", "Read health metrics", "None — read-only on-device API"],
                [
                  "Apple App Store / iTunes Lookup",
                  "Check for new app versions",
                  "None — we read public version metadata for the app's bundle ID; no user identifiers are sent",
                ],
                [
                  "Mapbox (only if 3D Flyover is enabled)",
                  "Render terrain tiles for workout flyover videos",
                  "Map tile coordinates only; no personal identifiers",
                ],
              ]}
            />
          </Section>

          <Section n="5" title="How long we retain your data">
            <p>
              All data lives on your device for as long as you keep the app installed. Deleting
              the app removes everything from device storage. There is nothing for us to retain on
              our end — we have no servers.
            </p>
          </Section>

          <Section n="6" title="Your rights and choices">
            <List>
              <li>
                <Strong>Disable AI features:</Strong> Settings → AI Coach → "Disable AI Coach".
                Removes the consent and disables every AI call until you re-enable.
              </li>
              <li>
                <Strong>Delete API key:</Strong> Settings → AI Coach → "Remove saved key".
              </li>
              <li>
                <Strong>Export your data:</Strong> Settings → Backup &amp; Restore → "Export
                backup". Produces an encrypted bundle of your SQLite + preferences for you to
                keep.
              </li>
              <li>
                <Strong>Wipe everything:</Strong> Delete the app from your device. iOS will purge
                all app storage.
              </li>
              <li>
                <Strong>Revoke HealthKit access:</Strong> iOS Settings → Privacy &amp; Security →
                Health → HealthPilot → toggle scopes off.
              </li>
            </List>
            <p>
              Because all data is on-device and never leaves it via our infrastructure, GDPR /
              CCPA "right to access" and "right to erasure" requests are fulfilled directly by
              you, on your device, using the controls above. If you have additional questions,
              email{" "}
              <Link href="mailto:ai.healthpilot@gmail.com">ai.healthpilot@gmail.com</Link>.
            </p>
          </Section>

          <Section n="7" title="Children's privacy">
            <p>
              HealthPilot is not directed to children under 13 (or under 16 in the EEA / UK). We
              do not knowingly collect data from such users. If a parent or guardian believes
              their child has used the app, please contact us at the email above and we will help
              confirm there is no on-device data we can access (we cannot — but we will guide them
              through deletion).
            </p>
          </Section>

          <Section n="8" title="Security">
            <p>
              On-device data is protected by iOS file-system encryption (Data Protection class).
              The API key you supply for AI features is stored in iOS-encrypted AsyncStorage and
              is only used as a request-authentication header. All network requests use HTTPS /
              TLS.
            </p>
          </Section>

          <Section n="9" title="Medical disclaimer">
            <p>
              HealthPilot's AI Coach is for informational and educational purposes only and is{" "}
              <Strong>not a substitute for professional medical advice, diagnosis, or treatment</Strong>.
              Always seek the advice of a qualified healthcare provider in addition to using this
              app and before making any medical decisions. Never disregard professional medical
              advice or delay seeking it because of something you have read in HealthPilot.
            </p>
          </Section>

          <Section n="10" title="Changes to this policy">
            <p>
              If we materially change what data is sent or who it is sent to, the next launch of
              the app will re-present the consent screen with the updated disclosure. The "Last
              updated" date at the top of this page reflects the most recent revision.
            </p>
          </Section>

          <Section n="11" title="Contact">
            <p>
              Questions, concerns, or requests?{" "}
              <Link href="mailto:ai.healthpilot@gmail.com">ai.healthpilot@gmail.com</Link>
            </p>
          </Section>
        </div>
      </div>
    </article>
  );
}

function Intro() {
  return (
    <div className="rounded-2xl border border-violet-400/20 bg-violet-500/5 p-6 text-[16.5px] leading-[1.7] text-white/85">
      This Privacy Policy explains what data HealthPilot ("the app", "we", "us") collects, how it
      is used, and the choices you have. HealthPilot is published by Shanti Informatics and is
      available on the Apple App Store. We can be reached at{" "}
      <Link href="mailto:ai.healthpilot@gmail.com">ai.healthpilot@gmail.com</Link>.
    </div>
  );
}

function Section({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <section className="scroll-mt-24" id={`section-${n}`}>
      <h2 className="mb-6 flex items-baseline gap-3 border-b border-white/10 pb-4 text-[22px] font-semibold tracking-tight text-white">
        <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-violet-300/80">
          §{n}
        </span>
        <span>{title}</span>
      </h2>
      <div className="space-y-5">{children}</div>
    </section>
  );
}

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="!mt-10 text-[12px] font-semibold uppercase tracking-[0.16em] text-violet-200">
      {children}
    </h3>
  );
}

function List({ children }: { children: ReactNode }) {
  return (
    <ul className="space-y-3 [&>li]:relative [&>li]:pl-6 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.7em] [&>li]:before:h-1.5 [&>li]:before:w-1.5 [&>li]:before:rounded-full [&>li]:before:bg-gradient-to-br [&>li]:before:from-violet-300 [&>li]:before:to-violet-600 [&>li]:before:content-['']">
      {children}
    </ul>
  );
}

function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-white">{children}</strong>;
}

function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-md border border-violet-400/20 bg-violet-500/10 px-1.5 py-0.5 font-mono text-[13.5px] text-violet-200">
      {children}
    </code>
  );
}

function Link({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="font-medium text-violet-300 underline decoration-violet-300/30 underline-offset-4 transition-colors hover:text-violet-200 hover:decoration-violet-200/60"
    >
      {children}
    </a>
  );
}

type Cell = string | { link: { href: string; label: string } };

function DataTable({ headers, rows }: { headers: string[]; rows: Cell[][] }) {
  return (
    <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
      <div className="overflow-x-auto">
        <table className="w-full text-[14.5px]">
          <thead>
            <tr className="bg-violet-500/10">
              {headers.map((h) => (
                <th
                  key={h}
                  className="border-b border-white/10 px-5 py-3.5 text-left text-[12px] font-semibold uppercase tracking-[0.12em] text-violet-200"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-white/5 last:border-b-0 hover:bg-white/[0.02]"
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className="px-5 py-4 align-top leading-relaxed text-white/75"
                  >
                    {typeof cell === "string" ? (
                      cell
                    ) : (
                      <Link href={cell.link.href}>{cell.link.label}</Link>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

