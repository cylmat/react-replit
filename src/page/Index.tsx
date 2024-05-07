import { useState } from "react"; //@todo move it
import CssSample from "../components/Css/CssSample";
import Generic from "../components/Generic/Generic.tsx";
import Loader from "../components/Loader/Loader.tsx";
import Logo from "../components/Logo/Logo";
import Tabs from "../components/Tab/Tabs";
import reactLogo from "../assets/react.svg";
import viteLogo from "/favicon.svg";
import "./Index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
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
      {/*<h1>Vite + React</h1>*/}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
      { /*Tabs*/ }
      <Tabs />
      <Loader />
      <Generic />

      { /*Css*/ }
      <CssSample />
    </>
  );
}

export default App;
