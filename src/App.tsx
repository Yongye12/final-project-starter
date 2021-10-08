import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AddCount } from "./component/AddCount";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
         *Welcome to our page*.
                </p>
                <AddCount></AddCount>

            </header>
        </div>
                

    );
}

export default App;
