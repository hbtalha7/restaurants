const  { ITEM_lIST_FAIL, ITEM_lIST_REQUEST, ITEM_lIST_SUCCESS, ITEM_DETAIL_FAIL, ITEM_DETAIL_SUCCESS, ITEM_DETAIL_REQUEST } =require("../constants/itemscontants")

export const itemlistReducer=(
    state={loading:true ,items:[]},
    action)=>{
        switch(action.type){
            case ITEM_lIST_REQUEST:
                return {loading:true}
            case ITEM_lIST_SUCCESS:
                return{loading:false ,items:action.payload}
            case ITEM_lIST_FAIL:
                return{loading:false,error: action.payload}
            default:
                return state
        }
    }

export const detailsitemReducer=(
    state={loading:true,item:{}},
    action)=>{
        switch(action.type){
            case ITEM_DETAIL_REQUEST:
                return {loading:true}
            case ITEM_DETAIL_SUCCESS:
                return{loading:false ,item:action.payload}
            case ITEM_DETAIL_FAIL:
                return{loading:false,error: action.payload}
            default:
                return state
        }
}