import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";

export default function Examples() {
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
  );
}
