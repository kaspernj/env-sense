import envSense from "./index.js"

/** @type {{result: undefined | import("./types.js").EnvSenseResult}} */
const shared = {
  result: undefined
}

/** @returns {import("./types.js").EnvSenseResult} */
function useEnvSense() {
  if (!shared.result) {
    const result = envSense()

    shared.result = result
  }

  return shared.result
}

export default useEnvSense
