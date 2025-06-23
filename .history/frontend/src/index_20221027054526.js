import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(    
 <Provider store={store}>
      
   <Router>
     
    <App />
    </Router>
    </Provider>
 ,
  document.getElementById('root')
);


