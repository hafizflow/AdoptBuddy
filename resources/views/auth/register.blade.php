<x-layout>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <x-image-heading>Create a new account</x-image-heading>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-5" action="/register" method="POST">
                @csrf
                <x-form-field>
                    <x-form-label for="name">Name</x-form-label>
                    <x-form-input :value="old('name')"  type="text" name="name" id="name"/>
                    <x-form-error name="name"></x-form-error>
                </x-form-field>

                <x-form-field>
                    <x-form-label for="email">Email</x-form-label>
                    <x-form-input :value="old('email')" type="email" name="email" id="email"/>
                    <x-form-error name="email"></x-form-error>
                </x-form-field>

                <x-form-field>
                    <x-form-label for="password">Password</x-form-label>
                    <x-form-input type="password" name="password" id="password"/>
                    <x-form-error name="password"></x-form-error>
                </x-form-field>

                <x-form-field>
                    <x-form-label for="password_confirmation">Confirm Password</x-form-label>
                    <x-form-input type="password" name="password_confirmation" id="password_confirmation"/>
                    <x-form-error name="password_confirmation"></x-form-error>
                </x-form-field>

                <x-form-button>Register</x-form-button>
            </form>

            <p class="mt-10 text-center text-sm/6 text-gray-500">
                All ready have an account?
                <x-text-button href="/login">LOGIN</x-text-button>
            </p>
        </div>
    </div>
</x-layout>
