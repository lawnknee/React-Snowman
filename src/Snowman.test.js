import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

it("should display 'You lose' after maxWrong is reached.", function() {
  const { container } = render(<Snowman />);

  // make 6 wrong guesses
  const wrongLtr = container.querySelector("[value=]");
  fireEvent.click(wrongLtt);
});