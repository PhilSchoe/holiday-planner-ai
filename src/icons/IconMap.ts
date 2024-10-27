import clockIcon from "./clockIcon";
import mapPinIcon from "./MapPinIcon";

function createIconMap(): Map<String, JSX.Element> {
  const icons = new Map<String, JSX.Element>();

  icons.set("map-pin", mapPinIcon());
  icons.set("clock", clockIcon());

  return icons;
}

const iconMap = createIconMap();
export default iconMap;
