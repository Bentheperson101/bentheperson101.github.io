import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Works from "./pages/Works";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="aboutme" element={<AboutMe/>}/>
          <Route path="works" element={<Works/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);