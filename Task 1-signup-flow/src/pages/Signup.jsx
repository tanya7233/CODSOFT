import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";   // styling import

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (email && password) {
      alert("Signed up successfully!");
      navigate("/success");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      /><br />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      /><br />
      <label>
        <input type="checkbox" /> I agree with Privacy Policy
      </label><br />
      <button onClick={handleSignup}>Sign Up</button>
      <div className="link">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

