import { CORE_CONCEPTS } from "../data";
import CoreConsept from "./CoreConsept";

export default function CoreConsepts() {
  return (
    <section id="core-concepts">
      <h2>Core Consepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conseptItem) => (
          <CoreConsept key={conseptItem.title} {...conseptItem} />
        ))}
      </ul>
    </section>
  );
}
