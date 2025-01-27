import Head from "next/head";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <div className="flex h-screen bg-gradient-to-r from-red-500 to-black items-center justify-center">
        <div className="w-1/2 flex items-center justify-center p-8">
          <form className="bg-transparent  p-8 rounded-lg shadow-lg backdrop-filter backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">Login</h2>
            <div className="mb-4">
              <label className="block text-white text-sm font medium mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-full bg-transparent placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white text-sm font medium mb-2">Password</label>
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-full bg-transparent placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white p-3 rounded-md font-semibold hover:bg-red-700 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
        <div className="w-1/2 flex items-center justify-center relative">
          <img
            src="/ave.png"
            alt="Login Image"
            className="w-3/4 h-auto shadow-glow"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
