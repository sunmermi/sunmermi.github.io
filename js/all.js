/**
 * -------------------------------------
 * 버튼 이벤트 : 슬라이드 다운, 슬라이드 업 부드러운 효과
 * -------------------------------------
 */

/**
 * -------------------------------------
 * - 첫 번째로 구현한 방법은
    + 오픈 버튼 클릭하면 콘텐츠가 display: block
    + 클로즈 버튼 클릭하면 display: none 방식으로 구현
    + [문제점] 콘텐츠가 부드럽게 나오게 하고 싶었는데 transition 효과 안나타남...
 * -------------------------------------
 */
// (function(global){
//   'use strict';
//   var about_btns = document.querySelectorAll('.about_btn'),
//       about_btns_length = about_btns.length,
//       about_content,
//       about_close_btn = document.querySelectorAll('.about_close_btn');

// //순환
// for(var i =0; i < about_btns_length; i++){
//   about_btns[i].onclick= function(){
//     about_content = this.nextElementSibling;
//     about_content.style.display = 'block';
//     return false;
//   };
//   about_close_btn[i].onclick = function(){
//     about_content = this.parentElement;
//     console.log(about_content);
//     about_content.style.display = 'none';
//   };

// }

// })(this);

// -----------------------------------------------------------------------

/**
 * -------------------------------------
 * 두번째 방법
    + [구글 검색 후 참고](http://jsfiddle.net/alistairjcbrown/wJTgA/)
    + JS   : 객체.className.replace() 를 사용해서 클래스네임을 찾아서 변경하는 방식.
    + HTML : 콘텐츠에 클래스 slide-up 추가 단, 클래스 작성 순서는 맨 마지막에 작성 
    + CSS  : slide-up, slide-down 클래스의 스타일 추가(transition, height, overflow)
    + 결국은 slide-up, slide-down 클래스를 추가 제거하는 방법인데 
        * display: none, display: block 안쓰고 
        * 클래스를 붙여서 max-height 값을 조정
 * -------------------------------------
 */

(function(global) {
  "use strict";
  // 대상선택
  var about_content  = document.querySelectorAll(".about_content");
  var about_btns  = document.querySelectorAll('.about_btn');
  var about_btns_length = about_btns.length;
  var about_close_btn = document.querySelectorAll('.about_close_btn');

  //반복 순환 : 어바웃버튼, 콘텐츠, 클로즈 버튼 모두 여러개니까...
  for(var i =0; i < about_btns_length; i++){

    //어바웃 버튼
    var about_btn = about_btns[i];
    about_btn.num = i;
    about_btn.onclick = function(){
      // console.log(this);
      // console.log(this.num);
      classToggle(this.num);
      return false;
    };

    //클로즈 버튼
    var about_close = about_close_btn[i];
    about_close.num = i;
    about_close.onclick = function(){
      classToggle(this.num);
      return false;
    };

    //라망 작업일지 버튼 비활성화
    // var job_btn=document.querySelectorAll('.job_btn');
    // job_btn[0].onclick = function(){
    //   alert('La-main 작업일지는 아직 업로드 되지 않았습니다.');
    //   return false;
    // };
  }


  // 클래스 투글 함수
  // 인자 index는 클릭한 대상의 자신의 인덱스 값
  function classToggle(index){
    // 슬라이드 다운, 업 클래스 변수
    var remove_class    = "slide-down";
    var add_class       = "slide-up";

    // 객체.className ==> 해당 포폴소개 콘텐츠의 클래스 네임값
    // .replace() ==> 줄바꿈, 탭문자, 리턴문자 모두 찹아서 없애라 비워. 공백으로..
    var element_classes = ( about_content[index].className ).replace(/[\n\t\r]/g, " ");
    // console.log(element_classes);
    //=> 포폴소개 콘텐츠의 클래스 네임값이 할당됨.

    // 상태변수
    // 포폴소개 콘텐츠에 slide-down의 인덱스값이 즉, 9인데,, -1 보다 크면 트루
    // 즉, slide-down이 있으면 트루 slide-down이 없으면 펄스
    // 그냥 다운이 있냐 없냐의 유무  
    var is_showing      = element_classes.indexOf(remove_class) > -1;
    // console.log(is_showing);

    // is_showing 이 flase 라면 즉, slide-down 클래스가 없으면
    if ( ! is_showing) {
        // 변수값 전환
        // 리무브에 slide-up 클래스를 할당해라.
        remove_class = [add_class, add_class = remove_class][0];
    }

    // 이전클래스를 제거하고 새로운 클래스 추가
    // about_content[index] ==> 클릭한 버튼에 해당되는 포폴소개 콘텐츠
    // 콘텐츠의 클래스네임 remove_class 를 지우고 
    // add_class 클래스를 추가 해
    // trim() 은 단어의 앞,뒤 공백 없애줌
    about_content[index].className = (element_classes.replace(remove_class, "") + add_class ).trim();
    // console.log(add_class);
    // console.log(remove_class);
    //==> add_class, remove_class 변수의 값은 서로가 계속 바뀜
  }

})(this);


/**
 * -------------------------------------
 * - 세번째 방법
    + 어차피 클래스 추가. 제거 하는 방식이면,,,, 객체.className.replace()말고
    + 내가 아는 객체.classList.add() , 객체.classList.remove() 이용해서 해보기,,,,
 * -------------------------------------
 */

