import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../components/Home";
import MyProfile from "../components/MyProfile";
import Login from "../components/Login";
import ErrorPage from "../errorPage/ErrorPage";
import Register from "../components/Register";
import ServiceDetails from "../components/ServiceDetails";
import PrivateRoute from "../privateRoute/PrivateRoute";
import SuccessStories from "../success-stories/SuccessStories";
import ForgetPassword from "../forgetPassword/ForgetPassword";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json'),
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
                path: '/successStories',
                element:
                    <PrivateRoute>
                        <SuccessStories></SuccessStories>
                    </PrivateRoute>,
                loader: () => fetch('/success.json')
            },
            {
                path: '/forget-password',
                element: <ForgetPassword></ForgetPassword>
            },
            {
                path: '/profile',
                element:
                    <PrivateRoute>
                        <MyProfile></MyProfile>
                    </PrivateRoute>
            },
            {
                path: '/serviceDetails/:id',
                element:
                    <PrivateRoute>
                        <ServiceDetails></ServiceDetails>
                    </PrivateRoute>,
                loader: async ({ params }) => {
                    const res = await fetch('/data.json')
                    const data = await res.json()
                    const singleData = data.find(d => d.id == params.id)
                    return singleData;
                },

            },
        ]
    }
])

export default router;