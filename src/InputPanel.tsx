import Icon from "./icons/Icon";

interface InputPanelProps {
  title: string;
  subtitle: string;
  iconKey: string;
}

export default function inputPanel({
  title,
  subtitle,
  iconKey,
}: InputPanelProps) {
  return (
    <div className="flex flex-nowrap items-center mb-2 py-4 gap-4">
      <Icon iconKey={iconKey} />

      <div>
        <div className="text-gray-300">{title}</div>
        <div className="text-gray-300">{subtitle}</div>
        <input></input>
      </div>
    </div>
  );
}
