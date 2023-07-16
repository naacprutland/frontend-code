import { Image } from '../interface/generalApi'

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
export const fetchApi = async (api: string, init: RequestInit = {}) => {
  const response = await fetch(api, init)

  if (response.ok) {
    const json = await response.json()
    return json
  } else {
    const isJSON = response.headers
      .get('content-type')
      .includes('application/json')
    // If JSON, use text(). Otherwise, use json().
    const getMsg: string | object = isJSON
      ? await response.json()
      : await response.text()
    let errorRes = getMsg
    if (typeof getMsg === 'string') {
      errorRes = JSON.parse(
        JSON.stringify({
          error: {
            name: 'unknown',
            message: getMsg,
          },
        })
      )
    }
    throw errorRes
  }
}

/**
 * Creates mark up object
 * @param richText - rich html text
 * @returns Markup Object
 */
export function createMarkup(richText: string) {
  return { __html: richText }
}

const imageWidths: number[] = [72, 96, 128, 256, 350, 500, 750, 1280, 1920]
const imgSizeVariable = {
  1920: 'xlarge',
  1280: 'large',
  750: 'medium',
  500: 'small',
  350: 'xsmall',
  256: 'thumbnailLarge',
  128: 'thumbnailMedium',
  96: 'thumbnailSmall',
  72: 'thumbnailXsmall',
}

interface imgWidth {
  min?: number
  max?: number
}

/**
 * Generate image src set
 */
export function imageSrcSet(img: Image, width: imgWidth) {
  const min = width?.min || Math.min(...imageWidths)
  const max = width?.max || Math.max(...imageWidths)
  let set = ''

  if (!img?.formats) return set
  for (let i = 0; i < imageWidths.length; i++) {
    const size = imageWidths[i]
    if (min <= size && size <= max) {
      set = `${set ? set + ', ' : ''}${
        img?.formats[imgSizeVariable[size]]?.url
      } ${size}w`
    }
  }
  return set
}
