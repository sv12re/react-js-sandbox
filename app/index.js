import * as React from "react";
import * as ReactDOM from "react-dom";

const Hello = () => {
  return React.createElement('h1', {className: 'test'}, 'Wohoo!');
}

ReactDOM.render(React.createElement(Hello), document.getElementById('root'));
