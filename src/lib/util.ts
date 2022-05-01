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

  if (response.ok) {
    const json = await response.json();
    return json;
  } else {
    const isJSON = response.headers.get('content-type').includes('application/json');
    // If JSON, use text(). Otherwise, use json().
    const getMsg: string | object = isJSON ? await response.json() : await response.text();
    let errorRes = getMsg
    if ( typeof getMsg === 'string') {
      errorRes = JSON.parse(JSON.stringify({
        error: {
          name: "unknown",
          message: getMsg
        } 
      }))
    }
    throw errorRes;
  }
}

/**
 * Creates mark up object
 * @param richText - rich html text
 * @returns Markup Object
 */
export function createMarkup(richText: string) {
  return { __html: richText };
}