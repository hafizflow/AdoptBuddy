<x-layout>
    <div class="max-w-7xl mx-auto px-4 py-8">
        <h1 class="text-2xl font-bold mb-6">All Pets</h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            @foreach($pets as $pet)
                @if (Auth::check() && Auth::user()->role === 'admin')
                    <a href="{{ route('post.edit', $pet->id) }}" class="block hover:shadow-lg transition-shadow duration-200"/>
                @endif
                    <div class="bg-white rounded-xl shadow p-4">
                        @if($pet->images->first())
                            <img src="{{ asset('storage/' . $pet->images->first()->image) }}" class="w-full h-48 object-cover rounded-md mb-3" alt="{{ $pet->name }}">
                        @else
                            <div class="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 rounded-md mb-3">No Image</div>
                        @endif

                        <h2 class="text-xl font-semibold">{{ $pet->name }}</h2>
                            <div class="flex justify-between items-center text-sm text-gray-600 mt-1">
                                    <span>{{ $pet->breed }} • {{ $pet->age }} years</span>
                                    <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                    {{ ucfirst($pet->gender) }}
                                </span>
                            </div>
                        <p class="text-sm mt-1">{{ $pet->description }}</p>

                            @if (Auth::check() && Auth::user()->role === 'user')
                                <div class="flex mt-3 space-x-4">
                                    <x-button href="{{ route('adopt.create', $pet->id) }}">Adopt</x-button>
                                </div>
                            @endif
                    </div>
            @endforeach
        </div>
    </div>
</x-layout>
