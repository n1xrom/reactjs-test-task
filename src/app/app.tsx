import React from "react";

import Home from "screens";
import GlobalStyles from "./globalStyles";
import { Provider } from "utils/context";

export default function () {
  return (
    <Provider>
      <Home />
      <GlobalStyles />
    </Provider>
  );
}
