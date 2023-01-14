import React from "react";
import ReactDOM from 'react-dom'; 
import App from './App';
import   './index.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
// import '../node_modules/font';


import '../node_modules/react-bootstrap/dist/react-bootstrap'
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <>
        <BrowserRouter>
            <App />
        </BrowserRouter>

    </>, document.getElementById("root")
)