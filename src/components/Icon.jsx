// One drawn icon set: 24px grid, 1.75 stroke, round joins.
const paths = {
  phone: <path d="M5 4h3.5l1.6 4-2.1 1.4a11 11 0 0 0 6.6 6.6l1.4-2.1 4 1.6V19a1.6 1.6 0 0 1-1.7 1.6A16 16 0 0 1 3.4 5.7 1.6 1.6 0 0 1 5 4Z" />,
  chat: (
    <>
      <path d="M4.5 19.5 5.6 16A8 8 0 1 1 8.4 18.6Z" />
      <path d="M9 9.5c.3 2.2 2.2 4.4 5 5l1.2-1.3-1.8-1-.9.8A3.9 3.9 0 0 1 10.6 11l.8-.9-1-1.8Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.8-6.5-11a6.5 6.5 0 0 1 13 0c0 5.2-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  back: <path d="M19 12H5m5-5-5 5 5 5" />,
  insta: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.9" cy="7.1" r=".6" />
    </>
  ),
  fb: <path d="M14 20v-7h2.5l.5-3H14V8.4c0-.9.4-1.4 1.5-1.4H17V4.3a17 17 0 0 0-2.4-.2c-2.4 0-3.6 1.4-3.6 3.9V10H8.5v3H11v7" />,
  star: <path d="m12 4 2.4 5 5.4.6-4 3.7 1.1 5.3L12 16l-4.9 2.6 1.1-5.3-4-3.7 5.4-.6Z" />,
  menu: <path d="M4 8h16M4 16h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
}

export default function Icon({ name, size = 20, className = '' }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  )
}
