import {Spin} from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import './Spinner.scss'
const Spinner = ({color}) => {
    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 45,
                color: color,
            }}
            spin
        />
    );
    return (
        <div className='container_spinner' >
        <Spin
            tip={<span style={{
                    fontWeight: "bolder",
                    fontSize: 25,
                    color: `${color}`,
                    display:'block',
                    marginLeft:-40,
                    marginTop:20
                }}>Loading...</span>
            }
            indicator={antIcon}
            size="large"
            style={{
                marginTop: '50px'
            }}
        >
            <div className="content" />
        </Spin>
        </div>
    )
}
export  default Spinner;