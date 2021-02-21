import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./redux/store/store";
import Appcontainer from "./Appcontainer";
import ErrorBounderies from "./error/ErrorBounderies";

function App() {
  const store = configureStore();
  return (
    <div className="App">
      <Provider store={store}>
        <ErrorBounderies>
          <Appcontainer />
        </ErrorBounderies>
      </Provider>
    </div>
  );
}

export default App;
