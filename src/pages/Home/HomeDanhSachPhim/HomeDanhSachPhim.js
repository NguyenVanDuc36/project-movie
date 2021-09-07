import React from 'react'
import { Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import PhimDangChieu from './../../../Components/RSlick/PhimDangChieu';
import PhimSapChieu from './../../../Components/RSlick/PhimSapChieu';


export default function HomeDanhSachPhim(props) {
    const { TabPane } = Tabs;
    function callback(key) {
      console.log(key);
    }
    
    return (
        <div className="mt-5" >
            <div className="container" >
            <Tabs onChange={callback} type="card">
    <TabPane tab={<button class="custom-btn btn-6"><span>Phim đang chiếu</span></button> } key="1">
      <PhimDangChieu/>
    </TabPane>
    <TabPane tab={<button class="custom-btn btn-6"><span>Phim sắp chiếu</span></button> } key="2">
      <PhimSapChieu/>
    </TabPane>
  </Tabs>
            </div>
        </div>
    )
}
{/* <button class="custom-btn btn-6"><span>Phim sắp chie</span></button> */}