<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="/image/logo.jpeg">
        <title>Karuna Mitta Jaya</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,700i,900,900i&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

        <!-- Custom CSS -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>

    <body>
        <div id="app" style="width: 100%; height: 100%">
            <app></app>
        </div>

        <!-- Custom JS -->
        <script src="{{ asset('js/app.js') }}"></script>
        <!-- Jquery -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </body>
</html>
