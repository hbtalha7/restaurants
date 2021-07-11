import { ITEM_DETAIL_FAIL, ITEM_DETAIL_REQUEST, ITEM_DETAIL_SUCCESS, ITEM_lIST_FAIL, ITEM_lIST_REQUEST, ITEM_lIST_SUCCESS } from "../constants/itemscontants"
import data from '../data'
export const listitems=()=> (dispatch)=>{
    dispatch({
        type: ITEM_lIST_REQUEST
    })
    try {
    const  items =data.items
    dispatch({
        type:ITEM_lIST_SUCCESS,
        payload:items
    })
    } catch (e) {
        dispatch({
            type:ITEM_lIST_FAIL,
            payload: e.message
        })
    }


}

export const detailsitem=(item_id)=> (dispatch)=>{
    dispatch({
        type:ITEM_DETAIL_REQUEST,payload:item_id
    })
    try {
        const item = data.items.find((x) => x.id === Number(item_id));
        dispatch({
            type:ITEM_DETAIL_SUCCESS,
            payload:item
        })
    } catch (e) {
        dispatch({ type:ITEM_DETAIL_FAIL,
        payload:e.Response && e.Response.data.message?
        e.Response.data.message:
        e.message
    })
    }
}