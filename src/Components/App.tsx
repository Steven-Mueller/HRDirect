import "../Styling/App.css";
import Login from "./Login";

function App() {
  return (
    <div className="main-gradient text-white w-full h-screen flex flex-col items-center justify-center gap-32">
      <div className="text-center">
        <h1>Welcome to HRDirect</h1>
        <p>Your human resources management solution.</p>
      </div>
      <Login />
    </div>
  );
}

export default App;
