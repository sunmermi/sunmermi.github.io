(function(global){
  'use strict';
  var about_btns = document.querySelectorAll('.about_btn'),
      about_btns_length = about_btns.length,
      about_content,
      about_close_btn = document.querySelectorAll('.about_close_btn');

//순환
for(var i =0; i < about_btns_length; i++){
  about_btns[i].onclick= function(){
    about_content = this.nextElementSibling;
    about_content.style.display = 'block';
    return false;
  };
  about_close_btn[i].onclick = function(){
    about_content = this.parentElement;
    console.log(about_content);
    about_content.style.display = 'none';
  };

}

})(this);
