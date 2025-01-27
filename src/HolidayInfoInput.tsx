import { useState } from "react";
import InputPanel from "./InputPanel";
import { checkAvailability } from "./AiController";

export default function holidayInfoInput({
  onSubmit,
}: {
  onSubmit: (location: string, duration: string) => Promise<void>;
}) {
  const [location, setLocation] = useState<string>("");
  const [duration, setDuration] = useState<string>("");

  async function handleSubmit() {
    const isAvailable = await checkAvailability();
    if (!isAvailable) {
      return;
    }

    await onSubmit(location, duration);
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
