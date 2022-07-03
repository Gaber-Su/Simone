$('.nav-links a').click(function() {
   let navHref = $(this).attr('href');  // href attr
    let hrefOffset = $(navHref).offset().top; // offset of attr
    $('body,html').animate({scrollTop:hrefOffset}, 1000) // body (scrolltop == offset of href)
})

let avgTop =  $('#services').offset().top;
// alert(avgTop)

$(window).scroll(function() {
    if($(window).scrollTop() > avgTop) {
        $('#btnTop').fadeIn(1000)
    } else {
        $('#btnTop').fadeOut(1000)

    }
})