import React, { useMemo, useState } from 'react';
import { createEditor } from 'slate';

import { Slate, Editable, withReact } from 'slate-react';
import { ShowIcons } from './icons';

const EDITOR_STYLE = {
  border: "1px solid #ccc",
  borderRadius: "3px",
  marginBottom: "5px",
  padding: "5px",
  fontSize: "16px",
  fontFamily: "sans-serif",
  width: "250px"
};

const App = () => {
      const [editor] = useState(createEditor());
      
      const [count, setCount] = useState(0);

      const [value, setValue] = useState([
        {
          type: 'paragraph',
          children: [{ text: 'A line of text in a paragraph.' }],
        },
      ])

      return (
        <React.Fragment>
                  <Slate 
          editor={editor}
          value={value}
          onChange={newValue => setValue(newValue)}
        >
          <button onClick={() => setCount(count + 1)}><ShowIcons></ShowIcons></button>
          { [...Array(count)].map((_, i) => <Editable style={EDITOR_STYLE} key={i} />) }

        </Slate>
        </React.Fragment>
      )
}

export default App;
