import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routers from "./routers/router";

const App = () => {
   return <RouterProvider router={createBrowserRouter(routers)} />;
};

export default App;
