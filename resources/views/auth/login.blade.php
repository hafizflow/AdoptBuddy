<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Login</title>
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

</head>

<body>
<div class="flex min-h-full flex-col justify-center px-8 py-12 lg:px-8">
    <x-image-heading>Login to your account</x-image-heading>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-5" action="#" method="POST">
            <x-form-field>
                <x-form-label for="email">Email</x-form-label>
                <x-form-input type="email" name="email" id="email"/>
                <p></p>
            </x-form-field>

            <x-form-field>
                <x-form-label for="password">Password</x-form-label>
                <x-form-input type="password" name="password" id="password"/>
                <p></p>
            </x-form-field>

            <x-form-button>Login</x-form-button>
        </form>

        <p class="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?
            <a href="/register" class="font-semibold text-[rgb(74,38,22)] hover:text-[rgb(230,165,70)]">SIGNUP NOW</a>
        </p>
    </div>
</div>

</body>
</html>
