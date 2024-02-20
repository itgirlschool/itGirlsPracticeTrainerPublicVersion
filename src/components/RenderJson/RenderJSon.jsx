import React, {useEffect, useState} from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {getAllLocalStorageData} from "../../common/getLocalstorageData.js";
import './RenderJson.scss'
import {addDefaultLocalStorageTask} from "../../taskValidation/week_18/funcDefaultaddLocalStorage.js";

const JSONViewer = ({validationObject,taskId,id}) => {
    const [localStorageData, setLocalStorageData] = useState({});
    useEffect(() => {
        addDefaultLocalStorageTask(id,taskId)
        setLocalStorageData(getAllLocalStorageData());
    },[validationObject,taskId]);

    const syntaxHighlighterStyle = {
        ...materialDark,
        'pre[class*="language-"]': {
            fontSize: '12px',
        },
    };


    return (
        <div className='container_localStorage'>
            <SyntaxHighlighter language="json" style={syntaxHighlighterStyle}>
                {JSON.stringify(localStorageData, null, 2)}
            </SyntaxHighlighter>
        </div>
    );
};

export default JSONViewer;
