import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/user/homePage";
import { ROUTERS } from "./utls/route";
import MasterLayout from "./pages/user/masterLayout";
import profilePage from "./pages/user/profilePage";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: HomePage
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: profilePage
        },
    ]
    return(
        <MasterLayout >
            <Routes>
                {
                userRouters.map((item, key) => (<Route key={key} path={item.path} element={<item.component />} />))
                }
            </Routes>
        </MasterLayout>
    )
}

const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;
