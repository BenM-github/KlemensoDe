const menuTrigger = document.getElementById('block-superfishmain').getElementsByClassName("sf-depth-1 sub-menu")
console.log(menuTrigger);
/*
const subMenuBar = document.getElementsByClassName('sub-menu').querySelector('ul')
*/

/*
    // Top menu
    $('div[id="hide_items"]').each(function () {
        var dif = 100 - $(this).width();
        $(this).css({'right' : dif + 'px', 'display' : 'none'});
    });

    var config = {
         over: function () {
                $(this).children("div[id='hide_items']").css('display', 'block');
                $(this).children("div[id='hide_items']").animate({right: '-10px'}, 'slow', function() {});
            },
         timeout: 800,
         out: function () {
                var dif = 100 - $(this).children("div[id='hide_items']").width();

                $(this).children("div[id='hide_items']").animate({
                    right: dif + 'px'
                }, 'slow', function() {
                    $(this).css('display', 'none');
                });
            }
    };

    $("li[class*='menuparent']").hoverIntent( config );
    $("li[class*='sf-item']").each(function () {
        $(this).children("a").attr('tabindex', '-1');
    });
    //////////////////////////////
*/