var React = require('react');
var ReactDOM = require('react-dom');
require('./app.css');

ReactDOM.render(
  <div>
    <h1 className='h1'>Hello World</h1>
    <h2 className="h2">Hello Webpack</h2>
  </div>,
  document.getElementById('example')
);
