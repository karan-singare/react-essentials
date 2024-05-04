import {useState} from "react";
import Example from "./example/example";
import TabButton from "./tab-button/tab-button";
import Tabs from "../tabs/tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  const tabs = ['Components', 'JSX', 'Props', 'State'];

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>

      <Tabs buttons={
        tabs.map(tab => (
          <TabButton
            key={tab}
            isSelected={selectedTopic === tab}
            onClick={() => handleSelect(tab)}>
            {tab}
          </TabButton>
        ))
      }>
        {selectedTopic ?
          <Example selectedTopic={selectedTopic}/> :
          'Please select a topic to see examples.'}
      </Tabs>

    </section>
  )
}
