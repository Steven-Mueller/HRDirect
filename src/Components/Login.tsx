import "./../Styles/Login.css";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);
    // Reset fields after submission
    setUsername("");    
    setPassword("");
  }

  return (
    <div className="border-2 border-gray-400/50 bg-white/10 rounded-2xl flex flex-col items-center gap-8">
      <h1 className="bg-black/40 text-3xl border-b-2 rounded-2xl pb-4 pt-2 text-center border-gray-400/70 w-full font-extrabold underline">Login</h1>
      <p>Please enter username and password.</p>
      <form onSubmit={handleSubmit} className="flex flex-row gap-4 pb-4 px-4 pt-4">
        <input
          className="border-2 rounded-2xl border-amber-300/80 text-center"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border-2 rounded-2xl border-amber-300/80 text-center"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-red-500 font-bold text-white py-2 px-4 rounded-2xl hover:bg-blue-300 transition-colors duration-300"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
