import { useState } from "react";
import InputPanel from "./InputPanel";
import { checkAvailability, generatePrompt } from "./PromptGenerator";

export default function holidayInfoInput() {
  const [location, setLocation] = useState<string>("");
  const [duration, setDuration] = useState<string>("");

  function handleSubmit() {
    console.log("location: ", location);
    console.log("duration: ", duration);

    checkAvailability().then((isAvailable: boolean) => {
      if (isAvailable) {
        generatePrompt();
      }
    });
  }

  return (
    <>
      <div className="mb-6">
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
      <button
        disabled={!location || !duration}
        type="button"
        className="bg-sky-950 text-gray-300 rounded-lg px-5 py-2 border-2 border-transparent transition-all duration-300 hover:border-gray-300 active:bg-sky-800 disabled:opacity-50 disabled:border-transparent disabled:cursor-not-allowed disabled:active:bg-sky-950"
        onClick={handleSubmit}
      >
        Plan Now!
      </button>
    </>
  );
}
