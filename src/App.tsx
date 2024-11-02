import { useState } from "react";
import HolidayInfoInput from "./HolidayInfoInput";
import ReadableStream from "./ReadableStream";
import { generatePrompt } from "./PromptGenerator";

function App() {
  const [response, setResponse] = useState<string>();

  async function onSubmit(location: string, duration: string) {
    const stream = await generatePrompt(location, duration);

    // Workaround for typescript removing the type definition that generates the async iterator for ReadableStream
    for await (const chunk of stream as unknown as ReadableStream<string>) {
      setResponse(chunk);
    }
  }

  return (
    <div className="min-h-screen bg-sky-950">
      <div className="flex flex-col items-center justify-center container relative top-16 rounded shadow-2xl bg-sky-700 mx-auto px-4 py-4">
        <div className="text-4xl font-bold text-gray-300 mb-6">
          Holiday Planner AI
        </div>

        <HolidayInfoInput onSubmit={onSubmit} />
      </div>
      <div className="flex flex-col items-center justify-center container relative top-16 rounded shadow-2xl bg-sky-700 mx-auto px-4 py-4 mt-4">
        <p className="text-gray-300">{response}</p>
      </div>
    </div>
  );
}

export default App;
