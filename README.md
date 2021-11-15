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
> redux-devtools-extension
___

## export 와 export default의 차이
> __export__ 는 여러 개를 보낼 수 있지만 __export default__ 는 단 한 개만 내보낼 수 있다. <br>
> + 불러오는 방식
>   + __export default =>__   import counter from './counter';
>   + __export =>__   import { increase, decrease } from './counter';
>   + __한꺼번에 불러오기 =>__   import counter, { increase, decrease } from './counter';
