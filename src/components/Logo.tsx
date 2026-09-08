interface LogoProps {
  /** `dark` renders for light backgrounds; `light` knocks out for dark ones. */
  tone?: "dark" | "light";
  className?: string;
  /** Hide the wordmark and show only the sunrise mark. */
  markOnly?: boolean;
}

/**
 * The New Horizon identity, redrawn as vector.
 *
 * The supplied asset is a 640x640 JPEG with the mark floating in a large
 * white margin, so it could not sit on anything but a pure-white surface
 * and had to be faked white-on-dark with `brightness-0 invert` (which
 * produced a solid white rectangle in the footer). Rebuilding it as SVG
 * makes it crisp at any size, transparent, and legible on both grounds.
 */
export default function Logo({
  tone = "dark",
  className = "",
  markOnly = false,
}: LogoProps) {
  const isLight = tone === "light";
  const navy = isLight ? "#FFFFFF" : "#0A3590";
  const sky = isLight ? "#7FDCF5" : "#00BCEB";
  const skyLine = isLight ? "#A9E7F8" : "#29B8E8";
  const gold = isLight ? "#EFC894" : "#E39A4A";
  const word = isLight ? "#FFFFFF" : "#0A3590";
  const sub = isLight ? "rgba(255,255,255,0.72)" : "#26374F";

  return (
    <span
      className={`inline-flex items-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 92"
        className="h-9 w-auto shrink-0 md:h-10"
        fill="none"
        role="presentation"
      >
        <defs>
          {/* Hides the lower half of the sun so it reads as rising
              behind the horizon, with a hairline of ground showing. */}
          <mask id="nh-horizon">
            <rect width="200" height="92" fill="#fff" />
            <path
              d="M0 92 L0 86 C22 42 88 13 146 19 C172 22 190 33 200 47 L200 92 Z"
              fill="#000"
            />
          </mask>
        </defs>

        {/* Rising sun */}
        <circle cx="74" cy="38" r="36" fill={sky} mask="url(#nh-horizon)" />

        {/* Warm gold arc */}
        <path
          d="M64 62 C88 44 142 34 176 48"
          stroke={gold}
          strokeWidth="4.5"
          strokeLinecap="round"
        />

        {/* Light sky arc */}
        <path
          d="M12 94 C30 62 62 44 120 39"
          stroke={skyLine}
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Horizon swoosh */}
        <path
          d="M6 92 C26 46 90 18 148 24 C173 27 190 38 198 52 C188 42 170 32 146 31 C92 27 33 55 13 92 Z"
          fill={navy}
        />
      </svg>

      {!markOnly && (
        <span className="flex flex-col leading-none">
          <span
            className="font-wordmark text-[1.2rem] font-bold tracking-[-0.02em] md:text-[1.32rem]"
            style={{ color: word }}
          >
            New Horizon
          </span>
          <span
            className="font-wordmark mt-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] md:text-[0.62rem]"
            style={{ color: sub }}
          >
            Counselling Services
          </span>
        </span>
      )}
    </span>
  );
}
