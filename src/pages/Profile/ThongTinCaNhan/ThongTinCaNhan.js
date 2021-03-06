import React from 'react'
import './ThongTinCaNhan.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { capNhatThongTinNguoiDungAction, layThongTinNguoiDungAction } from '../../../Redux/action/QuanLyNguoiDungAction';
import { QuanLyNguoiDungReducer } from './../../../Redux/reducers/QuanLyNguoiDungreducer';
import { Form, Input, Tabs, Button, Checkbox } from 'antd';
import { useFormik } from 'formik';
import { USER_LOGIN } from './../../../utils/settings';

const { TabPane } = Tabs;

function callback(key) {
    // console.log(key);
}



export default function ThongTinCaNhan() {
    let thongTinNguoiDung = useSelector(state => state.QuanLyNguoiDungReducer.thongTinNguoiDung);
    useEffect(() => {
        dispatch(layThongTinNguoiDungAction())
    }, [])
    const dispatch = useDispatch();
    const formik = useFormik({
        enableReinitialize: true,
        initialValues:{
            taiKhoan: thongTinNguoiDung?.taiKhoan,
            matKhau: thongTinNguoiDung.matKhau,
            email: thongTinNguoiDung.email,
            soDt: thongTinNguoiDung.soDT,
            maNhom: "GP03",
            hoTen: thongTinNguoiDung.hoTen,
            maLoaiNguoiDung:thongTinNguoiDung.loaiNguoiDung
        },
        onSubmit : (values)=>{
            console.log({values});
            dispatch(capNhatThongTinNguoiDungAction(values));
        }
    })
    
    const onFinish = (values: any) => {
        // console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        // console.log('Failed:', errorInfo);
    };

    return (
        <div className="profle">
            <div className="firt-section mt-10 container ">
                <div className="z-0 bg-banner-12 items-end rounded-md bg-cover" style={{ height: '400px', width: '90%', margin: '0 auto' }} >
                </div>
                <div className="text-center flex  justify-center" >
                    <img className="rounded-full bg-gray-400 text-center  z-10" style={{ border: '4px solid white', marginTop: '-185px', width: '15%' }} src="https://cdn-icons-png.flaticon.com/128/863/863782.png" />
                </div>
                <div style={{ borderBottom: '2px solid gray', width: '70%', margin: '0 auto' }} >
                    <h1 className="text-2xl font-semibold text-center" >{thongTinNguoiDung.hoTen} </h1>
                </div>

            </div>

            <div className="pt-20 mt-10" style={{ height: '700px', backgroundColor: '#e4e6eb' }} >
                <div className="bg-white   mt-10" style={{ boxShadow: '10px 10px 5px -6px rgba(196,187,187,0.75)', borderRadius: '10px', height: '500px', width: '80%', margin: '0 auto' }} >
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Th??ng tin ng?????i d??ng" key="1">
                            <div className="grid grid-cols-2 pt-10" style={{ width: '70%', margin: '0 auto' }}>
                                <div className="content" >
                                    <h1><i class="far i-item fa-user-circle"></i>T??i Kho???n : <span>{thongTinNguoiDung.taiKhoan}</span> </h1>
                                    <h1><i class="fas  i-item fa-at"></i>Email : <span>{thongTinNguoiDung.email}</span> </h1>
                                    <h1><i class="fas  i-item fa-phone-volume"></i>S??? ??i???n tho???i : <span>{thongTinNguoiDung.soDT}</span>  </h1>
                                </div>
                                <div>
                                    <h1><i class="fas  i-item fa-qrcode"></i>M?? nh??m : <span>{thongTinNguoiDung.maNhom}</span> </h1>
                                    <h1><i class="fas  i-item fa-file-signature"></i>H??? v?? t??n : <span>{thongTinNguoiDung.hoTen}</span>  </h1>
                                    <h1><i class="fas  i-item fa-user-edit"></i>Lo???i ng?????i d??ng : <span>{thongTinNguoiDung.maLoaiNguoiDung}</span>  </h1>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="C???p nh???t t??i kho???n" key="2">
                            <Form
                                onSubmitCapture={formik.handleSubmit}
                                name="basic"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                                className="mt-4"
                            >
                                <div className="grid gap-5 grid-cols-2" >
                                <Form.Item
                                    className="w-75"
                                    label="T??i kho???n"
                                    
                                    rules={[{ required: true, message: 'Please input your account!' }]}
                                >
                                    <Input disabled={true} value={formik.values.taiKhoan} name="taiKhoan"   onChange={formik.handleChange}/>
                                </Form.Item>

                                <Form.Item
                                
                                className="w-75"
                                    label="M???t kh???u"
                                    
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password value={formik.values.matKhau} name="matKhau"  onChange={formik.handleChange}/>
                                </Form.Item>
                                
                                <Form.Item
                                className="w-75"
                                    label="Email"
                                    
                                    rules={[{ required: true, message: 'Please input your email!' }]}
                                >
                                    <Input name="email" value={formik.values.email}  onChange={formik.handleChange} />
                                </Form.Item>
                                <Form.Item
                                className="w-75"
                                    label="S??? ??i???n tho???i"
                                    
                                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                                >
                                    <Input value={formik.values.soDt} onChange={formik.handleChange} name="soDt" />
                                </Form.Item>

                                <Form.Item
                               
                                className="w-75"
                                    label="M?? lo???i ng?????i d??ng"
                                
                                    rules={[{ required: true, message: 'Please input your type of user!' }]}
                                >
                                    <Input value={formik.values.maLoaiNguoiDung}  name="maLoaiNguoiDung"  onChange={formik.handleChange}/>
                                </Form.Item>

                                <Form.Item
                                className="w-75"
                                    label="H??? v?? t??n"
                                   
                                    rules={[{ required: true, message: 'Please input your full name!' }]}
                                >
                                    <Input value={formik.values.hoTen}   name="hoTen"  onChange={formik.handleChange}/>
                                </Form.Item>
                                </div>
                                
                                
                                <div className="flex justify-center">
                                    <button className="btn btn-outline-success" type="submit">C???p nh???t</button>
                                </div>
                                    
                            </Form>

                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
