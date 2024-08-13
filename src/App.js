import { useState } from "react";
import { marked } from "marked";
import "./App.css";

const initialRawTextBuilder = [];
const codeBlock = '```javascript\nconsole.log("Hello world!");\n```';
initialRawTextBuilder.push("# H1 Heading");
initialRawTextBuilder.push("## H2 Heading");
initialRawTextBuilder.push("[Link to github](https://github.com/canioves)  ");
initialRawTextBuilder.push('`const variable = "Hello world!"`');
initialRawTextBuilder.push(codeBlock);
initialRawTextBuilder.push("1. first item\n2. second item\n3. third item\n");
initialRawTextBuilder.push("> Block Quote  \n");
initialRawTextBuilder.push(
  "![Anonymus!!!](https://ae04.alicdn.com/kf/Sbff0b2aecebc4b489deece6d4a6bcb5eU.jpg_480x480.jpg)  "
);
initialRawTextBuilder.push("**BOLD TEXT**  ");

function Editor({ rawText, onTextChange }) {
  return (
    <div className="editor-container container shadow-sm border rounded">
      <form>
        <h3 className="text-center">Editor</h3>
        <textarea
          id="editor"
          className="form-control shadow-sm"
          onChange={onTextChange}
        >
          {rawText}
        </textarea>
      </form>
    </div>
  );
}

function Previewer({ text }) {
  return (
    <div className="preview-container container shadow-sm border rounded">
      <h3 className="text-center">Preview</h3>
      <div id="preview" dangerouslySetInnerHTML={{ __html: text }}></div>
    </div>
  );
}

function App() {
  const parseToMarkdown = (text) => {
    marked.use({
      gfm: true,
      breaks: true,
    });
    return marked.parse(text);
  };

  const [rawMarkdown, setRawMarkdown] = useState(
    initialRawTextBuilder.join("\n")
  );
  const [parsedText, setParsedText] = useState(
    parseToMarkdown(initialRawTextBuilder.join("\n"))
  );

  function handleTextChange(event) {
    const newRawText = event.target.value;
    console.log(newRawText);
    setRawMarkdown(newRawText);
    const newParsedText = parseToMarkdown(newRawText);
    setParsedText(newParsedText);
    console.log(newParsedText);
  }

  return (
    <div className="container-fluid">
      <h1 className="text-center">Markdown Previewer</h1>
      <div className="row">
        <div className="col-6">
          <Editor rawText={rawMarkdown} onTextChange={handleTextChange} />
        </div>
        <div className="col-6">
          <Previewer text={parsedText} />
        </div>
      </div>
    </div>
  );
}

export default App;
