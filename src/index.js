export default function envSense() {
  const result = {
    isBrowser: false,
    isNative: false,
    isServer: false
  }

  if (typeof navigator !== undefined && navigator.product == "ReactNative") {
    result.isNative = true
  } else if (typeof window !== undefined && window.document?.createElement) {
    result.isBrowser = true
  } else {
    result.isServer = true
  }

  return result
}
