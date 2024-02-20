import React, {useEffect} from 'react';
import Spinner from "../Spinner/Spinner.jsx";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { atomone } from '@uiw/codemirror-theme-atomone';
import {EditorView} from "@codemirror/view"
import './MirrorCode.scss'

function MirrorCode({value,setValue}) {
    const onChange = React.useCallback((val, viewUpdate) => {
        setValue(val);
    }, []);
    if(!value && !(value ==='')){
        return <Spinner color={'white'} />
    }
    const fixedHeightEditor = EditorView.theme({
        "&": {height: "300px"},
        ".cm-scroller": {"white-space":"pre-wrap"}
    })
    return <CodeMirror theme={atomone} value={value}  extensions={[javascript({ jsx: false }),EditorView.lineWrapping]} onChange={onChange}/>;
}
export default MirrorCode;
