import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./Component/Mainlayout.jsx";
import AddCoffe from "./Component/AddCoffee/AddCoffe.jsx";
import Coffeelist from "./Component/Coffeelist/Coffeelist.jsx";
import UpdateInf from "./Component/Update/UpdateInf.jsx";
import Signin from "./Component/Sign/Signin.jsx";
import Login from "./Component/Login/Login.jsx";
import AuthProvider from "./AuthProvider.jsx";
import User from "./Component/User/User.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/addcoffee",
        element: <AddCoffe></AddCoffe>,
      },
      {
        path: "/coffelist",
        element: <Coffeelist></Coffeelist>,
        loader: () => fetch("http://localhost:5000/coffee"),
        errorElement: <div>404 page Not Found</div>,
      },
      {
        path: "update/:id",
        element: <UpdateInf></UpdateInf>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "signin",
        element: <Signin></Signin>,
      },
      {
        path: "login",
        element: <Login>S</Login>,
      },
      {
        path: "users",
        element: <User></User>,
        loader: ()=> fetch('http://localhost:5000/users')
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);

// loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`),
//         errorElement:<div>404 page Not Found</div>,
