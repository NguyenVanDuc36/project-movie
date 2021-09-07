import axios from "axios"
import { GROUPID } from "../utils/settings";
import { baseService } from "./baseService";

export class QuanLyRapService extends baseService { 

    constructor(){
        super();
    }
    LayThongTinLichChieuHeThongRap =()=>{
        return this.get(`http://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }


    layThongTinHeThongRap=()=>{
        return this.get(`http://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinHeThongRap`)
    }

}


export const qlRapService = new QuanLyRapService();
