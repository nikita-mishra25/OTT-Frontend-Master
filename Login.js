import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    if (
      storedUser &&
      storedUser.email === form.email &&
      storedUser.password === form.password
    ) {
      localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };
  return (
    <>
      <section className="loginSection pt-5">
        <div className="container pt-5">
          <div className="row pt-5">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <form onSubmit={handleLogin} className="w-100 pt-5">
                <h2>Login</h2>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <input
                  name="email"
                  placeholder="Email"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
