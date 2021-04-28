import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import store from "./redux/store";

function App() {
  return (
    // Provider 必須是最上層元件，把store 當作props 傳入
    <Provider store={store}>
      <div className="App">
        <h1>Map To</h1>
        <CakeContainer />
        <IceCreamContainer />
        <hr />
        <h1>Use Hooks</h1>
        <HooksCakeContainer />
        <HooksIceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
