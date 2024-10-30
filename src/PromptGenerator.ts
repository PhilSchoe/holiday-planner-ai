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

export async function generatePrompt() {
  const session = await window.ai.languageModel.create();

  const stream = session.promptStreaming(
    "Describe the weather in Paris in three sentences"
  );

  /*
  for (const chunk of stream) {
    console.log(chunk);
  }
  */

  const reader = stream.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    console.log(value);
  }
}
