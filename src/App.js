import React, { useMemo, useState } from 'react';
import { createEditor } from 'slate';

import { Slate, Editable, withReact } from 'slate-react';
import { ShowIcons } from './icons';

const AddText = () => <p>texttttttt</p>

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
          { [...Array(count)].map((_, i) => <Editable key={i} />) }

        </Slate>
        </React.Fragment>
      )
}

export default App;
