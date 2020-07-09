import React, { useEffect, useState } from "react";

import { IStep2 } from "assets/fakeData";
import useFetch from "utils/useFetch";
import { useGlobalState } from "utils/context";
import { Wrapper } from "./styled";
import Card from "./card";
import Skeleton from "components/skeleton";

export default function() {
  const [someData, setSomeData] = useState<IStep2[]>();
  const [otherSort, setOtherSort] = useState(false);
  const [show, setShow] = useState(false);

  const { sort } = useGlobalState();
  const { response } = useFetch<IStep2[]>("step2");

  useEffect(() => {
    if (response) {
      setSomeData(response);
    }
  }, [response]);

  useEffect(() => {
    setShow(false);

    let timer1: number, timer2: number;
    timer1 = setTimeout(() => {
      setOtherSort(sort);
      timer2 = setTimeout(() => {
        setShow(true);
      }, 500);
    }, 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [sort]);

  return (
    <Wrapper otherSort={otherSort} show={show}>
      {!someData &&
        Array.from(Array(10).keys()).map(i => (
          <Skeleton key={i} data={false} width="100%" height={sort ? "280px" : "110px"} />
        ))}
      {someData &&
        someData.map((item, idx: number) => (
          <Card item={item} key={item ? item.id : idx} sort={otherSort} show={show} idx={idx} />
        ))}
    </Wrapper>
  );
}
