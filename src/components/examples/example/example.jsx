import {EXAMPLES} from "../../../data";

export default function Example({selectedTopic}) {
 const example = EXAMPLES[selectedTopic.toLowerCase()];
 const {title, description, code} = example;

  return (
    <div id="tab-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}
