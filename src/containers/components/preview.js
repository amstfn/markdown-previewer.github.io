import React from 'react';
import DOMPurify from "dompurify";
import { marked } from "marked";

const Preview = (props) => {

    const text = marked.parse(props.data);
    const wordIF = text.replace(/(\bif\b|\bfunction\b|\breturn\b)/g, '<span class="if-function-return">$1</span>');
    const wordFUNCTION = wordIF.replace(/(\w+(?=\(\w+(\)|\, \w+)))/g, '<span class="function">$1</span>');
    const combinations = wordFUNCTION.replace(/((\&{2}|\|{2}|\={2}))/g, '<span class="combinations">$1</span>');
    const sanitizedHtml = DOMPurify.sanitize(combinations);

    return (
        <div className="preview-container">
            <div className='head'>
                <span className='head-name'>Previewer</span>
            </div>
            <div id='preview' dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
        </div>
    );
}

export default Preview;