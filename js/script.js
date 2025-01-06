$(document).ready(function () {
    //******************
    //* gnb 메뉴
    //*******************

    const header = $('#header')
    const gnb = header.find('#gnb')
    const gnbLi = gnb.children('li')
    const dep1 = gnbLi.children('a.dep1')
    const dep2 = gnbLi.children('ul.dep2')

    gnbLi.on('mouseenter', function () {
        //dep2.css('display', 'block')
        //dep2.stop().fadeIn(300)

        /* dep2.css('visibility', 'visible')
        dep2.stop().animate({opacity: 1},300) */

        header.addClass('on')
    })
    gnbLi.on('mouseleave', function () {
        //dep2.css('display', 'none')
        //dep2.stop().fadeOut(200)

        /* dep2.css('visibility', 'hidden')
        dep2.stop().animate({opacity: 0},300) */

        header.removeClass('on')
    })

    //******************
    //* 메인페이지 swiper 슬라이드
    //*******************
    const swiper1 = new Swiper('#main-slide', {       
        loop: true, // 슬라이드 루프(무한 회전) 활성화

        /* autoplay: {
            delay: 3000, // 3초마다 자동 재생
        }, */

        pagination: {
            el: '.main-wrap .swiper-pagination', // 페이지 표시기
            clickable: true, // 페이지 번호 클릭 가능하게 설정
        },

        navigation: {
            nextEl: '.main-wrap .swiper-button-next', // 다음 슬라이드로 이동하는 버튼
            prevEl: '.main-wrap .swiper-button-prev', // 이전 슬라이드로 이동하는 버튼
        },
    });
    
    //******************
    //* 메인페이지 tab 메뉴
    //*******************

    const tabLink = $('.notice-wrap .tab-menu .tabs a')
    const tabConList = $('.notice-wrap .tab-con .list')

    tabLink.on('click', function (e) {
        e.preventDefault();
        tabConList.hide();
        let tabConID = $(this).attr('data-tab')
        console.log(tabConID)
        $(tabConID).show()

        tabLink.removeClass('on')
        $(this).addClass('on')
    })

}) ////// 문서가 준비되면 작업 끝