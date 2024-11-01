// Workaround for typescript removing the type definition that generates the async iterator for ReadableStream
export default interface ReadableStream<R = any> {
  [Symbol.asyncIterator](): AsyncIterableIterator<R>;
}
