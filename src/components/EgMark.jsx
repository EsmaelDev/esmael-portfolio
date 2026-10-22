/* EG — the personal monogram of Esmael Gemechu.
   Geometric E + G inside a gold orbital ring with a single accent node.
   The same geometry is used by public/favicon.svg. */

export default function EgMark({ size = 40, className = "", animated = false, withDash = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={`eg-mark ${animated ? "eg-mark--animate" : ""} ${className}`.trim()}
      aria-hidden="true"
      focusable="false"
    >
      <circle className="eg-ring" cx="32" cy="32" r="24" fill="none" strokeWidth="1.6" />
      {withDash && (
        <circle
          className="eg-ring eg-ring--dash"
          cx="32"
          cy="32"
          r="28.5"
          fill="none"
          strokeWidth="0.75"
          strokeDasharray="2 6"
        />
      )}
      <circle className="eg-node" cx="32" cy="8" r="1.9" />
      <g fill="none" strokeWidth="2.6" strokeLinecap="round">
        {/* E */}
        <path
          className="eg-letter"
          d="M20 21.68 V41.36 M20 21.68 H27.2 M20 31.52 H25.76 M20 41.36 H27.2"
        />
        {/* G — arc with the opening in the upper right */}
        <path
          className="eg-letter"
          d="M44.72 31.52 A 9.84 9.84 0 1 1 34.88 21.68 M44.72 31.52 H31.04"
        />
      </g>
    </svg>
  );
}
