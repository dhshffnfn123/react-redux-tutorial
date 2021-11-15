import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;

// 이름을 index로 하면 디렉터리 이름까지만 입력하여 불러올 수 있다.