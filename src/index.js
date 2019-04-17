import React from "react";
import ReactDOM from "react-dom";

import StringsDisplayer from "./StringsDisplayer";

const App = () => <StringsDisplayer />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
