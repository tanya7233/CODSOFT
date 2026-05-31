import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome</h1>
      <p>Please login or sign up to continue</p>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}
