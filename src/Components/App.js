import React, { Component } from 'react';
import AggRouter from "./Router";
import GlobalStyles from "./GlobalStyles";

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
        <AggRouter />
        <GlobalStyles darkMode = "true"/>
      </>
    );
  }
}

export default App;
