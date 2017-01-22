# sseom.github.io

### SSEOM's BLOG
1. PROJECT : portfolio 모음
2. LEARNING : HTML, CSS, Javascript,,,,, 등등 학습 정리
3. OTHER : About Me??,,,

###Contact
E-mail : ysum1011@naver.com

---

##SSEOM's Blog 작업일지
 
###사용언어 및 툴
- HTML5, CSS, CSS3, Javascript

###사용기술
- 반응형 웹 (RWD) : 모바일, 태블릿, 데스크탑 3가지 버전 (데스크탑 기준)
- 웹브라우져 크게에 변화하는 유연한 이미지
- 버튼 이벤트 : 순수 javascript, 슬라이드다운, 슬라이드업 부드러운효과 내기
- About this portfolio 버튼 : 프로젝트 설명
- Job sheet 버튼 : 프로젝트 작업일지 연동
- CSS3 : transition, transform, opacity,,,등 사용해서 동적인 스타일링
- CSS3 속성 사용으로 크롬브라우져에 최적화

###진행해야 할 목록
- [x] 포폴설명 콘텐츠 슬라이드다운, 슬라이드업 부드러운효과 : 자바스트립트로 구현 하고싶음
- [x] 미디어 쿼리 사용해서 반응형 작업
- [x] 투두리스트 디자인 입혀서 포폴에 추가
- [x] 라망 작업일지 추가
- [ ] 학습정리 업로드
- [ ] About Me 추가
- [ ] 프로젝트 계속 추가...

---

###문제에 대한 해결 방법 (또는 더욱 효율적인 방법)
####1. font
- [ 문제점 ]
    + 폰트는 어떻게 해야 유연하게 사용할수 있을까? : 미디어쿼리로 폰트사이즈 조절밖에 없나??
- [ 해결방법 : 미해결 ]
    + 현재는 서브타이틀 IR기법 (image-replace) 사용함.

####2. 버튼 이벤트 : 슬라이드 다운, 슬라이드 업 부드러운 효과
- [ 문제점 ]
    + [내 코드](https://github.com/sseom/sseom.github.io/blob/master/js/all.js)
    + 콘텐츠가 그냥 나타나고 사라짐.. 난 제이쿼리에서 slideDown(), slideUp()과 같은 효과를  자바스크립트로 구현하고 싶다.
- [ 해결방법 ]
    + 첫 번째 방법
        * 오픈 버튼 클릭하면 콘텐츠가 display: block
        * 클로즈 버튼 클릭하면 display: none 방식으로 구현
        * [문제점] 콘텐츠가 부드럽게 나오게 하고 싶었는데 transition 효과 안나타남...

    + 두번째 방법
        * [구글 검색 후 참고](http://jsfiddle.net/alistairjcbrown/wJTgA/)
        * JS   : 객체.className.replace() 를 사용해서 클래스네임을 찾아서 변경하는 방식.
        * HTML : 콘텐츠에 클래스 slide-up 추가 단, 클래스 작성 순서는 맨 마지막에 작성 
        * CSS  : slide-up, slide-down 클래스의 스타일 추가(transition, height, overflow)
        * 결국은 slide-up, slide-down 클래스를 추가 제거하는 방법인데 
            * display: none, display: block 안쓰고 
            * 클래스를 붙여서 max-height 값을 조정
        ```
        // ----------------------- HTML ------------------------
        <div class="about_content slide-up"> ... </div>
        <div class="about_content two_right slide-up"> ... </div>

        // ----------------------- CSS ------------------------
        .slide-up, .slide-down {
          max-height: 0;
          overflow-y: hidden;
          transition: max-height 0.5s ease-in-out;
        }
        .slide-down {
           max-height: 500px; 
        }
      
        // ----------------------- JS ------------------------
        
        // 대상선택 하고 버튼들 반복 순환해서 이벤트 설정 
        // 이벤트 발생시 함수 실행 
        // ==> 자세한건 블러그 코드 참고

        // 클래스 토글 함수
        // 인자 index는 클릭한 대상의 자신의 인덱스 값
          function classToggle(index){
            // 슬라이드 다운, 업 클래스 변수
            var remove_class    = "slide-down";
            var add_class       = "slide-up";

            // 해당 포폴소개 콘텐츠의 클래스 네임값
            // .replace() ==> 줄바꿈, 탭문자, 리턴문자 모두 찹아서 없애라 비워. 공백으로..
            var element_classes = ( about_content[index].className ).replace(/[\n\t\r]/g, " ");

            // 상태변수
            // slide-down이 있으면 트루 slide-down이 없으면 펄스 즉, 다운이 있냐 없냐의 유무  
            var is_showing = element_classes.indexOf(remove_class) > -1;

            // is_showing 이 flase 라면 즉, slide-down 클래스가 없으면
            if ( ! is_showing) {
                // 변수값 전환
                remove_class = [add_class, add_class = remove_class][0];
            }

            // 이전클래스를 제거하고 새로운 클래스 추가
            about_content[index].className = (element_classes.replace(remove_class, "") + add_class ).trim();

            // console.log(add_class);
            // console.log(remove_class);
            //==> add_class, remove_class 변수의 값은 서로가 계속 바뀜
          }

        })(this);
        ```


    + 세번째 방법
        * 객체.classList.add() , 객체.classList.remove() 이용
        * [ 문제점 ] 익스플로어에서는 지원되지 않는다. 최신버전에서도...
        ```
          // 슬라이드 클래스
          function slideClass(content, idx) {
            // 다운클래스가 있다면
            // 다운클래스를 삭제 remove 슬라이드업
            // 없다면 추가 add 슬라이드다운
            var is = content[idx].classList.contains('slide-down');
            if( !is ){
              content[idx].classList.add('slide-down');
            }else{
              content[idx].classList.remove('slide-down');
            }
          }

        ```


####3. list 요소
- [ 문제점 ]
    + 난 li 요소를 가로로 나열하고 맨 첫 li에만 리스트 스타일 타입을 사용하고 싶음.
    + li 요소에 display: inline , inline-block 가로로 나열하니 리스트 스타일 타입이 사라진다. ㅜㅜ
- [ 해결방법 ]
    + li 요소에 background-image를 사용해서 블릿 아이콘을 넣는다.
    + 또는 li 요소에 float: left 사용해서 나열하는 방법.. ==> 여기선 난 이방법을 사용
        * 왜? 바로 다음에 있는 리스트 콘텐츠는 list-style 디폴트값을 사용했는데 따로 background-image를 주기엔 스타일이(크기, 모양 등) 달라서 이렇게 해봤음.
```
.list li{
  float: left;
  list-style: none;
}
.list > li:first-child{
  list-style-type: disc;
}

```












