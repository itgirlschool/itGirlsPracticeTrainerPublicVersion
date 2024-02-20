import {DownOutlined, SmileOutlined} from '@ant-design/icons';
import {Dropdown, Space} from 'antd';

function Select({items, content}) {

  return(
      <>

          <Dropdown menu={{items}}>
              <a onClick={(e) => e.preventDefault()}>
                  <Space>
                      {content}
                  </Space>
              </a>
          </Dropdown>
      </>
  )
}
export default Select
