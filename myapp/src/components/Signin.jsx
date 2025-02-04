function Signin() {
    return (
        <div className="w-screen h-screen flex justify-center items-center p-24 px-[24rem]">
            <div className="w-full h-full bg-transparent rounded-2xl border-2 border-red-500 overflow-hidden p-1">
                <div className="w-full h-1/4 bg-transparent flex flex-col justify-center items-center">
                    <div className="w-full h-2/3 flex justify-center items-center">
                        <h2 className="flex justify-center items-center text-4xl ">
                            Sign In to 
                            <img 
                                src="https://i.postimg.cc/mZQwpftF/logowhite.png" 
                                className="w-12 h-10 me-[-0.7rem]" 
                                alt="GoatTeaz Logo" 
                            /> 
                            GoatTeaz
                        </h2>
                    </div>
                    <div className="w-full h-1/3 justify-center mt-[-1.2rem] flex text-lg">
                        <h2>to know the most goated fact</h2>
                    </div>
                </div>

                {/* Form Section */}
                <div className="h-3/4 w-full flex flex-col items-center">
                    <form className="w-3/4 flex flex-col gap-4">
                        <input 
                            type="text" 
                            placeholder="Full Name" 
                            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                        />
                        <input 
                            type="email" 
                            placeholder="Email ID" 
                            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                        />
                        <input 
                            type="password" 
                            placeholder="Confirm Password" 
                            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                        />
                        <button 
                            type="submit" 
                            className="w-full p-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all">
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signin;
