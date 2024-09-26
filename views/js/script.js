$(document).ready(function(){
    $('.dropdown').click(function(){  
      $(this).siblings('.sub-dropdown').slideToggle("5000");
        
        $(this).parent("li").siblings("li").children(".sub-dropdown").slideUp("fast");
        
      });


      $('.menu-icon').click(function(){

        console.log('click....');

        $('.side-area').toggleClass("collapse");
        $('.main-area').toggleClass("collapse");
        $('.main-header').toggleClass("collapse");
      })
      
});

$(document).ready(function() {

  {
    var counterElement = document.getElementById("counter");
    var currentValue = parseInt(counterElement.textContent);
    counterElement.textContent = currentValue + 1;
}
});