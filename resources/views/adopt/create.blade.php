<x-layout>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-5" action="/adopt" method="POST">
            @csrf
            <x-form-field>
                <x-form-label for="name">Name</x-form-label>
                <x-form-input :value="old('name')" type="name" name="name" id="name"/>
                <x-form-error name="name"></x-form-error>
            </x-form-field>

            <x-form-field>
                <x-form-label for="email">Email</x-form-label>
                <x-form-input :value="old('email')" type="email" name="email" id="email"/>
                <x-form-error name="email"></x-form-error>
            </x-form-field>

            <x-form-field>
                <x-form-label for="phone">Phone</x-form-label>
                <x-form-input :value="old('phone')" type="phone" name="phone" id="phone"/>
                <x-form-error name="phone"></x-form-error>
            </x-form-field>

            <x-form-field>
                <x-form-label for="address">Address</x-form-label>
                <x-form-input :value="old('address')" type="address" name="address" id="address"/>
                <x-form-error name="address"></x-form-error>
            </x-form-field>

            <x-form-field>
                <x-form-label for="email">Is Experience of previous adoption</x-form-label>
                    <div class="flex gap-x-2">
                        <input type="radio" id="yes" name="isPrevious" value="Yes">
                        <label for="yes">Yes</label><br>
                        <input type="radio" id="no" name="isPrevious" value="No">
                        <label for="no">No</label><br>
                    </div>
                <x-form-error name="email"></x-form-error>
            </x-form-field>


            <x-form-field>
                <x-form-label for="message">Message</x-form-label>
                <x-form-input :value="old('message')" type="text" name="message" id="message"/>
                <x-form-error name="message"></x-form-error>
            </x-form-field>

            <x-form-button>Submit</x-form-button>
        </form>
    </div>
</x-layout>
