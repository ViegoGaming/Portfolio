<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    @vite('resources/css/app.css')
</head>
<body class="bg-background">


    <div class="flex items-center justify-center min-h-screen">
        <div class="bg-white shadow-2xl p-16 rounded-lg text-center max-w-2xl">
            <h1 class="font-heading text-5xl font-bold text-foreground mb-4">
                Welkom op Mijn Portfolio
            </h1>
            <p class="text-lg text-secondary-dark mb-8">
                Ontdek mijn werk en projecten.
            </p>

            @if(auth()->check())
                <p class="text-lg text-primary-dark">
                    Je bent ingelogd. Bekijk je <a href="{{ url('/dashboard') }}" class="text-primary hover:text-primary-dark">dashboard</a>.
                </p>
            @else
                <p class="text-lg text-secondary-dark">
                    <a href="{{ route('login') }}" class="text-primary hover:text-primary-dark font-semibold">
                        Log in
                    </a> of
                    <a href="{{ route('register') }}" class="text-primary hover:text-primary-dark font-semibold">
                        Registreer
                    </a> om verder te gaan.
                </p>
            @endif
        </div>
    </div>

</body>
</html>
