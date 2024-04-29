import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { routers } from "./router/router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<RouterProvider router={createHashRouter(routers)} />
);
