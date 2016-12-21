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
- 버튼 이벤트 : 순수 javascript
- CSS3 : transition, transform, opacity,,,등 사용해서 동적인 스타일링
- 반응형 웹
- 유연한 이미지

###진행해야 할 목록
- [ ] 포폴설명 콘텐츠 슬라이드다운, 슬라이드업 부드러운효과 : 자바스트립트로 구현 하고싶음
- [ ] 미디어 쿼리 사용해서 반응형 작업
- [ ] 투두리스트 디자인 입혀서 포폴에 추가

###진행하면서 어려운 문제 그리고 문제에 대한 해결 방법
####font
- 폰트는 어떻게 해야 유연하게 사용할수 있을까? : 미디어쿼리로 폰트사이즈 조절밖에 없나??
- 현재는 서브타이틀 IR기법 (image-replace) 사용함.

####유연한 이미지
- 콘텐츠 이미지 너비 %(퍼센트) 적용
- 또한 같은 라인에 있는 콘텐츠 이미지들이 같은 너비에 같은 높이로 설정해야한다면
    + 방법1. 이미지 파일의 너비 높이를 통일한다.
    + 방법2. 이미지 요소를 감싸는 부모를 만들고 부모에게 아래 같이 속성을 줌.
    ```
    .img-box{
        display: block;
        overflow: hidden;
        position: relative;
        width: 138px;
        height: 82px;
    }
    ```

####버튼 이벤트 : 슬라이드 다운, 슬라이드 업 부드러운 효과
- [내 코드](https://github.com/sseom/sseom.github.io/blob/master/js/all.js)
- 첫 번째로 구현한 방법
    + 오픈 버튼 클릭하면 콘텐츠가 display: block
    + 클로즈 버튼 클릭하면 display: none 방식으로 구현
    + [문제점] 콘텐츠가 부드럽게 나오게 하고 싶었는데 transition 효과 안나타남...

- 두번째 방법
    + [구글 검색 후 참고](http://jsfiddle.net/alistairjcbrown/wJTgA/)
    + JS   : 객체.className.replace() 를 사용해서 클래스네임을 찾아서 변경하는 방식.
    + HTML : 콘텐츠에 클래스 slide-up 추가 단, 클래스 작성 순서는 맨 마지막에 작성 
    + CSS  : slide-up, slide-down 클래스의 스타일 추가(transition, height, overflow)
    + 결국은 slide-up, slide-down 클래스를 추가 제거하는 방법인데 
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


- 세번째 방법
    + 어차피 클래스 추가. 제거 하는 방식이면,,,, 객체.className.replace()말고
    + 내가 아는 객체.classList.add() , 객체.classList.remove() 이용해서 해보기,,,,


###진행하면서 새롭게 알게된 점
- ...














