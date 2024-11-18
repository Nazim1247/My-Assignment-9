import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../components/Home";
import MyProfile from "../components/MyProfile";
import Login from "../components/Login";
import ErrorPage from "../errorPage/ErrorPage";
import Register from "../components/Register";
import ServiceDetails from "../components/ServiceDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/data.json'),  
            },
            {
                path: '/profile',
                element: <MyProfile></MyProfile>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/serviceDetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: async ({params})=>{
                    const res = await fetch('/data.json')
                    const data = await res.json()
                    // console.log(data,params.id)
                    const singleData = data.find(d =>d.id == params.id)
                    return singleData;
                }
            },
        ]
    }
])

export default router;