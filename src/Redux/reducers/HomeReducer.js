import { LAYDANHSACHPHIM } from './../../utils/settings';

const stateDefault = {
    danhSachPhim : [],
}

export const danhSachPhimReducer = (state = stateDefault, action) =>{
        switch (action.type) {

            case LAYDANHSACHPHIM : {
                state.danhSachPhim = action.payload;
                return {...state}
            }


            default:
                return {...state};
        }
}