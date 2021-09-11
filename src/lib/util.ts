/**
 * A debounced function is called after N amount of time passes since its last call. It reacts to a seemingly resolved state and implies a delay between the event and the handler function call.
 * @param func  
 * @param duration
 * @returns
 */
export const debounce = (func: (arg) => void, duration: number) => {
  let timeout: NodeJS.Timeout
  return function (...args) {
    const effect = () => {
      timeout = null
      return func.apply(this, args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(effect, duration)
  }
}

/**
 * A throttled function is called once per N amount of time. Any additional function calls within the specified time interval are ignored.
 * @param func 
 * @param duration 
 * @returns 
 */
export const throttle = (func: () => void, duration: number) => {
  let shouldWait = false
  return function (...args) {
    if (!shouldWait) {
      func.apply(this, args)
      shouldWait = true
      setTimeout(function () {
        shouldWait = false
      }, duration)
    }
  }
}

/**
 * Wrapper for the fetch api
 * @param api - API Url
 * @returns 
 */
export const fetchApi = async (api: string, init: RequestInit = {} ) => {
  const response = await fetch(api, init)
  const json = await response.json();
  if (response.status >= 200 && response.status <= 299) {
    return json;
  } else {
    throw Error(json);
  }
}