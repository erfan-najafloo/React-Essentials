import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConsept from "./components/CoreConsept";
import TabButton from "./components/TabButton";
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Consepts</h2>
          <ul>
            <CoreConsept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConsept {...CORE_CONCEPTS[1]} />
            <CoreConsept {...CORE_CONCEPTS[2]} />
            <CoreConsept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton lable={"Component"} />
            <TabButton lable={"Jsx"} />
            <TabButton lable={"Props"} />
            <TabButton lable={"State"} />
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
