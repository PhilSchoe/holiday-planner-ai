import { useState } from "react";
import HolidayInfoInput from "./HolidayInfoInput";
import ReadableStream from "./ReadableStream";
import { getHolidayPlanning } from "./AiController";
import Markdown from "marked-react";

function App() {
  const [response, setResponse] = useState<string>();

  async function onSubmit(location: string, duration: string) {
    const stream = await getHolidayPlanning(location, duration);

    let result = "";

    // Workaround for typescript removing the type definition that generates the async iterator for ReadableStream
    // Behaviour has changed, chunkgs are now successive pieces of a single long stream
    for await (const chunk of stream as unknown as ReadableStream<string>) {
      result += chunk;
      setResponse(result);
    }
  }

  return (
    <div className="min-h-screen bg-sky-950 flex flex-col items-center">
      <div className="flex flex-col items-center justify-center container rounded shadow-2xl bg-sky-700 mt-8 px-4 py-4">
        <div className="text-4xl font-bold text-gray-300 mb-6">
          Holiday Planner AI
        </div>

        <HolidayInfoInput onSubmit={onSubmit} />
      </div>
      <div
        className={`${
          response ? "" : "invisible"
        } flex flex-col items-center justify-center container rounded shadow-2xl bg-sky-700 text-gray-300 px-4 py-4 mt-4 mb-8`}
      >
        <Markdown>{response}</Markdown>
      </div>
    </div>
  );
}

export default App;
