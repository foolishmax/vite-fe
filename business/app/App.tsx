import { useStore } from "@/app/store";
import { NETWORK_ERROR_MSG, aaa } from "@pkg/constant";
import { useState } from "react";
import "./app.css";
import "./app.less";
import styles from "./app.module.less";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const { username, onUserNamgeChange } = useStore();
  const [count, setCount] = useState<number>(0);
  const navigate = useNavigate();
  console.log(NETWORK_ERROR_MSG);

  console.log(aaa);

  const goAboutPage = () => {
    navigate("/about");
  };

  return (
    <div className="app flex items-center flex-col">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="title">Vite</h1>
      <h1 className={styles.title}>React</h1>
      <h2 className="text-cyan-400 text-lg">{username}</h2>
      <button onClick={() => onUserNamgeChange("-lbs")}>
        onUserNamgeChange
      </button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <button onClick={goAboutPage}>click to jump to about page</button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
