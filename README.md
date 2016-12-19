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


###진행하면서 새롭게 알게된 점
- ...