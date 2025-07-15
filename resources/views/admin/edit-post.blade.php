<x-layout>
    <div class="max-w-2xl mx-auto mt-12 bg-white shadow-xl rounded-2xl p-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Edit Pet Status</h2>

        {{-- Pet Image --}}
        @if($post->images->first())
            <div class="flex justify-center mb-6">
                <img src="{{ asset('storage/' . $post->images->first()->image) }}"
                     class="w-80 h-60 object-cover rounded-xl border shadow-md"
                     alt="{{ $post->name }}">
            </div>
        @endif

        {{-- Pet Name --}}
        <h3 class="text-2xl font-semibold text-center text-gray-700 mb-6">{{ $post->name }}</h3>

        {{-- Update & Delete Section --}}
        <form action="{{ route('post.update', $post->id) }}" method="POST" class="space-y-6">
            @csrf
            @method('PUT')

            {{-- Pet Status --}}
            <div>
                <x-form-label for="status">Pet Status</x-form-label>
                <div class="flex gap-4 mt-2">
                    @foreach(['Available', 'On Hold', 'Adopted'] as $status)
                        <label class="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition">
                            <input type="radio" name="status" value="{{ $status }}"
                                   class="accent-blue-600"
                                {{ $post->status === $status ? 'checked' : '' }}>
                            <span class="text-gray-700">{{ $status }}</span>
                        </label>
                    @endforeach
                </div>
                <x-form-error name="status" />
            </div>

            {{-- Buttons --}}
            <div class="flex gap-6 mt-8">
                {{-- Update Button --}}
                <form action="{{ route('post.update', $post->id) }}" method="POST" class="flex-1">
                    @csrf
                    @method('PUT')
                    <button type="submit"
                            class="flex-1 h-12 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md transition">
                        Update Status
                    </button>
                </form>


                {{-- Delete Button --}}
                <form action="{{ route('post.destroy', $post->id) }}" method="POST"
                      onsubmit="return confirm('Are you sure you want to delete this pet?');"
                      class="flex-1">
                    @csrf
                    @method('DELETE')

                    <button type="submit"
                            class="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition">
                        Delete Pet
                    </button>
                </form>
            </div>
        </form>
    </div>
</x-layout>
