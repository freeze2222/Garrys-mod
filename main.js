    $(function () {

        // mobile menu
        $('.mobile_nav').click(function (e) {
            e.preventDefault();
            $(this).toggleClass('mobile_nav-active');
            $('.nav_menu').toggleClass('nav_menu-active');
        });


    });

    $(".modal_btn1").click(function () {
        $(".modal1").addClass('active_def');
    });

    $(".close1").click(function () {
        $(".modal1").removeClass('active_def');
    });

    $(".modal_btn2").click(function () {
        $(".modal2").addClass('active_def');
    });

    $(".close2").click(function () {
        $(".modal2").removeClass('active_def');
    });

    $(".modal_btn3").click(function () {
        $(".modal3").addClass('active_def');
    });

    $(".close3").click(function () {
        $(".modal3").removeClass('active_def');
    });

    $(".modal_btn4").click(function () {
        $(".modal4").addClass('active_def');
    });

    $(".close4").click(function () {
        $(".modal4").removeClass('active_def');
    });

    $(".modal_btn5").click(function () {
        $(".modal5").addClass('active_def');
    });

    $(".close5").click(function () {
        $(".modal5").removeClass('active_def');
    });

    $(".modal_btn6").click(function () {
        $(".modal6").addClass('active_def');
    });

    $(".close6").click(function () {
        $(".modal6").removeClass('active_def');
    });

    $(".modal_btn7").click(function () {
        $(".modal7").addClass('active_def');
    });

    $(".close7").click(function () {
        $(".modal7").removeClass('active_def');
    });

    $(".modal_btn8").click(function () {
        $(".modal8").addClass('active_def');
    });

    $(".close8").click(function () {
        $(".modal8").removeClass('active_def');
    });

    $(".modal_btn9").click(function () {
        $(".modal9").addClass('active_def');
    });

    $(".close9").click(function () {
        $(".modal9").removeClass('active_def');
    });

    $(".modal_btn10").click(function () {
        $(".modal10").addClass('active_def');
    });

    $(".close10").click(function () {
        $(".modal10").removeClass('active_def');
    });

    $(".modal_btn11").click(function () {
        $(".modal11").addClass('active_def');
    });

    $(".close11").click(function () {
        $(".modal11").removeClass('active_def');
    });

    $(".modal_btn12").click(function () {
        $(".modal12").addClass('active_def');
    });

    $(".close12").click(function () {
        $(".modal12").removeClass('active_def');
    });

    $(".modal_btn13").click(function () {
        $(".modal13").addClass('active_def');
    });

    $(".close13").click(function () {
        $(".modal13").removeClass('active_def');
    });

    $(".modal_btn14").click(function () {
        $(".modal14").addClass('active_def');
    });

    $(".close14").click(function () {
        $(".modal14").removeClass('active_def');
    });

    $(".modal_btn15").click(function () {
        $(".modal15").addClass('active_def');
    });

    $(".close15").click(function () {
        $(".modal15").removeClass('active_def');
    });


    function openTabs(evt, tabName, title) {

        var tabcontent = $(".tab_block");


        for (i = 0; i < tabcontent.length; i++) {
            $(tabcontent[i]).hide();

        }

        var tablinks = $(".navLink");

        for (i = 0; i < tablinks.length; i++) {
            $(tablinks[i]).removeClass("active");
        }
        $("#" + tabName).fadeIn('slow', 'linear');
        $("#" + tabName).show();

        $(evt.currentTarget).addClass("active");
    }

    $("#defaultOpen").click();
    $("#defaultOpen").addClass("active");