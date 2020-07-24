<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-52717485-5"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-52717485-5');
    </script>

    
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Generador de contraseñas online</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>

    @yield('header')

</head>
<body>
<div class="d-flex flex-row justify-content-center">
    <div class="main-container">
        <div class="body-content">
            @yield('mainContent')
        </div>
        <div class="footer-content">
        </div>

    </div>
</div>
</body>
</html>
