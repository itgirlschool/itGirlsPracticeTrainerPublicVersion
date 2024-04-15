import  './ResultCode.scss'
export default  function ResultCode  ({value}){
    return <div dangerouslySetInnerHTML={{ __html: value }} ></div>
}
