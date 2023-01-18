import "./register.css";
import { useContext, useState } from "react";
import { DataUeser } from "../../DataOfUser";
import bcrypt from "bcryptjs";

export default function Register() {
  const {
    state,
    dispatch,
    user,
    setUser,
    userName,
    setUserName,
    fullName,
    setFullName,
    email,
    setEmail,
    password,
    setPassword,
    modeType,
    setModeType,
    error,
    setError,
    hiddenPassword,
    setHiddenPassword,
  } = useContext(DataUeser);
  const changeMode = () => {
    setModeType(modeType === "signin" ? "signup" : "signin");
    setError(null);
  };
  async function handlSignIn(event) {
    event.preventDefault();
    const userInfo = JSON.parse(localStorage.getItem(userName));
    const passwordCorrect = await bcrypt.compare(password, userInfo.password);
    if (passwordCorrect) {
      setUser(userInfo.fullName);
    } else {
      setError("Invalid Username or Password");
    }
  }
  async function handleSignUp(event) {
    event.preventDefault();
    const salt = await bcrypt.genSalt();
    const invisiblPassword = await bcrypt.hash(password, salt);
    setHiddenPassword(invisiblPassword);
    dispatch({ type: "signup" });
  }

  if (modeType === "signin") {
    return (
      <div
        className="Auth-form-container"
        style={{ maxWidth: "400px", margin: "100px auto" }}
      >
        <form className="Auth-form" onSubmit={handlSignIn}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?
              <span
                className="link-primary"
                onClick={changeMode}
                style={{
                  cursor: "pointer",
                  margin: "1rem",
                }}
              >
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>UserName</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="e.g Sahrawi"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <p style={{ color: "red" }}>{error}</p>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div
      className="Auth-form-container"
      style={{ maxWidth: "400px", margin: "100px auto" }}
    >
      <form className="Auth-form" onSubmit={handleSignUp}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span
              className="link-primary"
              onClick={changeMode}
              style={{
                cursor: "pointer",
                margin: "1rem",
              }}
            >
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>UserName</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Sahrawi"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <p style={{ color: "red" }}>{error}</p>
          </div>
        </div>
      </form>
    </div>
  );
}
