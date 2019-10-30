export const translate = function () { 
  
  let sticky = function() {    
    const obj = $('.stickyBlock');
    let topOffset = obj.offset().top - 100;
    let heightSection = $('.services').height() - $('.stickyBlock').height();

    $(window).scroll(function() {
      let scrollTop = $(window).scrollTop();
      
      if (scrollTop >= topOffset) {   
        obj.css({
          top: 100,
          position: 'fixed'
        });
      }
  
      if (scrollTop < topOffset) {      
        obj.css({
          top: 0,
          position: 'relative',
        });        
      }
      
      if (scrollTop + 100 > (topOffset + heightSection)) {             
        obj.css({
          top: '',
          bottom: 0,
          position: 'absolute',
        });
      }    
    })
  }  
  
  let animation = function () {
    $(window).on('scroll',function() {
      const el = $('.works__img');        
      scrollImg(el);        
    });
    
    function scrollImg(el) {
      let $scrolled = $('html, body').scrollTop();
      let elementOffset = el.offset().top; 
      let height = $(window).height(); 
      let distance = elementOffset - $scrolled;      
      
      if (distance < height) {      
        let shift = distance * .5;
        el.css('transform', 'translateX(' + shift + 'px)');
      } else {
        el.css('transform', 'translateX(0px)');
      }       
    }
  }
 
  if ($(window).width() >= 767) {
    sticky();
    animation();
  }   
  $(window).resize(function() {
    if ($(window).width() >= 767) {
      sticky();
      animation();
    }
  })    
}