@props([
    'liked' => false,
    'action' => '#', // where to send the like/unlike request
])

<form method="POST" action="{{ $action }}">
    @csrf
    <button type="submit"
            class="flex items-center justify-center px-3 py-2 rounded-md transition
                   {{ $liked ? 'bg-red-600 hover:bg-red-500 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600' }}">
        @if($liked)
            <!-- Filled Heart -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
        @else
            <!-- Outlined Heart -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3.172 5.172a4 4 0 015.656 0L12 8.343l3.172-3.171a4 4 0 015.656 5.656L12 21.657 3.172 10.828a4 4 0 010-5.656z" />
            </svg>
        @endif
    </button>
</form>

