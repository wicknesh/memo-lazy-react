const Spinner = () => {
  return (
    <svg
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 h-20 animate-spin m-24"
    >
      <path
        d="M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5"
        stroke="#F5F5F5"
        strokeWidth="1.5"
        className="stroke-gray-300"
      />
    </svg>
  )
}

export default Spinner