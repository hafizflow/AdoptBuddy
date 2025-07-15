<x-layout>
    <div class="mt-12 sm:mx-auto sm:w-full sm:max-w-md bg-white p-8 shadow-lg rounded-xl">
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-8">Adoption Request</h2>

        <form class="space-y-6" action="{{ route('adopt.store', $post->id) }}" method="POST">
            @csrf
            {{-- Phone --}}
            <x-form-field>
                <x-form-label for="phone">Phone</x-form-label>
                <x-form-input :value="old('phone')" type="text" name="phone" id="phone" />
                <x-form-error name="phone" />
            </x-form-field>

            {{-- Address --}}
            <x-form-field>
                <x-form-label for="address">Address</x-form-label>
                <x-form-input :value="old('address')" type="text" name="address" id="address" />
                <x-form-error name="address" />
            </x-form-field>

            {{-- Previous Adoption Experience --}}
            <x-form-field>
                <x-form-label for="isPrevious">Previous Adoption Experience</x-form-label>
                <div class="flex gap-4 mt-2">
                    @foreach(['Yes', 'No'] as $option)
                        <label class="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 transition cursor-pointer">
                            <input type="radio" name="isPrevious" value="{{ $option }}" id="{{ strtolower($option) }}" class="accent-indigo-600">
                            <span class="text-gray-700">{{ $option }}</span>
                        </label>
                    @endforeach
                </div>
                <x-form-error name="isPrevious" />
            </x-form-field>

            {{-- Message --}}
            <x-form-field>
                <x-form-label for="message">Message</x-form-label>
                <textarea name="message" id="message" rows="2" class="w-full rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500">{{ old('message') }}</textarea>
                <x-form-error name="message" />
            </x-form-field>

            {{-- Submit Button --}}
            <x-form-button class="w-full">Submit</x-form-button>
        </form>
    </div>
</x-layout>
