import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {materialDark} from "react-syntax-highlighter/dist/esm/styles/prism";

const RenderResponse = ({data}) => {

    const syntaxHighlighterStyle = {
        ...materialDark,
        'pre[class*="language-"]': {
            fontSize: '12px',
        },
    };

    return (
        <div className='container_localStorage'>
            <SyntaxHighlighter language="json" style={syntaxHighlighterStyle}>
                {data}
            </SyntaxHighlighter>
        </div>
    );
};

export default RenderResponse;