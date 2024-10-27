import Icon from "./icons/Icon";

interface InputPanelProps {
  title: string;
  subtitle: string;
  iconKey: string;
  onInputChage: (value: string) => void;
}

export default function inputPanel({
  title,
  subtitle,
  iconKey,
  onInputChage,
}: InputPanelProps) {
  return (
    <div className="flex flex-nowrap items-center mb-2 py-4 gap-4">
      <Icon iconKey={iconKey} />

      <div>
        <div className="text-gray-300">{title}</div>
        <div className="text-gray-300">{subtitle}</div>
        <input
          type="text"
          className="bg-sky-700 border border-gray-300 focus:outline-none focus:border-sky-950 focus:ring-1 focus:ring-sky-950 text-gray-300 rounded-lg p-0.5 pl-2"
          onChange={(e) => onInputChage(e.target.value)}
        />
      </div>
    </div>
  );
}
