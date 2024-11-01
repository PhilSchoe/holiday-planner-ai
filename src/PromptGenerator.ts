export async function checkAvailability(): Promise<boolean> {
  if (!window.ai) {
    alert("Ai is not available");
    return false;
  }

  const { available, defaultTemperature, defaultTopK, maxTopK } =
    await window.ai.languageModel.capabilities();

  if (available !== "no") {
    alert("Ai is available");
    return true;
  } else {
    alert("Ai is not available");
    return false;
  }
}

// Workaround for typescript removing the type definition that generates the async iterator for ReadableStream
interface ReadableStream<R = any> {
  [Symbol.asyncIterator](): AsyncIterableIterator<R>;
}

export async function generatePrompt() {
  const session = await window.ai.languageModel.create();

  const stream = session.promptStreaming(
    "Describe the weather in Paris in three sentences"
  );

  // Workaround for typescript removing the type definition that generates the async iterator for ReadableStream
  for await (const chunk of stream as unknown as ReadableStream<string>) {
    console.log(chunk);
  }
}
