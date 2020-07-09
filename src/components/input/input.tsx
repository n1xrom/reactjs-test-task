import React, { useState, useEffect, useRef } from "react";

import useOutsideClick from "utils/useOutsideClick";
import { Wrapper, HelperText, Field, InputField, Border, ShowPassword, Label } from "./styled";
import { IInput } from "./types";
import eyeIcon from "assets/icons/eye.svg";
import hiddenIcon from "assets/icons/hidden.svg";

export default function ({
  value = "",
  onChange = () => {},
  label = "",
  helperText = " ",
  required = false,
  error = "",
  type = "text",
  name = "",
  autofocus,
  prefixIcon = "",
  suffixIcon = "",
  viewHelperText = false,
}: IInput) {
  const [activeLabel, setActiveLabel] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [labelWidth, setLabelWidth] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const labelText = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useOutsideClick(wrapperRef, () => {
    if (!inputValue) {
      setActiveLabel(false);
    }
  });

  useEffect(() => {
    setInputValue(value);
    if (value) {
      setActiveLabel(true);
    }
  }, [value]);

  useEffect(() => {
    if (labelText.current && labelText.current.clientWidth) {
      setLabelWidth(labelText.current.clientWidth);
    }
  }, [labelText]);

  const inputFieldChange = ({ target: { value } }: { target: { value: string } }) => {
    setInputValue(value);
    onChange(value, name);
  };

  const handleInputFocus = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const changeShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Wrapper onMouseUp={handleInputFocus} ref={wrapperRef}>
      <Field>
        <Label ref={labelText} error={error} activeLabel={activeLabel}>
          {label} {required && activeLabel && <span className="require-point">*</span>}
        </Label>
        <InputField>
          <input
            onChange={inputFieldChange}
            onFocus={() => setActiveLabel(true)}
            ref={inputRef}
            type={showPassword ? "text" : type}
            required={required}
            value={inputValue}
            name={name}
            autoFocus={autofocus}
          />
          <ShowPassword
            type={type}
            src={showPassword ? eyeIcon : hiddenIcon}
            onClick={changeShowPassword}
          />
        </InputField>
        <Border
          error={error}
          activeLabel={activeLabel}
          labelWidth={labelWidth}
          required={required}
        />
      </Field>
      <HelperText error={error} helperText={helperText}>
        {helperText}
      </HelperText>
    </Wrapper>
  );
}
