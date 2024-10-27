import iconMap from "./IconMap";

export default function icon({ iconKey }: { iconKey: string }): JSX.Element {
  let content: JSX.Element | undefined = <h1>Icon not found</h1>;
  if (iconMap.has(iconKey)) {
    content = iconMap.get(iconKey);
  }

  return content as JSX.Element;
}
