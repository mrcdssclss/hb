import './index.css'
import React from "react";
import { App } from "./App";
import * as reactDOM from "react-dom/client";

reactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);