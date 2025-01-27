export async function checkAvailability(): Promise<boolean> {
  if (!self.ai || !self.ai.languageModel) {
    alert("Ai is not available");
    return false;
  }

  const { available, defaultTemperature, defaultTopK, maxTopK } =
    await self.ai.languageModel.capabilities();

  if (available !== "no") {
    alert("Ai is available");
    return true;
  } else {
    alert("Ai is not available");
    return false;
  }
}

export async function getHolidayPlanning(
  location: string,
  duration: string
): Promise<ReadableStream<string>> {
  const session = await self.ai.languageModel.create();

  const stream = session.promptStreaming(
    `I am going to ${location} for ${duration}. Please create a plan for me. I am interested in sightseeing, restaurants, cafés and other activities.`
  );

  return stream as unknown as ReadableStream<string>;
}
