<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        {{-- <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" /> --}}

        <!-- Favicons Icon -->
        <link rel="icon" href="http://demo.magikthemes.com/skin/frontend/base/default/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="http://demo.magikthemes.com/skin/frontend/base/default/favicon.ico" type="image/x-icon" />

        <!-- Mobile Specific -->
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <!-- CSS Style -->
        <link rel="stylesheet" type="text/css" href="{{ asset('frontend_assets') }}/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="{{ asset('frontend_assets') }}/css/font-awesome.min.css" media="all">
        <link rel="stylesheet" type="text/css" href="{{ asset('frontend_assets') }}/css/simple-line-icons.css" media="all">
        <link rel="stylesheet" type="text/css" href="{{ asset('frontend_assets') }}/css/owl.carousel.css">
        <link rel="stylesheet" type="text/css" href="{{ asset('frontend_assets') }}/css/owl.theme.css">
        <link rel="stylesheet" type="text/css" href="{{ asset('frontend_assets') }}/css/jquery.bxslider.css">
        <link rel="stylesheet" type="text/css" href="{{ asset('frontend_assets') }}/css/jquery.mobile-menu.css">
        <link rel="stylesheet" type="text/css" href="{{ asset('frontend_assets') }}/css/style.css" media="all">
        <link rel="stylesheet" type="text/css" href="{{ asset('frontend_assets') }}/css/revslider.css">

        <!-- Google Fonts -->
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:700,600,800,400' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Poppins:400,300,500,600,700' rel='stylesheet' type='text/css'>
        <link href="https://fonts.googleapis.com/css?family=Abril+Fatface&amp;subset=latin-ext" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Kaushan+Script&amp;subset=latin-ext" rel="stylesheet">

        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>

    <!-- JavaScript -->
    <script type="text/javascript" src="{{ asset('frontend_assets') }}/js/jquery.min.js"></script>
    <script type="text/javascript" src="{{ asset('frontend_assets') }}/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="{{ asset('frontend_assets') }}/js/revslider.js"></script>
    <script type="text/javascript" src="{{ asset('frontend_assets') }}/js/common.js"></script>

    <script type="text/javascript" src="{{ asset('frontend_assets') }}/js/owl.carousel.min.js"></script>
    <script type="text/javascript" src="{{ asset('frontend_assets') }}/js/jquery.mobile-menu.min.js"></script>
    <script type="text/javascript" src="{{ asset('frontend_assets') }}/js/countdown.js"></script>
    <script type='text/javascript'>
        jQuery(document).ready(function() {
            jQuery('#rev_slider_4').show().revolution({
                dottedOverlay: 'none',
                delay: 5000,
                startwidth: 850,
                startheight: 435,
                hideThumbs: 200,
                thumbWidth: 200,
                thumbHeight: 50,
                thumbAmount: 2,
                navigationType: 'thumb',
                navigationArrows: 'solo',
                navigationStyle: 'round',
                touchenabled: 'on',
                onHoverStop: 'on',
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                spinner: 'spinner0',
                keyboardNavigation: 'off',
                navigationHAlign: 'center',
                navigationVAlign: 'bottom',
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: 'left',
                soloArrowLeftValign: 'center',
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: 'right',
                soloArrowRightValign: 'center',
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: 'on',
                fullScreen: 'off',
                stopLoop: 'off',
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: 'off',
                autoHeight: 'off',
                forceFullWidth: 'on',
                fullScreenAlignForce: 'off',
                minFullScreenHeight: 0,
                hideNavDelayOnMobile: 1500,
                hideThumbsOnMobile: 'off',
                hideBulletsOnMobile: 'off',
                hideArrowsOnMobile: 'off',
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                fullScreenOffsetContainer: ''
            });
        });
    </script>
    <!-- Hot Deals Timer 1-->
    <script type="text/javascript">
      var dthen1 = new Date("12/25/17 11:59:00 PM");
      start = "08/04/15 03:02:11 AM";
      start_date = Date.parse(start);
      var dnow1 = new Date(start_date);
      if (CountStepper > 0)
      ddiff = new Date((dnow1) - (dthen1));
      else
      ddiff = new Date((dthen1) - (dnow1));
      gsecs1 = Math.floor(ddiff.valueOf() / 1000);

      var iid1 = "countbox_1";
      CountBack_slider(gsecs1, "countbox_1", 1);
    </script>
</html>
