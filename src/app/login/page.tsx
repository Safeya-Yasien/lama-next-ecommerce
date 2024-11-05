const LoginPage = () => {
  return (
    <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
      <form className="flex flex-col gap-8">
        <h1 className="text-2xl font-semibold">Log In</h1>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="john@gmail.com"
            className="ring-2 ring-gray-300 rounded-md p-4 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="ring-2 ring-gray-300 rounded-md p-4 outline-none"
          />
        </div>
        <div className="text-sm underline cursor-pointer">Forgot Password?</div>
        <button className="bg-lama text-white p-2 rounded-md bg-red-600 ">
          Login
        </button>
        <div className="text-sm underline cursor-pointer">
          {"Don't"} have an account?
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
