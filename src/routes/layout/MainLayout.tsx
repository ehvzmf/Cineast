import { Outlet, Link } from "react-router-dom";
import Header from "../../widgets/Header";

export default function MainLayout() {
    return (
        <>
                <Outlet />
            {/*<Footer />*/}
        </>
    )
}