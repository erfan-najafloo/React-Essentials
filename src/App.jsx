import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import CoreConsepts from "./components/CoreConsepts.jsx";
import Examples from "./components/Examples.jsx";
function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConsepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
