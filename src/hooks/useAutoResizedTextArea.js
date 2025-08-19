import { useEffect } from 'react';

/**
 * Auto-resizes a textarea when its value changes.
 * @param {React.RefObject<HTMLTextAreaElement>} ref - textarea ref
 * @param {string} value - textarea value (dependency)
 */

const useAutoResizedTextArea = (ref, value) => {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    el.style.height = 'auto'; // resize height
    el.style.height = `${ref.current.scrollHeight}px`; // set new height
  }, [ref, value]);
};

export default useAutoResizedTextArea;
