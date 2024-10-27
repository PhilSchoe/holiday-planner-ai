import InputPanel from "./InputPanel";

export default function holidayInfoInput() {
  return (
    <div>
      <InputPanel
        title="Location"
        subtitle="Where do you want to go?"
        iconKey="map-pin"
      />
      <InputPanel
        title="Time"
        subtitle="How long are you going to stay?"
        iconKey="clock"
      />
    </div>
  );
}
