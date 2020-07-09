import { useEffect, RefObject } from "react";

export default function(ref: RefObject<HTMLElement>, callback: () => void) {
  const handleClick = (e: { preventDefault: () => void; target: any }) => {
    e.preventDefault();
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
}
