import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConsept from "./components/CoreConsept";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";
function App() {
  const [selectedTopic, setSelectedTopic] = useState("");
  function handleSelecte(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  let tabContent = <p>please selecte a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
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
            <TabButton
              lable={"Components"}
              onSelect={() => handleSelecte("components")}
              isSelected={selectedTopic === "components"}
            />
            <TabButton
              lable={"Jsx"}
              onSelect={() => handleSelecte("jsx")}
              isSelected={selectedTopic === "jsx"}
            />
            <TabButton
              lable={"Props"}
              onSelect={() => handleSelecte("props")}
              isSelected={selectedTopic === "props"}
            />
            <TabButton
              lable={"State"}
              onSelect={() => handleSelecte("state")}
              isSelected={selectedTopic === "state"}
            />
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
