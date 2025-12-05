import React from 'react';

const Footer = () => {
    return (
        <footer className="footer mt-20 footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Privacy policy</a>
                
            </nav>
            <nav>
                <div>
                    <h1 className='text-3xl font-extrabold font'>PawMart</h1>
                    <br />
                    <p>“PawMart connects local pet owners and buyers for adoption and pet care products.”</p>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Shourav LLC</p>
            </aside>
        </footer>
    );
};

export default Footer;