import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Home"
import Layout from "./Layout"
import Character from "./Character"
import Contact from "./Contact"
import Cv from "./Cv"
import Hobbies from "./Hobbies"
import License from "./License"
import Links from "./Links"

const Index = () => {
    const router = createBrowserRouter([{
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/Character",
                element: <Character />,
            },
            {
                path: "/Contact",
                element: <Contact />,
            },
            {
                path: "/Cv",
                element: <Cv />,
            },
            {
                path: "/Hobbies",
                element: <Hobbies />,
            },
            {
                path: "/License",
                element: <License />,
            },
            {
                path: "/Links",
                element: <Links />,
            }
        ]
    }
    ]);

    return (
        <RouterProvider router={router} />
    );
}

export default Index