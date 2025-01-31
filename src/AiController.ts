export async function checkAvailability(): Promise<boolean> {
  if (!self.ai || !self.ai.languageModel) {
    return false;
  }

  const { available, defaultTemperature, defaultTopK, maxTopK } =
    await self.ai.languageModel.capabilities();

  if (available !== "no") {
    return true;
  } else {
    return false;
  }
}

export async function getHolidayPlanning(
  location: string,
  duration: string
): Promise<ReadableStream<string>> {
  const session = await self.ai.languageModel.create({
    systemPrompt:
      "You work for a travel agency and are asked to plan a vacation. The client tells you the destination and duration of their stay. Always close your answer by wishing a nice trip",
  });

  const stream = session.promptStreaming(
    `I am going to ${location} for ${duration}. Please create a plan for me. I am interested in sightseeing, restaurants, cafés and other activities.`
  );

  return stream as unknown as ReadableStream<string>;
}
