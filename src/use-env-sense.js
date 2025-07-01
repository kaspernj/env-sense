import envSense from "./index.js"

const shared = {}

const useEnvironment = function useEnvironment() {
  if (!shared.result) {
    const result = envSense()

    shared.result = result
  }

  return shared.result
}

export default useEnvironment
