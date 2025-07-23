// Not Found Component
import React from 'react';
function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-6">Page Not Found</p>
                <a href="/" className="text-indigo-600 hover:text-indigo-800">
                    Go back to Homepage
                </a>
            </div>
        </div>
    );
}
export default NotFound;