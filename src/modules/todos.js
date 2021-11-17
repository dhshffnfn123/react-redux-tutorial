import { createAction } from "redux-actions";

// 액션 타입 정의하기
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 설정함
const INSERT = 'todos/INSERT'; // 새로운 todo 등록
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크 해제
const REMOVE = 'todos/REMOVE'; // todo를 삭제

// 액션 생성 함수
export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3; // insert가 호출될 때마다 1씩 더해진다.
export const insert = createAction(INSERT, text => ({
    id: id++,
    text,
    done: false,
}));

export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

// 초기 상태 및 리듀서 함수 만들기
const initialState = {
    input : '',
    todos : [
        {
            id : 1,
            text : '리덕스 기초 배우기',
            done : true
        },
        {
            id : 2,
            text : '리액트와 리덕스 사용하기',
            done : false
        }
    ]
};

function todos(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT :
            return {
                ...state,
                input : action.input
            };
        case INSERT : 
            return {
                ...state,
                todos : state.todos.concat(action.todo)
            };
        case TOGGLE : 
            return {
                ...state,
                todos : state.todos.map(todo => 
                    todo.id === action.id ? { ...todo, done : !todo.done } : todo
                )
            };
        case REMOVE : 
            return {
                ...state,
                todos : state.todos.filter(todo => todo.id === action.id)
            };
        default : 
        return state;
        }
    }

export default todos;