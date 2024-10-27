import { useState } from "react";
import InputPanel from "./InputPanel";

export default function holidayInfoInput() {
  const [location, setLocation] = useState<string>("");
  const [duration, setDuration] = useState<string>("");

  function handleSubmit() {
    console.log("location: ", location);
    console.log("duration: ", duration);
  }

  return (
    <>
      <div>
        <InputPanel
          title="Location"
          subtitle="Where do you want to go?"
          iconKey="map-pin"
          onInputChage={setLocation}
        />
        <InputPanel
          title="Time"
          subtitle="How long are you going to stay?"
          iconKey="clock"
          onInputChage={setDuration}
        />
      </div>
      <button type="button" onClick={handleSubmit}>
        Plan Now!
      </button>
    </>
  );
}
