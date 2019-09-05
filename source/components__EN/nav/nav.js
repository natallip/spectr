export const navigation = function() {
  $(window).scroll(function() {
    const $sections = $('section');

    $sections.each(function(i,el) {
      let top  = $(el).offset().top;
      let bottom = top + $(el).height();
      let scroll = $(window).scrollTop();
      let id = $(el).attr('id');
      
      if ( scroll > top-100 && scroll < bottom) {
        $('a.active').removeClass('active');
        $('a[href="#' + id + '"]').addClass('active');
        }
      })
  });

  $("nav").on("click","a", function (event) {
    event.preventDefault();

    let id  = $(this).attr('href'),

    top = $(id).offset().top;
      
    $('body,html').animate({scrollTop: top}, 200);
  });
}   