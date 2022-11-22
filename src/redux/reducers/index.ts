import charaReducer from "./chara.reducer"

import { combineReducers } from "redux"

const reducers = combineReducers({
    chara : charaReducer,
})

export default reducers