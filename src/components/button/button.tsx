import React, { useState, useEffect, useRef } from "react";

import { IButton } from "./types";
import { Wrapper, Ring, Pulsar } from "./styled";

export default function({
  type = "base",
  style,
  onClick = () => {},
  children,
  disabled = false,
}: IButton) {
  const [pulsar, setPulsar] = useState<{ x: number; y: number }[]>([]);
  const pulsarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPulsar(prev => prev.splice(1, 1));
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [pulsar]);

  const handleClick = (e: { clientX: number; clientY: number }) => {
    if (pulsarRef && pulsarRef.current) {
      const target = pulsarRef.current.getBoundingClientRect();
      var xCoord = e.clientX - target.left;
      var yCoord = e.clientY - target.top;
      setPulsar(prev => [...prev, { x: xCoord, y: yCoord }]);
      onClick();
    }
  };

  return (
    <Wrapper type={type} style={style} onClick={handleClick} disabled={disabled}>
      {children}
      <Pulsar ref={pulsarRef}>
        {pulsar.map(({ x, y }, key) => (
          <Ring x={x} y={y} key={key} type={type} />
        ))}
      </Pulsar>
    </Wrapper>
  );
}
