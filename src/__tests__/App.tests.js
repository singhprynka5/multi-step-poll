import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
import configureStore from "../configureStore";

const initialState = { isSubmitted: false };
const store = configureStore(initialState);

describe("App Component Test", () => {
  test("renders with Redux Provider and displays Carousel", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
