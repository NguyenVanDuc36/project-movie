
import { Fragment } from "react";
import { Route } from 'react-router';
import Header from "./layout/Header/Header";
import Footer from './layout/Footer/Footer';
import HomeCourasel from "./layout/HomeCourasel/HomeCourasel";
export const HomeTempalte = (props) => {
    const {Component,...restProps} = props;


    return <Route {...restProps} render={(propsRoute)=>{
        return <Fragment>
            <Header/>
            <HomeCourasel/>
            <Component {...propsRoute} />
            <Footer/>

        </Fragment>
    }}/>
}