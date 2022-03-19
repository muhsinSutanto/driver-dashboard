import "./App.css";
import Dashboard from "./pages";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
   return (
      <Provider store={store}>
         <Dashboard />
      </Provider>
   );
}

export default App;
