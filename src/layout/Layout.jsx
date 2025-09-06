import { Outlet } from "react-router"
import Footer from "./Footer"
import Header from "./Header"

function Layout() {
    return (
        <div className="app-wrapper">
            <Header />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout