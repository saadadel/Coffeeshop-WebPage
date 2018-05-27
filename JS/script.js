
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
      if(scroll <= 500){
          $(".navbar").css("background" , "transparent");
          $(".hm").css("border-bottom", "solid #2DC997");
          $(".srv").css("border-bottom-color", "transparent");
          $(".prt").css("border-bottom-color", "transparent");
          $(".abt").css("border-bottom-color", "transparent");
          $(".tm").css("border-bottom-color", "transparent");
        $(".cnt").css("border-bottom-color", "transparent");
          
      }
	  else if (scroll > 500 && scroll < 1200) {
	    $(".navbar").css("background" , "black");
        $(".srv").css("border-bottom", "solid #2DC997");
        $(".hm").css("border-bottom-color", "transparent");
        $(".prt").css("border-bottom-color", "transparent");
        $(".abt").css("border-bottom-color", "transparent");
          $(".tm").css("border-bottom-color", "transparent");
        $(".cnt").css("border-bottom-color", "transparent");
	  }
      else if(scroll >= 1200 && scroll < 1800){
        $(".navbar").css("background" , "black");
        $(".prt").css("border-bottom", "solid #2DC997");
        $(".hm").css("border-bottom-color", "transparent");
        $(".srv").css("border-bottom-color", "transparent");
        $(".abt").css("border-bottom-color", "transparent");
        $(".tm").css("border-bottom-color", "transparent");
        $(".cnt").css("border-bottom-color", "transparent");
      }
      else if(scroll >= 1800 && scroll < 2400){
        $(".navbar").css("background" , "black");
        $(".prt").css("border-bottom", "solid #2DC997");
        $(".hm").css("border-bottom-color", "transparent");
        $(".srv").css("border-bottom-color", "transparent");
        $(".abt").css("border-bottom-color", "transparent");
          $(".tm").css("border-bottom-color", "transparent");
        $(".cnt").css("border-bottom-color", "transparent");
      }
      else if(scroll >= 2400 && scroll < 3600){
        $(".navbar").css("background" , "black");
        $(".abt").css("border-bottom", "solid #2DC997");
        $(".hm").css("border-bottom-color", "transparent");
        $(".srv").css("border-bottom-color", "transparent");
        $(".prt").css("border-bottom-color", "transparent");
        $(".tm").css("border-bottom-color", "transparent");
        $(".cnt").css("border-bottom-color", "transparent");
      }
      else if(scroll >= 3600 && scroll < 4400){
        $(".navbar").css("background" , "black");
        $(".tm").css("border-bottom", "solid #2DC997");
        $(".hm").css("border-bottom-color", "transparent");
        $(".srv").css("border-bottom-color", "transparent");
        $(".prt").css("border-bottom-color", "transparent");
        $(".abt").css("border-bottom-color", "transparent");
          $(".cnt").css("border-bottom-color", "transparent");
      }
      else if(scroll > 4400){
        $(".navbar").css("background" , "black");
        $(".cnt").css("border-bottom", "solid #2DC997");
        $(".hm").css("border-bottom-color", "transparent");
        $(".srv").css("border-bottom-color", "transparent");
        $(".prt").css("border-bottom-color", "transparent");
        $(".abt").css("border-bottom-color", "transparent");
          $(".tm").css("border-bottom-color", "transparent");
      }
      

  });
   

});


