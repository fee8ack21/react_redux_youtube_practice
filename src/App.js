import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import store from "./redux/store";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    // Provider 必須是最上層元件，把store 當作props 傳入
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <h1>Map To</h1>
        <CakeContainer />
        <IceCreamContainer />
        <hr />
        <h1>Use Hooks</h1>
        <HooksCakeContainer />
        <HooksIceCreamContainer />
        <hr />
        <h1>New Add number</h1>
        <NewCakeContainer />
        <hr />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
