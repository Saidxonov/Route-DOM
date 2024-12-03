import { useState, useEffect } from "react";
import "./index.css";
import { user_API } from "../../axios";

function Users() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [res, setRes] = useState([]);

  useEffect(function () {
    user_API
      .get(`users`)
      .then((response) => {
        if (response.status == 200) {
          setRes(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleClick(e) {
    e.preventDefault();

    const data = {
      name: userName,
      email: userEmail,
    };
    const copied = [...res];
    copied.push(data);
    setRes(copied);
    setUserEmail("");
    setUserName("");
  }
  return (
    <>
      <div className="users">
        <div className="container">
          <div className="top-content">
            <h2>1-masala</h2>
            <h1>1. Foydalanuvchi ro'yxatini ko'rsatish</h1>
          </div>
          <div className="form">
            <form>
              <label className="userName" htmlFor="userName">
                Ismingizni Kiriting <span>*</span>
                <br />
                <input
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter Your Name"
                  id="userName"
                />
              </label>
              <label className="userEmail" htmlFor="userEmail">
                Email Kiriting <span>*</span>
                <br />
                <input
                  value={userEmail}
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                  }}
                  type="email"
                  placeholder="Enter Your Email"
                  id="userEmail"
                />
              </label>
              <button className="save-btn" onClick={handleClick}>
                SAVE
              </button>
            </form>
          </div>
          <div className="block">
            {res.map(function (value, index) {
              return (
                <div key={index} className="card">
                  <h2>{value.name}</h2>
                  <h3>{value.email}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
