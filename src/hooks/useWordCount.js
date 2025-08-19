import { useMemo } from 'react';

/**
 * Counts words in a given text
 * @param {string} text - The input text
 * @returns {number} - Word count
 */

const useWordCount = text => {
  return useMemo(() => {
    if (!text) return 0;
    return text.trim().split(/\s+/).filter(Boolean).length;
  }, [text]);
};

export default useWordCount;
