import "./App.css";

function Editor() {
  return (
    <div className="editor-container container shadow-sm border rounded">
      <form>
      <h3 className="text-center">Editor</h3>
      <textarea id="editor" className="form-control shadow-sm"></textarea>
      </form>
    </div>
  );
}

function Previewer() {
  return (
    <div className="preview-container container shadow-sm border rounded">
      <h3 className="text-center">Preview</h3>
      <div id="preview"></div>
    </div>
  );
}

function App() {
  return (
    <div className="container-fluid">
      <h1 className="text-center">Markdown Previewer</h1>
      <div className="row">
        <div className="col-6">
          <Editor />
        </div>
        <div className="col-6">
          <Previewer />
        </div>
      </div>
    </div>
  );
}

export default App;
