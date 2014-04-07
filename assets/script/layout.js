
/*
    ===========================================================================
    HORSEGGS: SCRIPT: LAYOUT
    ---------------------------------------------------------------------------
    Version: 0.1;
    ===========================================================================
*/

( function ($)
{

    var $body       = $('body'),
        $article    = $('article'),
        $contentNav = $('.item-anchors');

    $contentNav.add('.top').find('a').on('click touchstart', function (event)
    {
        event.preventDefault();
        if ($(this).attr('href').length > 1) { $.egg.scroll2($(this).attr('href')); }
    });

    $(window).scroll( function ()
    {
        if ( $(window).scrollTop() > $article.offset().top)
        {
            $('.content-floating-menu').addClass('float');
        }
            else
        {
            $('.content-floating-menu').removeClass('float');
        }
    });

    $('.active a').on('click', function (event) { event.preventDefault(); });

    /* Pop-In
    ------------------------------------------------------------------------ */

    // if ($('#popin').length && !jsHistory.popin)
    // {
    //     /**/ console.log('  EGG: Pop-In: Started');
    //     $('#popin-demo-1').popin();
    //     jsHistory.popin = true;
    // }

    /* Lazy
    ------------------------------------------------------------------------ */

    if ($('#script-lazy').length)// && !jsHistory.lazy)
    {
        /**/ console.log('  EGG: Lazy: Started');

        var date, hour, minutes, seconds, timestamp,
            lazyOnREC = 1,
            lazyOffREC = 1;

        var getTime = function ()
        {
            date      = new Date();
            hour      = (date.getHours() < 10 )   ? ['0', date.getHours()].join('') :   date.getHours();
            minutes   = (date.getMinutes() < 10 ) ? ['0', date.getMinutes()].join('') : date.getMinutes();
            seconds   = (date.getSeconds() < 10 ) ? ['0', date.getSeconds()].join('') : date.getSeconds();
            timestamp = ['Redimensionado em: ', hour, ':', minutes, ':', seconds].join('');
        };

        var recordOn = function ()
        {
            getTime();
            $('#lazy-on').val([timestamp, '\n', $('#lazy-on').val()].join(''));
            $('#lazy-on-rec').html(lazyOnREC++);
        };

        var recordOff = function ()
        {
            getTime();
            $('#lazy-off').val([timestamp, '\n', $('#lazy-off').val()].join(''));
            $('#lazy-off-rec').html(lazyOffREC++);
        };

        var showSuggestions = function ()
        {
            $('.suggestions').show();
        };

        var lazyScroll = $.egg.lazy(recordOn),
            lazyKeys   = $.egg.lazy(showSuggestions);

        $(window).resize(recordOff);
        $(window).resize(lazyScroll);

        $('#lazySearch').keyup(function ()
        {
            lazyKeys();

        }).blur( function ()
        {
            $('.suggestions').hide();
        });

        // jsHistory.lazy = true;
    }

    /* Password
    ------------------------------------------------------------------------ */

    // if ($('#password-tip').length && !jsHistory.passwordtip)
    // {
    //     /**/ console.log('  EGG: Password Tip: Started');

    //     $('#keypass').passwordKey();
    //     $('#switch').passwordReveal({ message: 'Esconder senha' });

    //     jsHistory.passwordtip = true;
    // }

    /* Scroll 2
    ------------------------------------------------------------------------ */

    // if ($('#scroll-2').length && !jsHistory.scroll2)
    // {
    //     /**/ console.log('  EGG: Scroll 2: Started');

    //     $('#scroll-2-top').on('click', function (event)
    //     {
    //         event.preventDefault();
    //         $.egg.scroll2('top');
    //     });

    //     $('#scroll-2-topic').on('click', function (event)
    //     {
    //         event.preventDefault();
    //         $.egg.scroll2('#scroll-2-top', 192);
    //     });

    //     jsHistory.scroll2 = false;
    // }

    /* Tooltips
    ------------------------------------------------------------------------ */

    if ($('table.arrows').length)
    {
        console.log('ok');

        var $tipIntro  = $('#tooltip-structure'),
            $tipArrow  = $tipIntro.find('table a'),
            $tipColors = $('#tooltip-colors'),
            $tipButton = $tipColors.find('button'),
            $formTip   = $('#tooltip-form'),
            $formTipArrow = $formTip.find('table a');

        $tipArrow.on('click', function (event)
        {
            event.preventDefault();

            var $el = $(this),
                position = $el.attr('id'),
                tipClass = ['has-tip ', position].join('');

            $tipIntro.find('.has-tip').attr('class', tipClass);
            $tipIntro.find('.tip-class').html(tipClass);
            $tipArrow.removeClass('ON');
            $el.addClass('ON');
        });

        $tipButton.on('click', function (event)
        {
            event.preventDefault();

            var $el = $(this),
                elColor = $el.attr('data-color'),
                tipColor = $el.attr('id'),
                tipClass = ['has-tip top-left ', tipColor].join('');

            $tipColors.find('.has-tip').attr('class', tipClass);
            $tipColors.find('.tip-class').html(tipClass);
            $tipButton.removeClass().addClass('button moderate gray');
            $el.addClass(elColor);
        });

        $formTipArrow.on('click', function (event)
        {
            event.preventDefault();

            var $el = $(this),
                position = $el.attr('id'),
                tipClass = ['is-tip error ', position].join('');

            $formTip.find('.is-tip').attr('class', tipClass);
            $formTip.find('.form-tip-class').html(tipClass);
            $formTipArrow.removeClass('ON');
            $el.addClass('ON');
            $formTip.find('input').focus();
        });
    }

    /* Prettyprint for default loaded page
    ------------------------------------------------------------------------ */

    $('code').addClass('prettyprint');
    $('pre').addClass('prettyprint linenums');

})(jQuery);
