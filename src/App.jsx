import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { getUserInfo } from "./lib/Auth";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserInfo().then((res) => {
      if (res) {
        setUser({
          userId: res.id,
          nickname: res.nickname,
          avatar: res.avatar,
        });
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout user={user} setUser={setUser} />}>
            <Route index element={<Home user={user} />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route
              path="/Profile"
              element={<Profile user={user} setUser={setUser} />}
            />
          </Route>
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login setUser={setUser} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
