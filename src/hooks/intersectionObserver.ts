import { useState, useEffect, RefObject} from 'react'

/**
 *  indicates when an element is in view
 * @param reference = Element reference
 * @returns boolean
 */
const useIntersectionObserver = (reference: RefObject<Element>): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleIntersect = (entries, observer) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entries[0].target);
        observer.disconnect();
      }
    }

		// Create the observer, passing in the callback
    const observer = new IntersectionObserver(handleIntersect);

		// If we have a ref value, start observing it
    if (reference) {
      observer.observe(reference.current);
    }

    // If unmounting, disconnect the observer
    return () => observer.disconnect();
  }, [reference]);

  return isVisible;
};

export default useIntersectionObserver