
import { Fragment, useEffect } from "react";
import { Route } from 'react-router';
// import Header from './Header/Header';
import Footer from './Footer/Footer';
import Header from "./Header/Header";
// import HeaderDetail from './Header/HeaderDetail';

export const DetailTempalte = (props) => {
    const {Component,...restProps} = props;

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return <Route {...restProps} render={(propsRoute)=>{
        return <Fragment>
            {/* <HeaderDetail/> */}
            <Header/>
            <Component {...propsRoute} />
            <Footer />

        </Fragment>
    }}/>
}