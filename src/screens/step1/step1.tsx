import React, { useEffect, useState } from "react";

import { Wrapper, Avatar, Welcome } from "./styled";
import { IStep1 } from "assets/fakeData";
import useFetch from "utils/useFetch";
import { useGlobalState, useDispatch } from "utils/context";
import { Skeleton, Form } from "components";

export default function () {
  const [userData, setUserData] = useState({ avatar: "", name: "" });

  const { formData } = useGlobalState();
  const dispatch = useDispatch();
  const { response } = useFetch<IStep1>("step1");

  useEffect(() => {
    dispatch("errors", true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (response) {
      setUserData(response);
    }
  }, [response]);

  const fields = {
    email: {
      name: "email",
      type: "email",
      required: true,
      label: "Email",
      regex: /^\S+@\S+\.\S+/,
      value: formData.email,
    },
    password: {
      name: "password",
      type: "password",
      required: true,
      label: "Password",
      regex: /^(?=.{6,})/,
      value: formData.password,
    },
  };

  const callback = (values: any) => {
    dispatch("formData", values);
  };

  return (
    <Wrapper>
      <Skeleton data={userData.avatar} width="120px" circle styles={`margin: 100px 0 0;`}>
        <Avatar src={userData.avatar} />
      </Skeleton>
      <Skeleton data={userData.name} width="50%" height="30px" styles={`margin: 20px 0`}>
        <Welcome>Hi, {userData.name}</Welcome>
      </Skeleton>
      <Form fields={fields} width="350px" callback={callback} />
    </Wrapper>
  );
}
