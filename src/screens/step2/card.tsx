import React, { useEffect, useState } from "react";

import { Card, Image, Title } from "./styled";

interface ICardData {
  image: string;
  title: string;
  desc: string;
  id: number;
}
interface ICard {
  item: ICardData;
  sort: boolean;
  show: boolean;
  idx: number;
}

export default function({ item, sort, show: _show, idx }: ICard): JSX.Element {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
  }, [sort]);

  useEffect(() => {
    const time = idx * 150;
    const timer = setTimeout(() => {
      setShow(_show);
    }, [time]);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_show]);

  return (
    <Card sort={sort} show={show}>
      <Image src={item.image} sort={sort} />
      <Title sort={sort}>{item.title}</Title>
    </Card>
  );
}
