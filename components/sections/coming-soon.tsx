"use client"

import type React from "react"
import localFont from "next/font/local"
import { motion } from "motion/react"
import { Cinzel } from "next/font/google"

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

const MESSENGER_URL = "https://m.me/WeddingInvitationNaga"

const TEASER_PANELS = [
  { label: "Gallery", offset: "-translate-x-[18%] -rotate-3", delay: 0 },
  { label: "Details", offset: "translate-x-[8%] rotate-2", delay: 0.08 },
  { label: "Entourage", offset: "-translate-x-[6%] translate-y-[12%] -rotate-1", delay: 0.16 },
  { label: "RSVP", offset: "translate-x-[16%] translate-y-[8%] rotate-3", delay: 0.24 },
] as const

const CORNER_DECO_CLASS =
  "block h-auto w-auto max-w-[120px] sm:max-w-[160px] md:max-w-[220px] lg:max-w-[260px]"

function OrnamentalDivider() {
  return (
    <div className="flex items-center justify-center gap-1.5">
      <span
        className="h-px w-6 sm:w-10"
        style={{
          background:
            "linear-gradient(to right, transparent, color-mix(in srgb, var(--color-motif-deep) 38%, transparent))",
        }}
      />
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

function ComingSoonTitle() {
  return (
    <h2
      className="relative mx-auto w-full max-w-full text-center"
      style={
        {
          "--title-size": "clamp(2.4rem, 12vw, 5.25rem)",
          "--script-size": "clamp(1.25rem, 5.2vw, 2.6rem)",
          "--script-overlap": "clamp(-0.8rem, -3.4vw, -1.85rem)",
        } as React.CSSProperties
      }
    >
      <span
        className={`${theSeasons.className} block uppercase leading-[0.78] tracking-[0.08em] min-[400px]:tracking-[0.11em] sm:tracking-[0.15em] md:tracking-[0.18em]`}
        style={{
          fontSize: "var(--title-size)",
          color: "var(--color-welcome-navy)",
        }}
      >
        Coming Soon
      </span>
      <span
        aria-hidden
        className={`${aboveTheBeyond.className} relative z-10 mx-auto block w-fit max-w-full px-1 leading-[0.88] sm:leading-[0.9]`}
        style={{
          marginTop: "var(--script-overlap)",
          fontSize: "var(--script-size)",
          color: "var(--color-welcome-green)",
          textShadow:
            "0 1px 0 color-mix(in srgb, var(--color-welcome-bg) 95%, white), 0 0 10px color-mix(in srgb, var(--color-welcome-bg) 65%, white)",
        }}
      >
        the reveal awaits
      </span>
      <span className="sr-only">the reveal awaits</span>
    </h2>
  )
}

function BlurredTeaserLayer() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, color-mix(in srgb, var(--color-motif-soft) 55%, transparent), transparent 70%)",
        }}
      />

      {TEASER_PANELS.map((panel) => (
        <motion.div
          key={panel.label}
          className={`absolute left-1/2 top-[18%] w-[72%] max-w-md -translate-x-1/2 sm:top-[14%] sm:w-[58%] ${panel.offset}`}
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: panel.delay, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="relative overflow-hidden rounded-sm px-5 py-8 sm:px-7 sm:py-10"
            style={{
              background:
                "linear-gradient(160deg, color-mix(in srgb, var(--color-welcome-bg) 92%, white), color-mix(in srgb, var(--color-motif-soft) 70%, var(--color-welcome-bg)))",
              border: "1px solid color-mix(in srgb, var(--color-motif-deep) 12%, transparent)",
              boxShadow:
                "0 18px 48px color-mix(in srgb, var(--color-motif-deep) 12%, transparent)",
              filter: "blur(7px) saturate(0.85)",
              opacity: 0.55,
            }}
          >
            <div
              className={`${cinzel.className} mb-4 text-[0.55rem] uppercase tracking-[0.32em] sm:text-[0.625rem]`}
              style={{ color: "var(--color-welcome-heading)" }}
            >
              {panel.label}
            </div>
            <div className="space-y-2.5">
              <div
                className="h-2.5 w-[72%] rounded-full"
                style={{ background: "color-mix(in srgb, var(--color-motif-deep) 18%, transparent)" }}
              />
              <div
                className="h-2 w-full rounded-full"
                style={{ background: "color-mix(in srgb, var(--color-motif-deep) 12%, transparent)" }}
              />
              <div
                className="h-2 w-[88%] rounded-full"
                style={{ background: "color-mix(in srgb, var(--color-motif-deep) 12%, transparent)" }}
              />
              <div
                className="mt-5 h-24 w-full rounded-sm sm:h-28"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in srgb, var(--color-motif-accent) 45%, transparent), color-mix(in srgb, var(--color-welcome-green) 28%, transparent))",
                }}
              />
            </div>
          </div>
        </motion.div>
      ))}

      {/* Soft veil so blurred panels read as atmosphere, not content */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in srgb, var(--color-welcome-bg) 55%, transparent) 0%, color-mix(in srgb, var(--color-welcome-bg) 28%, transparent) 38%, color-mix(in srgb, var(--color-welcome-bg) 72%, transparent) 72%, var(--color-welcome-bg) 100%)",
          backdropFilter: "blur(2px)",
        }}
      />
    </div>
  )
}

export function ComingSoon() {
  return (
    <section
      id="coming-soon"
      className={`${theSeasons.variable} ${aboveTheBeyond.variable} relative min-h-[100svh] overflow-hidden`}
      style={{ background: "var(--color-welcome-bg)" }}
    >
      <BlurredTeaserLayer />

      <div className="pointer-events-none absolute right-0 top-0 z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/decoration/right-top-decoration.png" alt="" className={CORNER_DECO_CLASS} />
      </div>
      <div className="pointer-events-none absolute left-0 top-0 z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/decoration/left-top-decoration.png" alt="" className={CORNER_DECO_CLASS} />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/decoration/left-bottom-decoration.png" alt="" className={CORNER_DECO_CLASS} />
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/decoration/right-bottom-decoration.png" alt="" className={CORNER_DECO_CLASS} />
      </div>

      <div className="relative z-20 flex min-h-[100svh] flex-col items-center justify-center px-5 py-20 sm:px-8 sm:py-24 md:py-28">
        <motion.div
          className="mx-auto mb-6 sm:mb-7"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <OrnamentalDivider />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <ComingSoonTitle />
        </motion.div>

        <motion.p
          className={`${cinzel.className} mx-auto mt-7 max-w-md text-center text-[0.625rem] font-semibold uppercase tracking-[0.28em] sm:mt-8 sm:text-[0.6875rem] sm:tracking-[0.32em]`}
          style={{ color: "var(--color-welcome-heading)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          Feel the excitement?
        </motion.p>

        <motion.p
          className="mx-auto mt-4 max-w-sm text-center text-sm leading-relaxed sm:mt-5 sm:max-w-md sm:text-base"
          style={{ color: "var(--color-welcome-text)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          Every remaining section is waiting behind the veil — and will be revealed soon.
          This invitation is nearly complete.
        </motion.p>

        <motion.div
          className="mx-auto mt-8 sm:mt-10"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <OrnamentalDivider />
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col items-center gap-3 sm:mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.85, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className={`${cinzel.className} text-center text-[0.625rem] uppercase tracking-[0.22em] sm:text-[0.6875rem] sm:tracking-[0.26em]`}
            style={{ color: "var(--color-welcome-text-soft)" }}
          >
            Message me now to finish this
          </p>

          <a
            href={MESSENGER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${cinzel.className} group relative inline-flex items-center justify-center rounded-sm border px-7 py-3 text-[0.625rem] font-semibold uppercase tracking-[0.2em] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:px-10 sm:py-3.5 sm:text-[0.6875rem] sm:tracking-[0.24em] md:tracking-[0.28em]`}
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
            <span className="relative z-10">m.me/WeddingInvitationNaga</span>
            <div
              className="absolute inset-0 -z-0 rounded-sm opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-30"
              style={{ backgroundColor: "var(--color-motif-deep)" }}
            />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
