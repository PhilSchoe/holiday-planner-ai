export async function checkAvailability(): Promise<boolean> {
  if (!("LanguageModel" in self)) {
    return false;
  }

  return true;
}

export async function getHolidayPlanning(
  location: string,
  duration: string
): Promise<ReadableStream<string>> {
  const session = await LanguageModel.create({
    initialPrompts: [
      {
        role: "system",
        content:
          "You work for a travel agency and are asked to plan a vacation. The client tells you the destination and duration of their stay. Always close your answer by wishing a nice trip",
      },
    ],
  });

  const stream = session.promptStreaming(
    `I am going to ${location} for ${duration}. Please create a plan for me. I am interested in sightseeing, restaurants, cafés and other activities. 
    Please create the plan as markdown text with headlines, bullet points and emojis.`
  );

  return stream as unknown as ReadableStream<string>;
}
