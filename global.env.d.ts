interface Window {
  // electronAPI is an object provided by the preload script
  // it is used to expose a limited set of APIs to the renderer process
  electronAPI?: {
    sum: (a: number, b: number) => Promise<number>
  }
}