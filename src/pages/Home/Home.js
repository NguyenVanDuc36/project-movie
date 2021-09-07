import HomeMenu from './HomeMenu/HomeMenu'
import '../../assets/styles/layout/Home.scss'
import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachPhimAction } from '../../Redux/action/QuanLiPhimAction';
import Film from '../../Components/Film/Film';
import HomeDanhSachPhim from './HomeDanhSachPhim/HomeDanhSachPhim';
import { layThongTinLichChieuHeThongRapAction } from './../../Redux/action/QuanLiRapAction';

export default function Home() {


    const danhSachPhim = useSelector(state => state.danhSachPhimReducer.danhSachPhim);
    const heThongRapChieu = useSelector(state => state.HeThongRapReducer.heThongRap);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(layDanhSachPhimAction());
        dispatch(layThongTinLichChieuHeThongRapAction());
    }, [])

    const renderPhim = () => {
        return danhSachPhim.map((phim, index) => {
            return <Film key={index} />
        })
    }

    return (
        <div className="home body-font "  >
            
        <HomeDanhSachPhim/>




            <div style={{width:'940px',margin:'0 auto'}} >
                <HomeMenu heThongRapChieu={heThongRapChieu} />
            </div>

            <div style={{ height: '500px', backgroundAttachment: 'fixed', backgroundImage: 'url(./img/banner-8.jpg)' }} className="container m-0 row avenger bg-cover" >
                <div className="col-6 flex items-center" >
                    <div className="text-white"  >
                        <h1 style={{ color: 'white', fontSize: '45px', fontWeight: '500' }} >Avengers: Endgame</h1>
                        <div>
                            <i className="fas mr-3  fa-star" style={{ color: '#e41a1a', fontSize: '20px' }} />
                            <i className="fas mr-3  fa-star" style={{ color: '#e41a1a', fontSize: '20px' }} />
                            <i className="fas mr-3  fa-star" style={{ color: '#e41a1a', fontSize: '20px' }} />
                            <i className="fas mr-3  fa-star" style={{ color: '#e41a1a', fontSize: '20px' }} />
                            <i className="fas mr-3  fa-star" style={{ color: '#e41a1a', fontSize: '20px' }} />
                        </div><br />
                        <p>Rating 9.6 ((lmdb)</p>
                        <p>Time 2h 50 min</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <button className="btn button px-4 text-light mr-5" >Watch</button>
                        <button className="btn btn-outline-light" ><i className="fas fa-plus" /> Add to watchlist</button>
                    </div>
                </div>
                <div className="col-6 play flex items-center " >
                    <img src="./img/banner-9.jpg" width="600px" className="object-cover relative" />
                    <a href="https://www.youtube.com/embed/TcMBFSGVi1c" className="video-popup" ><i style={{ borderRadius: '50%', height: '80px', width: '80px', fontSize: '30px', lineHeight: '80px', backgroundColor: '#e41a1a', left: '45%' }} className="fas text-center w-14 text-white fa-play absolute " /></a>
                </div>

            </div>


        </div>
    )
}

