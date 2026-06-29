"use client"

import React from "react"
import Link from "next/link"
import localFont from "next/font/local"
import { StorySection } from "@/components/StorySection"
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

function LoveStoryTitle() {
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
        Our Love Story
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
        Where It All Began
      </span>
      <span className="sr-only">Where It All Began</span>
    </h1>
  )
}

export function LoveStory() {
  return (
    <div className={`${theSeasons.variable} ${aboveTheBeyond.variable} relative min-h-screen overflow-x-hidden`}>
      <div
        className="relative px-4 pb-2 pt-8 text-center sm:pt-10 md:pt-12"
        style={{ background: "var(--color-welcome-bg)" }}
      >
        <div className="pointer-events-none absolute right-0 top-0 z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/decoration/decoration/right-top-decoration.png"
            alt=""
            className={CORNER_DECO_CLASS}
          />
        </div>
        <div className="relative z-20">
          <div className="mx-auto mb-5 sm:mb-6 md:mb-7">
            <OrnamentalDivider />
          </div>
          <div className="mx-auto mt-2 sm:mt-3 md:mt-4">
            <LoveStoryTitle />
          </div>
        </div>
{/* 
        <p
          className="font-goudy-italic mx-auto mt-4 max-w-xl text-[0.75rem] leading-snug sm:mt-5 sm:text-[0.8125rem] md:mt-6 md:text-[0.84375rem]"
          style={{ color: "var(--color-welcome-text)" }}
        >
          &ldquo;11 Years of Love, Now Forever&rdquo;
        </p> */}
      </div>

      <StorySection
        theme="light"
        layout="image-left"
        isFirst={true}
        title="A Simple Message, A Beautiful Beginning"
        imageSrc="/mobile-background/couple (13).webp"
        text={
          <>
            <p className="mb-4">
            Sometimes, the most beautiful things begin with the simplest message.
            </p>
            <p className="mb-4">
            It all started with an Instagram Direct Message.
            </p>
          </>
        }
      />

      <StorySection
        theme="dark"
        layout="image-right"
        imageSrc="/mobile-background/couple (18).webp"
        title="From Conversations to Something More"
        text={
          <>
            <p className="mb-4">
            Every message we exchanged brought us closer together.
            </p>
            <p className="mb-4">
            Every messages we exchange, we felt a rare and beautiful connection—one that has grown into a love filled with laughter, late-night long distance talks, and unforgettable memories.
            </p>
          </>
        }
      />

      <StorySection
        theme="light"
        layout="image-left"
        imageSrc="/mobile-background/couple (7).webp"
        title="Love Across the Distance"
        text={
          <>
            <p>
            Distance has never diminished the love we share.
            </p>
            <p className="mb-4">
Our love story continues in a long distance relationship, Jopert in the United Kingdom and Kathleen here in the Philippines.
            </p>
            <p className="mb-4">
But in every season, we have celebrated life's joys and faced challenges hand in hand, learning that love is built in both the grand moments and the quiet everyday ones.
            </p>
          </>
        }
      />

      <StorySection
        theme="dark"
        layout="image-right"
        imageSrc="/mobile-background/couple (8).webp"
        title="Beginning Our Greatest Chapter"
        text={
          <>
            <p>
            Today, our love becomes a lifelong promise.
            </p>
            <p className="mb-4">
Now, as we begin this new chapter as husband and wife, our vows are a promise to place love at the heart of our marriage.
            </p>
          </>
        }
      />

      <StorySection
        theme="light"
        layout="image-left"
        isLast={true}
        imageSrc="/mobile-background/couple (11).webp"
        title="Our Story Becomes Even More Beautiful"
        text={
          <>
            <p>
            Your presence completes this unforgettable moment.
            </p>
            <p className="mb-4">
Having you here to witness and celebrate with us makes this moment truly complete.
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
          <img
            src="/decoration/decoration/left-bottom-decoration%20(2).png"
            alt=""
            className={CORNER_DECO_CLASS}
          />
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/decoration/decoration/right-bottom-decoration%20(2).png"
            alt=""
            className={CORNER_DECO_CLASS}
          />
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
            <span className="relative z-10">Join us</span>
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
