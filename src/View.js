import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Markdown from 'markdown-to-jsx';

const View = (props) => {
  return (
    <div id="display-panel">
      <div className="d-flex bd-highlight mb-2">
        <div className="p-1"><h2 style={{"margin": "0"}}>{props.title}</h2></div>
        <div className="ms-auto p-1">
          <button className="btn btn-outline-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            View Docs
          </button>
        </div>
      </div>
      <div id="code-wrapper">
        <SyntaxHighlighter
          language="cpp"
          style={github}
          customStyle={{"margin": "0",
          "background": "#f8f8f8", "maxHeight": "calc(100vh - 170px)",
          "overflow": "auto"}}
          showLineNumbers="true"
          lineNumberStyle={{"color": "grey"}}
        >
          {props.code}
        </SyntaxHighlighter>
      </div>

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{"width": "80%", "padding": "1em 2em"}}>
        <div className="offcanvas-header">
          <h2 className="offcanvas-title" id="offcanvasExampleLabel">{props.title} Docs</h2>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body" style={{"paddingTop": "0"}}>
          <Markdown id="md">
            {props.doc}
          </Markdown>
          <div id="code-wrapper">
            <SyntaxHighlighter
              language="cpp"
              style={github}
              customStyle={{"margin": "0",
              "background": "#f8f8f8"}}
              showLineNumbers="true"
              lineNumberStyle={{"color": "grey"}}
            >
              {props.example}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View