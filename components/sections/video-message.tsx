"use client"

import { Cinzel } from "next/font/google"
import localFont from "next/font/local"
import { useSiteConfig } from "@/hooks/use-site-config"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

const theSeasons = localFont({
  src: "../../Font/Fontspring-DEMO-theseasons-reg.otf",
  display: "swap",
  variable: "--font-the-seasons",
})

const aboveTheBeyond = localFont({
  src: "../../Font/above-the-beyond-script.otf",
  display: "swap",
  variable: "--font-above-beyond",
})

const OUTSIDE_TEXT = "#FFFFFF"
const OUTSIDE_TEXT_MUTED = "rgba(255, 255, 255, 0.88)"
const OUTSIDE_TITLE_SHADOW =
  "0 2px 6px rgba(0, 0, 0, 0.28), 0 0 18px rgba(0, 0, 0, 0.12)"

const palette = {
  body: "var(--color-welcome-text)",
  heading: "var(--color-welcome-navy)",
  accent: "var(--color-welcome-green)",
} as const

const outsideDividerLineStyle = {
  background:
    "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.55), transparent)",
} as const

const insideDividerLineStyle = {
  background:
    "linear-gradient(to right, transparent, color-mix(in srgb, var(--color-motif-deep) 38%, transparent), transparent)",
} as const

const ct = {
  body: "text-xs sm:text-sm md:text-base",
  bodyLg: "text-sm sm:text-base md:text-lg",
  btn: "text-[0.625rem] sm:text-[0.6875rem] md:text-xs",
} as const

const cardStyle = {
  background: "var(--color-welcome-bg)",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "color-mix(in srgb, var(--color-motif-deep) 14%, transparent)",
  boxShadow:
    "0 8px 28px color-mix(in srgb, var(--color-motif-deep) 7%, transparent), inset 0 1px 0 color-mix(in srgb, white 70%, transparent)",
} as const

function OutsideDivider() {
  return (
    <div className="flex items-center justify-center gap-1.5">
      <span className="h-px w-6 sm:w-10" style={outsideDividerLineStyle} />
      <span className="h-0.5 w-0.5 rounded-full bg-white/50 sm:h-1 sm:w-1" aria-hidden />
      <span
        className="h-px w-6 sm:w-10"
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(255, 255, 255, 0.55), transparent)",
        }}
      />
    </div>
  )
}

function InsideDivider() {
  return (
    <div className="flex items-center justify-center gap-1.5">
      <span className="h-px w-6 sm:w-10" style={insideDividerLineStyle} />
      <span className="h-0.5 w-0.5 rounded-full bg-motif-deep/45 sm:h-1 sm:w-1" aria-hidden />
      <span
        className="h-px w-6 sm:w-10"
        style={{
          background:
            "linear-gradient(to left, transparent, color-mix(in srgb, var(--color-motif-deep) 38%, transparent))",
        }}
      />
    </div>
  )
}

function VideoMessageTitle() {
  return (
    <h2
      className="relative mx-auto w-full max-w-full text-center"
      style={
        {
          "--title-size": "clamp(2.15rem, 11vw, 4.5rem)",
          "--script-size": "clamp(1.1rem, 4.5vw, 2.25rem)",
          "--script-overlap": "clamp(-0.65rem, -2.8vw, -1.5rem)",
        } as React.CSSProperties
      }
    >
      <span
        className={`${theSeasons.className} block uppercase leading-[0.78] tracking-[0.08em] min-[400px]:tracking-[0.11em] sm:tracking-[0.15em] md:tracking-[0.18em]`}
        style={{
          fontSize: "var(--title-size)",
          color: OUTSIDE_TEXT,
          textShadow: OUTSIDE_TITLE_SHADOW,
        }}
      >
        Send Us a Video Message
      </span>
      <span
        aria-hidden
        className={`${aboveTheBeyond.className} relative z-10 mx-auto block w-fit max-w-full px-1 leading-[0.88] sm:leading-[0.9]`}
        style={{
          marginTop: "var(--script-overlap)",
          fontSize: "var(--script-size)",
          color: OUTSIDE_TEXT_MUTED,
          textShadow: OUTSIDE_TITLE_SHADOW,
        }}
      >
        A message we will treasure
      </span>
      <span className="sr-only">A message we will treasure</span>
    </h2>
  )
}

export function VideoMessage() {
  const siteConfig = useSiteConfig()
  const uploadUrl = siteConfig.snapShare?.googleDriveLink ?? ""

  return (
    <section
      id="video-message"
      className={`${theSeasons.variable} ${aboveTheBeyond.variable} relative z-10 bg-transparent pt-8 pb-8 sm:pt-10 sm:pb-10 md:pt-12 md:pb-12 lg:pt-14 lg:pb-14`}
    >
      <div className="relative z-20 mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
        <div className="relative z-20 px-6 text-center sm:px-10 md:px-12">
          <div className="mx-auto mb-5 sm:mb-6 md:mb-7">
            <OutsideDivider />
          </div>
          <div className="mx-auto mt-2 sm:mt-3 md:mt-4">
            <VideoMessageTitle />
          </div>
          <div className="flex items-center justify-center pt-3 sm:pt-4">
            <span className="h-px w-16 sm:w-24 md:w-32 bg-white/50" />
          </div>
        </div>

        <div
          className="relative mt-6 overflow-hidden rounded-xl border backdrop-blur-xl sm:mt-8 sm:rounded-2xl sm:backdrop-blur-2xl md:mt-10"
          style={cardStyle}
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-white/35 via-white/8 to-transparent"
            aria-hidden
          />

          <div className="relative z-20 space-y-4 px-4 py-6 text-center sm:space-y-5 sm:px-6 sm:py-8 md:space-y-6 md:px-8 md:py-10">
            <div
              className={`font-goudy-italic ${ct.bodyLg} space-y-2.5 leading-relaxed sm:space-y-3`}
              style={{ color: palette.body }}
            >
              <p>
                As we begin this new chapter under the Lord&apos;s guidance, we are deeply grateful
                for everyone He has placed in our lives.
              </p>
              <p style={{ color: palette.accent }}>
                You are a blessing we hold close to our hearts.
              </p>
              <p>
                We would love to receive a short video message from you—something we can keep and
                look back on through the years ahead.
              </p>
              <p>
                Your words will make our wedding day, and our life together, even more meaningful.
                Thank you for your love and support.
              </p>
            </div>

            <div className="mx-auto flex items-center justify-center pt-1 sm:pt-2">
              <InsideDivider />
            </div>

            <div className="space-y-3 pt-2 sm:space-y-4 sm:pt-3">
              <p
                className={`font-goudy-italic ${ct.body}`}
                style={{ color: palette.heading }}
              >
                Upload your video message here:
              </p>

              {uploadUrl ? (
                <a
                  href={uploadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cinzel.className} group relative inline-flex items-center justify-center rounded-sm border px-6 py-2.5 font-semibold uppercase tracking-[0.2em] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:px-8 sm:py-3 sm:tracking-[0.24em] md:px-10 md:py-3.5 md:tracking-[0.28em] ${ct.btn}`}
                  style={{
                    backgroundColor: "var(--color-welcome-green)",
                    borderColor: "color-mix(in srgb, var(--color-welcome-navy) 35%, transparent)",
                    color: "var(--color-welcome-bg)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-welcome-navy)"
                    e.currentTarget.style.borderColor = "var(--color-welcome-green)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-welcome-green)"
                    e.currentTarget.style.borderColor =
                      "color-mix(in srgb, var(--color-welcome-navy) 35%, transparent)"
                  }}
                >
                  <span className="relative z-10">Upload Video Message</span>
                  <div
                    className="absolute inset-0 -z-0 rounded-sm opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-25"
                    style={{ backgroundColor: "var(--color-motif-deep)" }}
                  />
                </a>
              ) : (
                <p className={`font-goudy-italic ${ct.body}`} style={{ color: palette.body }}>
                  Upload link coming soon.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
