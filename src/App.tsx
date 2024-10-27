import HolidayInfoInput from "./HolidayInfoInput";

function App() {
  return (
    <div className="min-h-screen bg-sky-950">
      <div className="flex flex-col items-center justify-center container relative top-16 rounded shadow-2xl bg-sky-700 mx-auto px-4 py-4">
        <div className="text-4xl font-bold text-gray-300 mb-6">
          Holiday Planner AI
        </div>

        <HolidayInfoInput />
      </div>
    </div>
  );
}

export default App;
