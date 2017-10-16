$(document).ready(function () {
    $('.js-category-list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button class="category-list-arrow mod-prev"></button>',
        nextArrow: '<button class="category-list-arrow mod-next"></button>',
    });

    $('.js-product-list').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button class="product-list-arrow mod-prev"></button>',
        nextArrow: '<button class="product-list-arrow mod-next"></button>',
    });
});