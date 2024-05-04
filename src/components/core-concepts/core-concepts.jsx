import {CORE_CONCEPTS} from "../../data";
import CoreConcept from "./core-concept/core-concept";
import Section from "../section/section";

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((concept, index) => (
          <CoreConcept key={index} {...concept} />
        ))}
      </ul>
    </Section>
  )
}
