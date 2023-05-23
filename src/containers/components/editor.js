import React, { useState } from 'react';
import Preview from './preview';

const Editor = () => {

    const [text, setText] = useState('# Marked in the browser\n\nRendered by **marked**.');

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <div className="editor-container">
                <div className='head'>
                    <span className='head-name'>Editor</span>
                </div>
                <textarea
                    id='editor'
                    onChange={handleOnChange}
                >
                    {text}
                </textarea>
            </div>
            <Preview data={text} />
        </div>
    );
}

export default Editor;