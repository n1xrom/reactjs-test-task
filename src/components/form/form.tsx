import React, { useState, useEffect } from "react";

import { IFormfields, IError, IProps, IFields } from "./types";
import Input from "../input";
import { Form } from "./styled";
import { useGlobalState, useDispatch } from "utils/context";

export default function({ fields, styles = "", width = "", callback = () => {} }: IProps) {
  const [data, setData] = useState<IFormfields>({});
  const [error, setError] = useState<IError>({});
  const { visibleErrors } = useGlobalState();
  const dispatch = useDispatch();

  useEffect(() => {
    const formfields: IFormfields = {};
    let i: keyof IFields;
    for (i in fields) {
      formfields[i] = fields[i].value || "";
    }
    setData(formfields);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    validateFields();
    callback(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const validateFields = () => {
    let i: keyof IFields;
    let flag = false;
    const formErrors: { [key: string]: string } = {};
    for (i in data) {
      if (!fields[i].regex.test(data[i])) {
        const name = i;
        formErrors[name] = "This fill is not valid";
        flag = true;
      }
    }
    setError(formErrors);
    dispatch("errors", flag);
  };

  const handleChange = (value: any, name: any) => {
    setData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Form styles={styles} width={width}>
      {Object.keys(fields).map((key: string) => (
        <Input
          {...fields[key]}
          key={key}
          onChange={handleChange}
          required
          helperText={visibleErrors ? error[key] : ""}
          error={visibleErrors ? error[key] : ""}
        />
      ))}
    </Form>
  );
}
