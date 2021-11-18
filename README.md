# ♋ 리덕스를 사용하여 리액트 애플리케이션 상태 관리
> 프로젝트 준비
>> 프레젠테이셔널 컴포넌트 작성
>>> 리덕스 관련 코드 작성
>>>> 컨테이너 컴포넌트 작성
>>>>> 더 편하게 사용하는 방법 알아보기
>>>>>> connect 대신 Hooks 사용하기
___
### 🛠 Install
> redux react-redux<br>
> redux-devtools-extension<br>
> immer
___

## export 와 export default의 차이
> __export__ 는 여러 개를 보낼 수 있지만 __export default__ 는 단 한 개만 내보낼 수 있다. <br>
> + 불러오는 방식
>   + __export default =>__   import counter from './counter';
>   + __export =>__   import { increase, decrease } from './counter';
>   + __한꺼번에 불러오기 =>__   import counter, { increase, decrease } from './counter';

## Connect 함수 
> + __connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)__
>   + __mapStateToProps :__ 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
>   + __mapDispatchToProps :__ 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
> - connect 함수를 호출하고 나면 또 다른 함수를 반환한다.
> - 반환된 함수에 컴포넌트를 파라미터로 넣어주면 리덕스와 연동된 컴포넌트가 만들어진다.

## useSelector
> + useSelector Hook을 이용하면 connect 함수를 사용하지 않고도 리덕스의 상태를 조회할 수 있다.
> - 사용법 : const 결과 = useSelector(상태 선택 함수);
>   - 위의 __상태 선택 함수__ 는 mapStateToProps와 형태가 같다. 

## useDispatch
> + 이 Hook은 컴포넌트 내부에서 스토어의 내장 함수 dispatch를 사용할 수 있게 해준다.
> - 사용법 : const dispatch = useDispatch();
>   - dispatch({ type: 'SAMPLE_ACTION' });
> * useDispatch를 사용할 때는 컴포넌트 성능 최적화를 위해 useCallback을 함께 사용하는 것이 좋다.

## useStore
> + useStore Hooks를 사용하면 컴포넌트 내부에서 리덕스 스토어 객체를 직접 사용할 수 있다.
> - 사용법 : const store = useStore();
>   - store.dispatch({ type : 'SAMPLE_ACTION });
>   - store.getState();

## useActions
> + react-redux에 릴리즈 될 계획이었으나 개발팀에서 필요없다고 생각하여 제외된 Hook.
> - 액션 생성 함수를 액션을 디스패치하는 함수로 변환해준다.
> * 두 가지 파라미터가 필요하다. 첫 번째는 액션생성함수로 이루어진 배열, 두 번째는 deps 배열이다.
>   * deps 배열 안에 들어 있는 원소가 바뀌면 액션을 디스패치하는 함수를 새로 만들게 된다.

## ⚠ connect와 함수의 주요 차이점
> + connect 함수를 사용하여 컨테이너 컴포넌트를 만들었을 경우, 해당 컴포넌트의 부모 컴포넌트가 리렌더링될 때 해당 컨테이너 컴포넌트의 props가 바뀌지 않았다면 리렌더링이 자동으로 방지되어 성능이 최적화 된다. <br>
> - useSelector를 사용하여 리덕스 상태를 조회했을 때는 최적화 작업이 자동으로 이루어지지 않으므로, 성능 최적화를 위해서는 __React.memo__ 를 컨테이너 컴포넌트에 사용해 주어야 한다.
