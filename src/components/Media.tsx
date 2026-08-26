"use client";

import { useEffect, useRef, useState } from "react";
import type { MediaItem } from "@/lib/types";

type Props = {
  item: MediaItem;
  /** Used to vary the placeholder pattern so a grid of them doesn't look repetitive. */
  seed?: string;
  className?: string;
  aspect?: string;
  /** Renders as a circle — used for the portrait. Forces a square crop. */
  circle?: boolean;
};

const HUES = [
  "from-accent/16 via-transparent to-transparent",
  "from-warm/14 via-transparent to-transparent",
  "from-accent/10 via-accent/[0.04] to-transparent",
  "from-warm/10 via-accent/[0.05] to-transparent",
];

function hash(input: string) {
  let h = 0;
  for (let i = 0; i < input.length; i += 1) h = (h * 31 + input.charCodeAt(i)) | 0;
  return Math.abs(h);
}

/**
 * Renders the real asset once `item.src` is filled in, and a designed
 * placeholder until then — so an unfinished gallery still looks intentional.
 *
 * A path that points at a file which isn't there yet also falls back to the
 * placeholder rather than showing a broken image, so content can be wired up
 * before the photo lands.
 */
export default function Media({ item, seed = "", className = "", aspect = "aspect-[16/10]", circle }: Props) {
  const [missing, setMissing] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // An image rendered in the server HTML can fail before React attaches onError,
  // so re-check once on mount: complete with no intrinsic width means it 404'd.
  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth === 0) setMissing(true);
  }, [item.src]);

  const shape = circle ? "aspect-square rounded-full" : `${aspect} rounded-xl`;
  const base = `relative overflow-hidden border border-line bg-bg-elevated ${shape} ${className}`;
  const objectPosition = item.position ?? "50% 50%";
  const showAsset = Boolean(item.src) && !missing;

  if (showAsset && item.type === "video") {
    return (
      <div className={base}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          src={item.src}
          className="h-full w-full object-cover"
          style={{ objectPosition }}
          controls
          playsInline
          preload="metadata"
          aria-label={item.alt}
          onError={() => setMissing(true)}
        />
      </div>
    );
  }

  if (showAsset) {
    return (
      <figure className={base}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={item.src}
          alt={item.alt}
          loading="lazy"
          style={{ objectPosition }}
          onError={() => setMissing(true)}
          className="h-full w-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-[1.03]"
        />
        {item.caption && !circle ? (
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 text-xs text-white/90">
            {item.caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  const hue = HUES[hash(seed + item.alt) % HUES.length];

  return (
    <div className={`${base} placeholder-weave grid place-items-center`} role="img" aria-label={item.alt}>
      <div className={`absolute inset-0 bg-gradient-to-br ${hue}`} aria-hidden />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        <svg
          width={circle ? 30 : 26}
          height={circle ? 30 : 26}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          className="text-faint"
          aria-hidden
        >
          {circle ? (
            <>
              <circle cx="12" cy="8.5" r="3.6" />
              <path d="M4.6 20a7.6 7.6 0 0 1 14.8 0" />
            </>
          ) : (
            <>
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <circle cx="8.5" cy="9.5" r="1.6" />
              <path d="m4 17 4.5-5 3.5 3.5L15.5 12 20 17" />
            </>
          )}
        </svg>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
          {item.caption ?? (circle ? "Portrait" : "Photo coming soon")}
        </span>
      </div>
    </div>
  );
}
