import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="container">
      <Weather defaultCity="Tehran" />
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
