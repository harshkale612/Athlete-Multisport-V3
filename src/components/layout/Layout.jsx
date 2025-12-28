import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-background text-text font-sans theme-transition">
            <Navbar />
            <main className="flex-grow relative">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
