import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};


// connect 함수 내부에 익명 함수 형태로 선언해도 문제가 되지 않는다.
// mapDispatchToProps에 해당하는 파라미터를 함수 형태가 아닌 액션 생성 함수로 이루어진 객체 형태로 넣어주어도 된다.
export default connect(
    state => ({
        number : state.counter.number,
    }),
    {
        increase,
        decrease,
    },
)(CounterContainer);
// 위와 같이 두 번째 파라미터를 아예 객체 형태로 넣어 주면 connect 함수가 내부적으로 bindActionCreators 작업을 대신 해준다.
    
    
/* export default connect(
    state => ({
        number : state.counter.number,
    }),
    dispatch => 
    bindActionCreators(
        {
            increase,
            decrease,
        },
        dispatch,
    ),
    )(CounterContainer);
    
    
     */