import { useState } from "react"; //@todo move it
import CssSample from "../components/Custom/Css/CssSample";
import Generic from "../components/Custom/Generic";
import Loader from "../components/Custom/Loader";
import Logo from "../components/Custom/Logo/Logo";
import Tabs from "../components/Custom/Tab/Tabs";
import reactLogo from "../assets/react.svg";
import viteLogo from "/favicon.svg";

import React from 'react'
import ReactDOM from 'react-dom/client'


function Index() {
  const [count, setCount] = useState(0);

  const display_logo = () => {
      return <div>
        <Logo
          href="https://vitejs.dev"
          src={viteLogo}
          alt="Vite logo"
        />
        <Logo
          href="https://react.dev"
          src={reactLogo}
          addClassname="react"
          alt="React logo"
        />
      </div>
  }

  return (
    <>
      {display_logo()}
      {/*<h1>Vite + React</h1>*/}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      React ⚛️ + Vite ⚡ + Replit 🌀
      
      { /*Tabs*/ }
      <Tabs />
      <Loader />
      <Generic />

      { /*Css*/ }
      <CssSample />
    </>
  );
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
)