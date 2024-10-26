import InputPanel from "./InputPanel";

export default function holidayInfoInput() {
  return (
    <>
      <InputPanel title="Location" subtitle="Where do you want to go?" />
      <InputPanel title="Time" subtitle="How long are you going to stay?" />
    </>
  );
}
