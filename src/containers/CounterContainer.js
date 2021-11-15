import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

// mapStateToProps와 mapDispatchToProps에서 반환하는 객체 내부의 값들은 컴포넌트의 props로 전달된다.
const mapStateToProps = state => ({ // state를 파라미터로 받아온다. (현재 store가 지니고 있는 상태)
    number : state.counter.number,
});
const mapDispatchToProps = dispatch => ({   // store 내장함수 dispatch를 받아온다.
    // 임시 함수
    increase : () => {
        dispatch(increase());
    },
    decrease : () => {
        dispatch(decrease());
    },
});

//connect 함수 내부에 익명 함수 형태로 선언해도 문제가 되지 않는다.
/* export default connect(
    state => ({
        number : state.counter.number,
    }),
    dispatch => ({
        increase : () => dispatch(increase()),
        decrease : () => dispatch(decrease()),
    }),
)(CounterContainer) */

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer);