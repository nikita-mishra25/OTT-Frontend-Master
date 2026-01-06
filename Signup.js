import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({ firstName: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { firstName, email, password } = form;

    // Validation
    if (!firstName || !email || !password) {
      setError("All fields are required");
      return;
    }

    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(form));
    navigate("/login");
  };
  return (
    <>
      <section className="loginSection pt-5">
        <div className="container pt-5">
          <div className="row pt-5">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <form onSubmit={handleRegister} className="w-100 pt-5">
                <h2>Register</h2>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <input
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                />
                <input
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <button type="submit">Register</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
