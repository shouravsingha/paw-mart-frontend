import React from 'react';
import { Outlet } from 'react-router';

import Footer from '../Component/Footer';
import NavBar from '../Pages/NavBar';

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* NavBar */}
            <NavBar />

            {/* Main Content */}
            <main className="flex-1">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default RootLayout;
