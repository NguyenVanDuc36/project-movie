import axios from "axios";
import { qlRapService } from "../../services/QuanLiRapService";
import { LAYDANHSACHRAP } from "../../utils/settings";
export const layThongTinLichChieuHeThongRapAction = () => {

    return async (dispatch,getState) => {

        try {
            const result = await qlRapService.LayThongTinLichChieuHeThongRap();
            await dispatch({
                type:LAYDANHSACHRAP,
                payload:result.data.content
            })       
        }catch(errors) {
            console.log(errors.response?.data);
        }

    }

}

