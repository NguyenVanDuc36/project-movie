import { Fragment } from "react";
import { Route } from 'react-router';
import Header from './layout/Header/Header';
import HomeCourasel from './layout/HomeCourasel/HomeCourasel';

export const HomeTempalte = (props) => {
    const {Component,...restProps} = props;
    return <Route {...restProps} render={(propsRoute)=>{
        return <Fragment>
            <Header {...propsRoute}/>
            <HomeCourasel {...propsRoute}/>
            <Component {...propsRoute} />
        </Fragment>
    }}/>
}