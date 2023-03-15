<<<<<<< HEAD
import "./App.css"
import ReactDOM from "react-dom/client"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Home} from "./pages/home"
import {Profile} from "./pages/profile"
import {Layout} from "./pages/layout"
import {NoPage} from "./pages/no-page"
import {Login} from "./pages/login"
=======
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import { Layout } from "./pages/layout";
import { NoPage } from "./pages/no-page";
import { Login } from "./pages/login";
>>>>>>> cf6269dae574cbc37e57e00c3202c7ccf2aae9e5

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
<<<<<<< HEAD

const root = ReactDOM.createRoot(document.getElementById("root"))
=======
>>>>>>> cf6269dae574cbc37e57e00c3202c7ccf2aae9e5
