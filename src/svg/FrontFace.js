export const FrontFace = ({ className, color }) => {
  return (
    <>
      <svg className={className} viewBox="0 0 900 600">
        <rect width="900" height="600" fill="#001122"></rect>
        <path
          d="M99.8-36.7C110.7 1.2 88.1 45.7 52.9 70.7 17.8 95.8-30 101.4-60.2 80.1-90.3 58.8-102.9 10.6-90-30.1-77-70.8-38.5-104 3-105c41.4-1 85.8 30.4 96.8 68.3Z"
          stroke={color}
          fill="none"
          strokeWidth="20"
          transform="translate(601 242)"
        />
        <path
          d="M68.5-26.1c8 28.4-6.3 60.2-29.5 76.2a71 71 0 0 1-79.5.1C-64.6 34-80.6 1.3-72.6-27.2-64.5-55.7-32.2-80-1-79.7a77.2 77.2 0 0 1 69.5 53.6Z"
          stroke={color}
          fill="none"
          strokeWidth="20"
          transform="translate(339 448)"
        />
        <path
          d="M54.6-18.7c8 25.7.8 55.4-19.2 70.7A65.7 65.7 0 0 1-39 53a68.1 68.1 0 0 1-23.1-73.4c8.4-26.2 35.3-46.7 60.3-46.1 25.1.6 48.4 22.2 56.4 47.8Z"
          stroke={color}
          fill="none"
          strokeWidth="20"
          transform="translate(793 483)"
        />
      </svg>
    </>
  );
};
