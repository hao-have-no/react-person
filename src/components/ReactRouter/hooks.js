import React,{useContext} from 'react';
import {RouterContext} from "./Context";

//使用历史记录
export function useHistory() {
    return useContext(RouterContext).history;
}


export function useLocation(){
    return useContext(RouterContext).locations;
}

export function useParams(){
    const match = useContext(RouterContext).match;
    return match ? match.params : {}
}

export function useRouteMatch(){
    return useContext(RouterContext).match;
}

