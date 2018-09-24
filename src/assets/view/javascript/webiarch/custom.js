
 /* loader */
$(document).ready(function(){
    var o = $('#page-preloader');
    if (o.length > 0) {
        $(window).on('load', function() {
            $('#page-preloader').removeClass('visible');
        });
    }
});

//go to top
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
});

$(document).ready(function(){
    var count_block = $('ul .my-menu').length;
    var number_blocks = 9;
    //console.log(count_block);
    if(count_block < number_blocks){
        return false; 
    }
    else {
        $('.my-menu').each(function(i,n){
            $('my-menu').addClass(i);
            if(i == number_blocks) {
            $(this).append('<li class="view_more my-menu"><a class="dropdown-item"><i class="fa fa-plus thumb_img pull-left"></i>More Categories</a></li>');
            }
            if(i> number_blocks) {
            $(this).addClass('wr_hide_menu').hide();
            }
        });
        $('.view_more').click(function() {
            $(this).toggleClass('active');
            $('.wr_hide_menu').slideToggle();
        });
    }
});

$(document).ready(function(){
    var count_block = $('ul .webTab').length;
    var number_blocks = 5;
    //console.log(count_block);
    if(count_block < number_blocks){
        return false; 
    }
    else {
        $('.webTab').each(function(i,n){
            $('webTab').addClass(i);
            if(i == number_blocks) {
            $(this).append('<li class="view_morec"><a class="dropdown-item">More Categories</a></li>');
            }
            if(i> number_blocks) {
            $(this).addClass('wr_hide_menuc').hide();
            //$(this).hide();
            }              //$('.webTab').hide();
        });
        $('.view_morec').click(function() {
            $(this).toggleClass('active');
            $('.wr_hide_menuc').slideToggle();
        });
    }
});

/* responsive menu */
function openNav() {
    $('body').addClass("active");
    document.getElementById("mySidenav").style.width = "250px";
    jquery('#mySidenav').addCss("display","block");
}
function closeNav() {
    $('body').removeClass("active");
    document.getElementById("mySidenav").style.width = "0";
    jquery('#mySidenav').removeCss("display","none");
}

/* left column responsive */
function wbFilters(){

  if ($(window).width() <= 767) {
    $('#column-left').appendTo('#content');
  } else {
    $('#column-left').appendTo('#column-left');
  }
}
$(document).ready(function(){ wbFilters(); });
$(window).resize(function(){ wbFilters(); });

/* menu */
$(document).ready(function(){
$('.my-menu:even').addClass('evenmenu');
$('.my-menu:odd').addClass('oddmenu');
});

$(document).ready(function(){
      if ($(window).width() <= 767) {
    $('.catfilter').appendTo('.append-filter');
}
});

$(document).ready(function(){
      if ($(window).width() <= 767) {
    
}
});




$(document).ready(function(){
      if ($(window).width() <= 767) {
        $('#search-by-category').appendTo('.appxs');
    $('.mobilemenu').appendTo('.appxsmenu');
    $('.mxs').appendTo('.haccount');
}
});



/* dropdown effect of account */
$(document).ready(function () {
    if ($(window).width() <= 767) {
    $('.dropdown button.test').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });

    $('.dropdown a.account').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
}
});
/* dropdown */