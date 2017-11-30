import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from 'antd';

class App extends Component {
   
    render() {
        let test='123';
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React {test}</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to
                    reload.
                </p>
                <p> <Button type="primary">Primary</Button></p>
            </div>
        );
    }
}

export default App;
