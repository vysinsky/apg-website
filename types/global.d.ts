declare global {
  interface Window {
    particlesJS: {
      load: (id: string, configPath: string, onload: () => void) => void
    }
  }
}
