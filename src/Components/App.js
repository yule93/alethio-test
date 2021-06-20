import React, { Component } from 'react';
import { useMediaQuary, useMediaQuery } from "react-responsive";
import Router from "./Router";

/* const isPc = useMediaQuery({
  query: "(min-width: 414px)"
});
const isMoblie = useMediaQuary({
  query: "(max-width: 414px)"
});*/

class App extends Component {
  render () {
    return (
      <>
        <Router />
      </>
    );
  }
}

export default App;
