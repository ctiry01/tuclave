import React from 'react';
import './App.css';
import {Home} from "./components/pages/Home";
import GlobalStyle from "./globalStyles";

function App() {
    return (
        <>
            <GlobalStyle/>
            <Home/>
        </>
    );
}

export default App;
