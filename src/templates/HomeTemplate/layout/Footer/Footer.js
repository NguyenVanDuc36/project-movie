import React from 'react'
import '../../../.././assets/styles/layout/Footer.scss'
import Contact from './../../../../pages/Contact/Contact';
import { useSelector } from 'react-redux';
import  _  from 'lodash';
export default function Footer(props) {

    const {heThongRap} = useSelector(state => state.HeThongRapReducer)
    
    const arrHeThongRap = _.map(heThongRap,(rap) =>
        _.pick(rap,['maHeThongRap','tenHeThongRap','logo'])
    );

    console.log(arrHeThongRap);

    return (
        <div className="footer" >
            <hr />
            <footer className="py-6 text-coolGray-900">
                <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
                    <div className="grid grid-cols-12">
                        <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                            <a href="#" className="flex justify-center space-x-3 md:justify-start">

                                <span className="self-center text-2xl font-semibold">
                                    <img src="./img/footer-logo.png" />
                                </span>
                            </a>
                        </div>
                        <div className="col-span-6 text-center md:text-left md:col-span-3">
                            <p className="pb-1 text-lg font-medium">Đối tác</p>
                            <div className="grid grid-cols-3">
                                {arrHeThongRap.map((htr,index)=>{
                                    return <div className="flex justify-center" key={index} >
                                        <a><img className="m-2" src={htr.logo} width={50} height={50} /></a>
                                            </div>
                                })}
                            </div>
                        </div>
                        <div className="col-span-6 text-center md:text-left md:col-span-3">
                            <p className="pb-1 text-lg font-medium">Mobile App</p>
                            <div class="wrapper">
                                <div class="icon youtube">
                                    <div class="tooltip">Apple</div>
                                    <span><i class="fab fa-apple"></i></span>
                                </div>
                                <div class="icon youtube">
                                    <div class="tooltip">Androi</div>
                                    <span><i class="fab fa-android"></i></span>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="grid justify-center pt-6  lg:justify-between">
                        <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                            <span>©2021 All rights reserved</span>
                            <a className="text-contact" href="#">
                                <span>Privacy policy</span>
                            </a>
                            <a className="text-contact" href="#">
                                <span>Terms of service</span>
                            </a>
                        </div>
                        <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                            <div class="wrapper">
                                <div class="icon facebook">
                                    <div class="tooltip">Facebook</div>
                                    <span><i class="fab  fa-facebook-f"></i></span>
                                </div>
                                <div class="icon twitter">
                                    <div class="tooltip">Twitter</div>
                                    <span><i class="fab fa-twitter"></i></span>
                                </div>
                                <div class="icon instagram">
                                    <div class="tooltip">Instagram</div>
                                    <span><i class="fab fa-instagram"></i></span>
                                </div>
                                <div class="icon youtube">
                                    <div class="tooltip">Youtube</div>
                                    <span><i class="fab fa-youtube"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
