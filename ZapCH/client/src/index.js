import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Part from './zapch/Part';
import User from './zapch/User';
import Auto from './zapch/Auto';

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new User(),
        auto: new Auto(),
        part: new Part(),
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);