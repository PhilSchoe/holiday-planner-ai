interface InputPanelProps {
  title: string;
  subtitle: string;
}

export default function inputPanel({ title, subtitle }: InputPanelProps) {
  return (
    <div className="flex flex-nowrap justify-between items-center py-4 gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-20"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>

      <div>
        <div className="text-gray-300">{title}</div>
        <div className="text-gray-300">{subtitle}</div>
        <input></input>
      </div>
    </div>
  );
}
