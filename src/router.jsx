import { createBrowserRouter } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import Services from "./views/Services";
import Contact from "./views/Contact";
import News from "./views/News";
import DefaultLayout from "./DefaultLayout";
import PrivacyPolicy from "./views/PrivacyPolicy";


const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/services',
                element: <Services/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/news',
                element: <News/>
            },
            {
                path: '/privacy-policy',
                element: <PrivacyPolicy/>
            },

        ]
    }
])

export default router
