function Resetpassword() {
    return (
        <div className="w-screen h-screen flex justify-center items-center p-20 px-[24rem]">
            <div className="w-full h-full bg-transparent rounded-2xl border-2 border-red-500 overflow-hidden p-1">
                <div className="w-full h-1/4 bg-transparent flex flex-col justify-center items-center">
                    <div className="w-full h-2/3 flex justify-center items-center">
                        <h2 className="flex justify-center items-center text-4xl ">
                            Reset your 
                            <img 
                                src="https://i.postimg.cc/mZQwpftF/logowhite.png" 
                                className="w-12 h-10 me-[-0.7rem]" 
                                alt="GoatTeaz Logo" 
                            /> 
                            GoatTeaz Pass
                        </h2>
                    </div>
                    <div className="w-full h-1/3 justify-center mt-[-1.2rem] flex text-lg">
                        <h2>and make it more safe and secure</h2>
                    </div>
                </div>

                {/* Form Section */}
                <div className="h-3/4 w-full flex flex-col items-center">
                    <form className="w-3/4 flex flex-col gap-4">
                        <input 
                            type="email" 
                            placeholder="Email Id" 
                            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                        />
                        <button 
                            type="submit" 
                            className="w-full p-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all">
                            Send token
                        </button>
                        
                        <input 
                            type="text" 
                            placeholder="Token" 
                            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                        />
                        <input 
                            type="password" 
                            placeholder="New Password" 
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
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Resetpassword;
