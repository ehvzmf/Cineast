import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            {/*<Header />*/}
                <Outlet />
            {/*<Footer />*/}
        </>
    )
}