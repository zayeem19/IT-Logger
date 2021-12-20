import React, { Fragment, useEffect } from "react";

//imports components
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
import SearchBar from "./components/layouts/SearchBar";
import AddBtn from "./components/layouts/AddBtn";
import Logs from "./components/logs/Logs";

//imports redux components
import { Provider } from "react-redux";
import store from "./store";

//imports materialize components
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

function App() {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddTechModal />
          <TechListModal />
          <EditLogModal />
          <AddLogModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
