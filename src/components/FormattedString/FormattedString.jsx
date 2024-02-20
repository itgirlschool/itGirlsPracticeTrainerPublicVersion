import React from "react";

const FormattedString = ({string}) => {
    const formattedString = string.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));
    return (
        <p>
            {formattedString}
        </p>
    );
}
export {FormattedString};

const FormattedHtml = ({ jsonString }) => {
    const lines = jsonString.split('\n');
    return (
        <div style={{ whiteSpace: 'pre-wrap' }}>
            {lines.map((line, index) => (
                <div key={index} style={{ marginLeft: calculateIndentation(line) }}>
                    {line}
                </div>
            ))}
        </div>
    );
};
export {FormattedHtml};

const calculateIndentation = (line) => {
    const match = line.match(/^\s*/);
    return match ? `${match[0].length * 8}px` : '0px';
};

const FormattedStringArray = ({array}) => {
    const formattedString = array.map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));
    return (
        <p>
            {formattedString}
        </p>
    );
}
export {FormattedStringArray};
