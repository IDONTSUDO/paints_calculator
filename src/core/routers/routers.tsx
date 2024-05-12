import { createBrowserRouter } from "react-router-dom";
import { publicRouters } from "./public_routers";

export interface IRouter {
  path: string;
  element: JSX.Element;
}

export const router = createBrowserRouter(publicRouters);
