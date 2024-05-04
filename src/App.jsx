import Header from "./components/header/header";
import {Fragment, useState} from "react";
import CoreConcepts from "./components/core-concepts/core-concepts";
import Examples from "./components/examples/examples";


function App() {

  return (
    <>
      <Header title="React Essentials"/>
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
