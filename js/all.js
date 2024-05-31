$(document).ready(() => {
    $(".header-content-btn").click(function(){
        // $(".header-content-menu").slideToggle("slow");
        // $(".header-content-menu").css('display', 'flex');
        $(".hamburger-icon").toggleClass("btn-close");
        $(".close-icon").toggleClass("btn-active");
        $(".header-content-menu").toggleClass("menu-active");
    })
});
