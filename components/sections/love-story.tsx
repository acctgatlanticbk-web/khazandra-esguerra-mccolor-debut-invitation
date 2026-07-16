"use client"

import React from "react"
import Link from "next/link"
import localFont from "next/font/local"
import { StorySection } from "@/components/StorySection"
import { Cinzel } from "next/font/google"
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

function DebutStoryTitle() {
  return (
    <h1
      className="relative mx-auto w-full max-w-full text-center"
      style={
        {
          "--title-size": "clamp(2.15rem, 11vw, 4.5rem)",
          "--script-size": "clamp(1.2rem, 5vw, 2.5rem)",
          "--script-overlap": "clamp(-0.75rem, -3.2vw, -1.75rem)",
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
        Her Story
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
        eighteen chapters in the making
      </span>
      <span className="sr-only">eighteen chapters in the making</span>
    </h1>
  )
}

export function LoveStory() {
  const siteConfig = useSiteConfig()
  const celebrantName = siteConfig.debut.celebrantName
  const firstName = celebrantName.split(" ")[0]

  return (
    <div className={`${theSeasons.variable} ${aboveTheBeyond.variable} relative min-h-screen overflow-x-hidden`}>
      <div
        className="relative px-4 pb-2 pt-8 text-center sm:pt-10 md:pt-12"
        style={{ background: "var(--color-welcome-bg)" }}
      >
        <div className="pointer-events-none absolute right-0 top-0 z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/decoration/right-top-decoration.png" alt="" className={CORNER_DECO_CLASS} />
        </div>
        <div className="pointer-events-none absolute left-0 top-0 z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/decoration/left-top-decoration.png" alt="" className={CORNER_DECO_CLASS} />
        </div>
        <div className="relative z-20">
          <div className="mx-auto mb-5 sm:mb-6 md:mb-7">
            <OrnamentalDivider />
          </div>
          <div className="mx-auto mt-2 sm:mt-3 md:mt-4">
            <DebutStoryTitle />
          </div>
        </div>
      </div>

      <StorySection
        theme="light"
        layout="image-left"
        isFirst={true}
        title={`A Girl Who Became a Woman`}
        imageSrc="/mobile-background/debut (1).jpg"
        text={
          <>
            <p className="mb-4">
              From her very first breath, {firstName} has carried a light that quietly brightens every room she enters. She grew up with curiosity in her eyes and warmth in her heart — always reaching, always learning, always becoming.
            </p>
            <p className="mb-4">
              Eighteen years may sound like the beginning, but for those who have watched her grow, it feels like the bloom of something truly extraordinary.
            </p>
          </>
        }
      />

      <StorySection
        theme="dark"
        layout="image-right"
        imageSrc="/mobile-background/debut (2).jpg"
        title="The Heart Behind the Name"
        text={
          <>
            <p className="mb-4">
              {firstName} is someone who loves deeply and gives freely. She is the kind of person who remembers the little things, who shows up for the people she cares about, and who finds beauty in the everyday.
            </p>
            <p className="mb-4">
              Behind the grace and the smile is a young woman of quiet strength — one who faces life with courage and faces people with kindness.
            </p>
          </>
        }
      />

      <StorySection
        theme="light"
        layout="image-left"
        imageSrc="/mobile-background/debut (3).jpg"
        title="Shaped by Love"
        text={
          <>
            <p className="mb-4">
              {firstName} did not grow up alone. She was shaped by the hands of a family who loved her fiercely, by friends who walked beside her, and by moments — both joyful and hard — that carved her into who she is today.
            </p>
            <p className="mb-4">
              To everyone who poured into her life: your love is woven into every part of this celebration. Tonight is as much yours as it is hers.
            </p>
          </>
        }
      />

      <StorySection
        theme="dark"
        layout="image-right"
        imageSrc="/mobile-background/debut (4).jpg"
        title="Chasing Dreams with Grace"
        text={
          <>
            <p className="mb-4">
              {firstName} has always known what she wants, even when the path was not perfectly clear. She moves through life with intention — dreaming boldly, working quietly, and trusting the journey.
            </p>
            <p className="mb-4">
              Turning eighteen is not just a number. It is a threshold — and {firstName} steps across it with vision, faith, and a heart full of possibility.
            </p>
          </>
        }
      />

      <StorySection
        theme="light"
        layout="image-left"
        imageSrc="/mobile-background/debut (5).jpg"
        title="Tonight, We Celebrate Her"
        text={
          <>
            <p className="mb-4">
              December 12, 2026 is a night set apart — a night to look back on eighteen beautiful years and to look forward to everything still to come.
            </p>
            <p className="mb-4">
              We gather not just to mark a birthday, but to honor the young woman {firstName} has grown into — and to send her forward into her next chapter with all the love we have.
            </p>
          </>
        }
      />

      <StorySection
        theme="dark"
        layout="image-right"
        isLast={true}
        imageSrc="/mobile-background/debut (6).jpg"
        title="With Gratitude, Always"
        text={
          <>
            <p className="mb-4">
              To every person in this room — thank you. Thank you for the prayers, the presence, and the love that made {firstName} who she is.
            </p>
            <p className="mb-4">
              She is grateful beyond words, and so are we. From the bottom of our hearts, thank you for being part of her story.
            </p>
          </>
        }
      />

      <div
        className="relative px-4 pb-16 pt-8 text-center sm:pb-20 sm:pt-10 md:pb-24 md:pt-12"
        style={{ background: "var(--color-welcome-bg)" }}
      >
        <div className="pointer-events-none absolute bottom-0 left-0 z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/decoration/left-bottom-decoration.png" alt="" className={CORNER_DECO_CLASS} />
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/decoration/right-bottom-decoration.png" alt="" className={CORNER_DECO_CLASS} />
        </div>
        <div className="relative z-20">
          <div className="mx-auto mb-5 sm:mb-6">
            <OrnamentalDivider />
          </div>
          <Link
            href="#guest-list"
            className={`${cinzel.className} group relative inline-flex items-center justify-center rounded-sm border px-6 py-2.5 text-[0.625rem] font-semibold uppercase tracking-[0.2em] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:px-8 sm:py-3 sm:text-[0.6875rem] sm:tracking-[0.24em] md:px-10 md:py-3.5 md:text-xs md:tracking-[0.28em]`}
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
            <span className="relative z-10">Celebrate with her</span>
            <div
              className="absolute inset-0 -z-0 rounded-sm opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-25"
              style={{ backgroundColor: "var(--color-motif-deep)" }}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
