// import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl">Blog Platform</h1>
                <div className="space-x-4">
                    <Link to="/" className="text-white">Home</Link>
                    <Link to="/create-post" className="text-white">Create Post</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;