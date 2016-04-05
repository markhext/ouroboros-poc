const React = require('react');
const ReactDOM = require('react-dom');
const serverState = window.state;

const App = React.createFactory(require('../../views/Layout.jsx'));

ReactDOM.render(
    App(serverState),
    document.getElementById('app-view')
);

