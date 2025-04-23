import { Info } from "@/lib/logger";
import { useEffect, useState } from "react";

const createMediaQuery = (query: string) =>
  typeof window !== "undefined" && window.matchMedia(query);

export type Display = 'desktop' | 'tablet' | 'mobile';

/**  Media Query Breakpoints within React.
 *  Example:
 *    `const isTablet = useBreakpoint("(max-width: 1024px));`
 **/
export function useBreakpoint(query: string) {
  const [matches, setMatches] = useState<boolean|null>(null);

  useEffect(() => {
    const media = createMediaQuery(query);
    if( !media ) return;

    Info(`${query}: ${media.matches}`)

    setMatches(media.matches);

    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener)
  }, [query]);

  return matches;
}
