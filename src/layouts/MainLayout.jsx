import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="border-b bg-white/80 backdrop-blur">
                <div className="max-w-6xl mx-auto h-14 px-6 flex items-center justify-between">
                    <h1 className="text-base font-semibold tracking-tight">Mi App</h1>
                </div>
            </header>
            <main className="flex-1">
                <Outlet />
            </main>
            <footer className="border-t py-6 text-center text-sm text-zinc-500">
                <small>© {new Date().getFullYear()}</small>
            </footer>
        </div>
    );
};

export default MainLayout;


