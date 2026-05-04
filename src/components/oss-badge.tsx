"use client";

import { GitMerge, GitPullRequest } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

export interface OSSCardProps {
  repo?: string;
  prNumber?: number;
  highlight?: string;
  description?: string;
  contributor?: string;
  mergedOn?: string;
  additions?: number;
  deletions?: number;
  url?: string;
  prUrl?: string;
  className?: string;
}

const OSSMark = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <path d="M12 2.2 21 7v10l-9 4.8L3 17V7z" />
    <path d="M8 10.5v3a2.5 2.5 0 0 0 2.5 2.5H14" />
    <circle cx="8" cy="8" r="1.6" />
    <circle cx="15.5" cy="16" r="1.6" />
  </svg>
);

const OSSCard = ({
  repo = "lucide-icons",
  prNumber = 2231,
  highlight = "philippine-peso",
  description = "Contributor Pass",
  contributor = "@kasutu",
  mergedOn = "06 · 2024",
  additions = 32,
  deletions = 0,
  url = "https://oss-badge.lovable.app",
  prUrl = "https://github.com/lucide-icons/lucide/pull/2231",
  className,
}: OSSCardProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    const glare = glareRef.current;
    if (!wrap || !card || !glare) return;

    const qx = gsap.quickTo(card, "rotationY", { duration: 0.6, ease: "power3.out" });
    const qy = gsap.quickTo(card, "rotationX", { duration: 0.6, ease: "power3.out" });
    const qz = gsap.quickTo(card, "scale", { duration: 0.6, ease: "power3.out" });
    const gx = gsap.quickTo(glare, "x", { duration: 0.4, ease: "power3.out" });
    const gy = gsap.quickTo(glare, "y", { duration: 0.4, ease: "power3.out" });

    gsap.set(card, { transformPerspective: 1200, transformOrigin: "center" });
    gsap.set(glare, { xPercent: -50, yPercent: -50 });

    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      const cr = card.getBoundingClientRect(); // ← use card dimensions for glare

      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;

      qx((px - 0.5) * 18);
      qy(-(py - 0.5) * 18);
      qz(1.03);

      gx((e.clientX - cr.left) - cr.width / 2);  // ← pixel offset from card center
      gy((e.clientY - cr.top) - cr.height / 2);
    };

    const onLeave = () => { qx(0); qy(0); qz(1); gx(0); gy(0); };

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const handleCardClick = () => window.open(url, "_blank", "noreferrer");

  return (
    <div
      ref={wrapRef}
      className={cn("relative w-full max-w-[260px] mx-auto aspect-260/346", className)}
      style={{ perspective: "1400px" }}
    >
      <div
        ref={cardRef}
        role="link"
        tabIndex={0}
        onClick={handleCardClick}
        onKeyDown={(e) => e.key === "Enter" && handleCardClick()}
        className="relative w-full h-full cursor-pointer overflow-hidden rounded-2xl focus:outline-none"
        style={{
          boxShadow: "...",
        }}
      >
        {/* PVC layers */}
        <div className="absolute inset-0 pvc-base" />
        <div className="absolute inset-0 pvc-grain opacity-90" />
        <div className="absolute inset-0 pvc-noise opacity-60" />

        {/* Gold ambients */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full opacity-[0.14]"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.8) 0%, transparent 70%)",
            filter: "blur(18px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-12 bottom-0 h-40 w-40 rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, rgba(245,215,120,0.7) 0%, transparent 70%)",
            filter: "blur(22px)",
          }}
        />

        {/* Mouse-tracked glare */}
        <div
          ref={glareRef}
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[160%] w-[160%] rounded-full opacity-35"
          style={{
            background: "radial-gradient(circle, rgba(255,235,170,0.2) 0%, transparent 45%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Gold edge */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.2), inset 0 1px 0 rgba(255,225,150,0.2)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,225,150,0.7), transparent)",
          }}
        />

        {/* CONTENT */}
        <div className="relative flex h-full flex-col p-6">

          {/* TOP: brand */}
          <div className="flex items-center gap-2">
            <OSSMark className="h-8 w-8 text-amber-200/85" />
            <span className="text-[9px] font-medium uppercase tracking-[0.32em] text-amber-100/50">
              OSS Badge
            </span>
          </div>

          {/* BODY */}
          <div className="mt-8 flex flex-col items-start text-left">
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-amber-300/70">
              {description}
            </p>
            <p className="mt-4 text-[9px] font-medium uppercase tracking-[0.3em] text-amber-100/40">
              {repo}
            </p>
            <a
              href={prUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="mt-2 font-mono text-lg font-semibold tracking-wide gold-text hover:opacity-80 transition-opacity"
            >
              {highlight}
            </a>
            <div className="mt-2.5 flex items-center gap-2 text-[10px] text-amber-100/50">
              <span className="flex items-center gap-1">
                <GitPullRequest className="h-3 w-3" /> #{prNumber}
              </span>
              <span className="text-amber-100/25">·</span>
              <span className="text-emerald-300/75">+{additions}</span>
              <span className="text-rose-300/65">-{deletions}</span>
            </div>
          </div>

          <div className="flex-1" />

          <div
            className="my-4 h-px w-full"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.35), transparent)",
            }}
          />

          {/* FOOTER */}
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[8px] font-medium uppercase tracking-[0.3em] text-amber-100/40">
                Contributor
              </p>
              <p className="mt-1 font-mono text-[12px] tracking-wider gold-text">
                {contributor}
              </p>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-amber-300/25 bg-amber-300/5 px-2 py-0.5">
              <GitMerge className="h-3 w-3 text-amber-300" />
              <span className="text-[9px] font-semibold uppercase tracking-wider text-amber-200/90">
                merged
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OSSCard;