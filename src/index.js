import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import * as serviceWorker from './serviceWorker';
import injectGlobalStyles from './injectGlobalStyles';

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
injectGlobalStyles();
