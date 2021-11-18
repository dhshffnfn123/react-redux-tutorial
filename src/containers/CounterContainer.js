import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    // useDispatch를 사용할 때는 위와 같이 useCallback과 함께 사용하는 것이 좋다

    return (
        <Counter
            number={number}
            onIncrease={() => dispatch(increase())}
            onDecrease={() => dispatch(decrease())}
        />
    );
};

export default CounterContainer;


