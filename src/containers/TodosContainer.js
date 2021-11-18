import React, { useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from "../components/Todos";
import useActions from "../lib/useActions";

const TodosContainer = () => {
    const { input, todos } = useSelector(({ todos }) => ({
        input: todos.input,
        todos: todos.todos
    }));
    const [onChangeInput, onInsert, onToggle, onRemove] = useActions(   // 액션생성 함수 배열
        [changeInput, insert, toggle, remove], // deps 배열 => 이 원소가 바뀌면 액션을 디스패치(실행) 함
        []
    );

    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );
};

export default React.memo(TodosContainer);

