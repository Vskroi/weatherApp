import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="#4B5563"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18.477 25.577 4.683-8.362C26.223 11.745 22.27 5 16 5 9.73 5 5.777 11.745 8.84 17.215l4.683 8.362c1.084 1.936 3.87 1.936 4.954 0Z"
    />
    <circle
      cx={16}
      cy={13}
      r={2}
      stroke="#4B5563"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
)
export default SvgComponent
