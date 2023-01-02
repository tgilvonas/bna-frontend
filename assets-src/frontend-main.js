import MobileTouchMenu from 'mobile-touch-menu';
import $ from 'jquery'

$(document).ready(function(){
    let mobileTouchMenu = new MobileTouchMenu({
        width: '300px',
        direction: 'left',
        swipeDistance: 120
    });
    $('.mobile-menu-opener').click(function(){
        mobileTouchMenu.show();
    });
    $('.close-mobile-menu').click(function(){
        mobileTouchMenu.hide();
    });
});
