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
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  async function handleSubmit() {
    const isAvailable = await checkAvailability();
    if (!isAvailable) {
      alert("Ai is not available");
      return;
    }

    setIsProcessing(true);
    await onSubmit(location, duration);
    setIsProcessing(false);
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
        disabled={!location || !duration || isProcessing}
        type="button"
        className={`inline-flex items-center bg-sky-950 text-gray-300 rounded-lg px-5 py-2 border-2 transition-all duration-300 hover:border-gray-300 active:bg-sky-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:bg-sky-950
          ${
            isProcessing
              ? "opacity-50 border-gray-300 bg-sky-950"
              : "border-transparent disabled:border-transparent"
          }
        `}
        onClick={handleSubmit}
      >
        <svg
          className={`mr-3 -ml-1 size-5 animate-spin text-white
            ${!isProcessing ? "hidden" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Plan Now!
      </button>
    </>
  );
}
