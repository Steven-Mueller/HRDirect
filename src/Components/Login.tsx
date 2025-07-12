import "./../Styling/Login.css";

function Login() {
  return (
    <div className="border-2 p-8 border-gray-400/50 bg-white/10 rounded-4xl flex flex-col items-center gap-8">
      <h1 className="text-3xl font-extrabold underline">Login</h1>
      <form className="flex flex-row gap-4">
        <input className="border-2 rounded-2xl border-amber-300/80 text-center" type="text" placeholder="Username" />
        <input className="border-2 rounded-2xl border-amber-300/80 text-center" type="password" placeholder="Password" />
        <button className="bg-blue-500 text-white py-2 px-4 rounded-2xl" type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;