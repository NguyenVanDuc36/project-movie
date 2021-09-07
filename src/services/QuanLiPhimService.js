import axios from "axios"
import { GROUPID } from "../utils/settings";
import { baseService } from "./baseService";

export class QuanLyPhimService extends baseService { 


    layDanhSachBanner = () => {
        return this.get('http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner');
    }

    layDanhSachPhim = () =>{
        return this.get(`http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }
   

}


export const qlPhimService = new QuanLyPhimService();
