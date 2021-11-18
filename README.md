# ♋ 리덕스를 사용하여 리액트 애플리케이션 상태 관리
> 프로젝트 준비
>> 프레젠테이셔널 컴포넌트 작성
>>> 리덕스 관련 코드 작성
>>>> 컨테이너 컴포넌트 작성
>>>>> 더 편하게 사용하는 방법 알아보기
>>>>>> connect 대신 Hooks 사용하기
___
### Install
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

