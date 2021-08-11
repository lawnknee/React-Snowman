import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

it("renders without crashing", function () {
  render(<Snowman />);
})

it("matches snapshot", function () {
  const { container } = render(<Snowman />);
  expect(container).toMatchSnapshot();
})

it("should display 'You lose' after maxWrong is reached.", function () {
  const { container } = render(<Snowman words={["cat"]} maxWrong={1} />);

  // make 2 wrong guesses
  const wrongLtr1 = container.querySelector("[value='b']");
  const wrongLtr2 = container.querySelector("[value='d']");

  fireEvent.click(wrongLtr1);
  fireEvent.click(wrongLtr2);

  expect(container.querySelector(".lose")).toHaveTextContent("You lose")
})

it("should display last image after maxWrong is reached", function () {
  const { container } = render(<Snowman words={["cat"]} maxWrong={2} />);

  // make 2 wrong guesses
  const wrongLtr1 = container.querySelector("[value='b']");
  const wrongLtr2 = container.querySelector("[value='d']");

  fireEvent.click(wrongLtr1);
  fireEvent.click(wrongLtr2);

  expect(
    container.querySelector('img[alt="2"]'
    ).toBeInTheDocument
  )
})
