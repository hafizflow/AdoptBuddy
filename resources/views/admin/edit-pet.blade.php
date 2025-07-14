<x-layout>
    <div class="max-w-lg mx-auto mt-10">
        <h2 class="text-2xl font-bold mb-4">Edit Pet Status</h2>

        {{-- Pet Image --}}
        @if($pet->images->first())
            <img src="{{ asset('storage/' . $pet->images->first()->image) }}"
                 class="w-full h-60 object-cover rounded mb-4"
                 alt="{{ $pet->name }}">
        @endif

        {{-- Pet Name --}}
        <h3 class="text-xl font-semibold mb-2">{{ $pet->name }}</h3>

         Edit Status Form
        <form action="{{ route('admin.pets.update', $pet->id) }}" method="POST" class="mb-6">
            @csrf
            @method('PUT')

            <x-form-field>
                <x-form-label for="status">Pet Status</x-form-label>
                <div class="flex gap-x-3">
                    @foreach(['Available', 'On Hold', 'Adopted'] as $status)
                        <label class="flex items-center gap-1">
                            <input type="radio" name="status" value="{{ $status }}" {{ $pet->status === $status ? 'checked' : '' }}>
                            {{ $status }}
                        </label>
                    @endforeach
                </div>
                <x-form-error name="status" />
            </x-form-field>

            <x-form-button>Update Status</x-form-button>
        </form>

         Delete Button
        <form action="{{ route('admin.pets.destroy', $pet->id) }}" method="POST" onsubmit="return confirm('Are you sure you want to delete this pet?');">
            @csrf
            @method('DELETE')

            <button type="submit"
                    class="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded transition duration-200">
                Delete Pet
            </button>
        </form>
    </div>
</x-layout>

