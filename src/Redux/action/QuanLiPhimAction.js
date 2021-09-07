import axios from "axios";
import { qlPhimService } from "../../services/QuanLiPhimService";
import { LAYDANHSACHPHIM } from './../../utils/settings';

export const layDanhSachBannerAction = () => {

    return async (dispatch,getState) => {

        try {
            const result = await qlPhimService.layDanhSachBanner();
            await dispatch({
                type:'LAY_DANH_SACH_BANNER',
                payload:result.data.content
            })       
        }catch(errors) {
            console.log(errors.response?.data);
        }

    }

}

export const layDanhSachPhimAction = () =>{
    return async (dispatch,getState) =>{

        try {
            const result = await qlPhimService.layDanhSachPhim();
            await dispatch({
                type:LAYDANHSACHPHIM,
                payload:result.data.content
            })       
        } catch (error) {
            console.log({error});
        }

    }
}