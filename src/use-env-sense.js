import envSense from "./index.js"

const shared = {}

const useEnvSense = function useEnvSense() {
  if (!shared.result) {
    const result = envSense()

    shared.result = result
  }

  return shared.result
}

export default useEnvSense
