export const showMore = function () {  
  $("#more").on("click", function (event) {
    event.preventDefault();    
    $(".works__more").show();
    $(this).hide();    
  }); 
  
  $(window).on('scroll',function() {
    const el = $('#imgWorks');
    parallaxScroll(el);
    //changeBg(el);
  });
 
  function parallaxScroll(el) {
    let $scrolled = $('html, body').scrollTop();
    let elementOffset = el.offset().top; 
    let height = $(window).height(); 
    let distance = elementOffset - $scrolled;   
    
    if (distance < height && distance > 0) {      
      let shift = 0-($scrolled*.1);
      el.css('transform', 'translateX(' + shift + 'px)');
    }    
  }

  function changeBg(el) {
    const imgWidth = el.width();
    let $imgBgWidth = $('.imgWrapper').width();
    let $scrolled = $('html, body').scrollTop();
    let elementOffset = el.offset().top; 
    let height = $(window).height(); 
    let distance = elementOffset - $scrolled;   
    
    if (distance + 100 < height && distance > 0) {      
      let shift = 0-($scrolled*1) + imgWidth;       //.05
      let w = -shift + 'px';
      //let w = -shift * imgWidth/100 + 'px';
      // console.log('$scrolled', $scrolled);
      // console.log('shift', shift);
      //console.log('%', $scrolled/$imgBgWidth*5);
      //console.log('width', w);
      $('.imgWrapper').css('width', w);
    }   
  }
}