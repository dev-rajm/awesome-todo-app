import { useMemo } from 'react';

const useWordCount = text => {
  return useMemo(() => {
    if (!text) return 0;
    return text.trim().split(/\s+/).filter(Boolean).length;
  }, [text]);
};

export default useWordCount;
