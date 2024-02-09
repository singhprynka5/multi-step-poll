import { Provider } from "react-redux";
import configureStore from "./configureStore";
import Carousel from "./components/Carousel/index";
window.store = configureStore();

const App = () => {
  return (
    <Provider store={window.store}>
      <div className="flex">
        <Carousel />
      </div>
    </Provider>
  );
};

export default App;
