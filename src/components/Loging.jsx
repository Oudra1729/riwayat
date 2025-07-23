import React from "react";


function Loging() {
 

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side */}
      <div className="flex-1 flex items-center justify-center px-8 py-12 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">

            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h2>
            <p className="text-gray-600">Read more, unlock more. Your next book is waiting!</p>
          </div>

          <form className="space-y-6">
            <div>
              <input
                name="email"
                type="email"
             
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <div className="relative">
                <input
                  name="password"
                
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                 
                  className="absolute top-3 right-3 text-gray-500 text-sm"
                >
                
                </button>
              </div>
            </div>

           

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 focus:ring-2 focus:ring-gray-500"
            >
              Sign In
            </button>

           
          </form>

        
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden lg:flex flex-1 items-center justify-center relative bg-gradient-to-br from-green-400 via-green-300 to-yellow-200 text-white px-12  ">


        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/50 via-orange-400/30 to-yellow-400/30"></div>

        <div className="relative z-10 text-center space-y-6">
          <div>
            <h1 className="text-5xl font-light tracking-wide">Riwayat
</h1>
            <p className="text-lg mt-2">... حيث تبدأ حكايتك
</p>
          </div>
          <h2 className="text-4xl font-bold leading-tight">
            Enter a world of stories and imagination.

          </h2>
          <p className="text-xl max-w-md mx-auto">
            Where every word inspires, and every chapter comes alive.

          </p>
          <div className="flex justify-center gap-8 pt-6">
            <div>
              <div className="text-3xl ">📚10K+ Stories
</div>
              
            </div>
            <div>
              <div className="text-3xl ">💬 98.7% Engagement
</div>
              
            </div>
            <div>
              <div className="text-3xl ">♾ Infinite Inspiration</div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Loging;



