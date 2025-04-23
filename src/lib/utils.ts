import { clsx, type ClassValue } from "clsx"
import { MotionValue } from "motion"
import { transform } from "next/dist/build/swc"
import { useEffect } from "react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/** A Simple wrapper around creating a useEffect with a MotionValue Debugger.
  * i.e,
  * 
  *   useEffect(() => {
  *     const sub = someMotionValue.on("change", (val) => {
  *       Info!(val)
  *     });
  *     return () => sub();
  *   }, []);
  * 
 **/
export function useOnMotionChange<T>(
  transforms: MotionValue<T> | MotionValue<T | any>[],
  log: (val: T) => void,
) {
  if( Array.isArray(transforms) ){

    useEffect(() => {
      const subs: VoidFunction[] = [];

      for( let t = 0; t < transforms.length; t++ ){
        subs.push(
          transforms[t].on("change", (val) => {
            log(val);
          })
        );
      }
      return () => {
        subs.forEach((s) => s());
        return;
      };
    }, []);

    return;
  }

  useEffect(() => {
    const sub = transforms.on("change", (val) => {
      log(val)
    });

    return () => sub();
  }, []);
}
