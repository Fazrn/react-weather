import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <p>
        You can find the{" "}
        <a
          href="https://github.com/Fazrn/react-weather"
          target="_blank"
          rel="noreferrer"
        >
          open-source code
        </a>{" "}
        here.{" "}
      </p>
    </div>
  );
}

export default App;
