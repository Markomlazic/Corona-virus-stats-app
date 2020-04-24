import React from "react";
import App from "./App";
import ReactDOM from "react-dom";

HTMLCanvasElement.prototype.getContext = jest.fn();
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
