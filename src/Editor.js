import React from 'react'
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"
import "codemirror/mode/xml/xml"
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/css/css"
import {Controlled as ControlledEditor} from "react-codemirror2"
function Editor({title,language,value,onChange}) {
    function handlechange(editor,data,value){
        onChange(value)
    }
    return (
        <div className="editor__window" >
            <div className="editor__header">
                {title}
                <button>Open/Close</button>
            </div>
            <ControlledEditor
            onBeforeChange={handlechange}
            value={value}
            className="codemirror__wrapper"
            options={
            {    lineWrapping:true,
                 lineNumbers:true,
                 theme:"material",
                lint:true,
                mode:language
            }

            }

            />
            
        </div>
    )
}

export default Editor
