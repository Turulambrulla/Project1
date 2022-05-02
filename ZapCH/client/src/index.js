import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Part from './zapch/Part';
import User from "./zapch/User";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new User(),
        part: new Part(),
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);