import { useEffect, useState } from 'react';
import { useMediaQuery as useMedia } from 'react-responsive';

type MediaQueryProps = {
  maxWidth?: number;
  minWidth?: number;
};

export function useMediaQuery({ maxWidth, minWidth }: MediaQueryProps) {
  const [isMounted, setIsMounted] = useState(false);

  const query = {
    ...(maxWidth && { maxWidth: maxWidth + 0.98 }),
    ...(minWidth && { minWidth }),
  };

  const matches = useMedia(query);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted && matches;
}

useMediaQuery.displayName = 'useMediaQuery';
