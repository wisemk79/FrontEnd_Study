# JQuery

* 상식
window는 인터넷 창 전체를 의미하고
document는 인터넷 화면을 뿌려주는 부분을 의미한다.

* 기본 문법
````
$(selector).action() // $사이에 selector를 넣은다음 action을 지정해준다

//example
$(this).hide() //현재의 element가 사라지게됨
$("p").hide() //를 하게되면 p태그(<p>)가 사라지게된다.
$(".test").hide() //test라는 클래스이름을 지정한 태그가 사라지게된다. 
$("#test").hide() //test라는 아이디가 test인 태그가 사라지게된다.
````

* document ready event
````
$(document).ready(function(){//이렇게 ready를 만들면 제이쿼리 문법을 사용할 수 있도록해준다.
    안쪽에 제이쿼리 함수를 사용
})
````