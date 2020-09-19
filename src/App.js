import React from 'react'
import Editor from "./Editor"

function App() {
  return (
    <>

    <div className="editors">
           <Editor/>
           <Editor/>
           <Editor/>
      </div>
      <div className="document">
        <iframe
        title="Output"
        height="100%"
        sandbox="allow-scripts"
        width="100%"
        frameBorder="0"
        />
      </div>
    </>
  )
}

export default App
