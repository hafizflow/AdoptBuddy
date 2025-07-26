<x-layout>
    <div class="min-h-screen">
        <div class="max-w-5xl mx-auto py-8 px-4">
            <!-- Header Section -->
            <div class="text-center mb-8">
                <h1 class="text-4xl font-bold text-gray-900 mb-2">Adoption Requests</h1>
                <p class="text-gray-600 text-lg">Manage and review all pet adoption applications</p>
            </div>

            @if ($requests->isEmpty())
                <div class="text-center py-16">
                    <div class="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                        <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">No adoption requests found</h3>
                    <p class="text-gray-500">When users submit adoption requests, they'll appear here.</p>
                </div>
            @else
                <div class="space-y-6">
                    @foreach ($requests as $request)
                        <div class="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                            <div class="flex flex-col md:flex-row">

                                {{-- Image section --}}
                                <div class="md:w-80 flex-shrink-0">
                                    @if ($request->post && $request->post->images && $request->post->images->first())
                                        <img src="{{ asset('storage/' . $request->post->images->first()->image) }}"
                                             alt="Pet image"
                                             class="w-full h-64 md:h-80 object-cover">
                                    @elseif ($request->post && $request->post->image)
                                        <img src="{{ asset('storage/' . $request->post->image) }}"
                                             alt="Pet image"
                                             class="w-full h-64 md:h-80 object-cover">
                                    @else
                                        <div class="w-full h-64 md:h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                            <div class="text-center">
                                                <svg class="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                                </svg>
                                                <p class="text-gray-500 font-medium text-sm">No image</p>
                                            </div>
                                        </div>
                                    @endif

                                    {{-- 🚨 Delete Request Button --}}
                                    <form action="{{ route('requests.destroy', ['postUser' => $request->id]) }}"
                                          method="POST"
                                          onsubmit="return confirm('Are you sure you want to delete this request?')"
                                          class="p-4">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit"
                                                class="w-full bg-red-600 text-white font-medium text-sm py-2 rounded-lg hover:bg-red-700 transition duration-200 shadow">
                                            Delete Request
                                        </button>
                                    </form>

                                        {{-- ✏️ Edit Post Button --}}
                                        @if ($request->post)
                                            <div class="px-4 pb-4">
                                                <a href="{{ route('post.edit', $request->post->id) }}"
                                                   class="block w-full text-center bg-blue-600 text-white font-medium text-sm py-2 rounded-lg hover:bg-blue-700 transition duration-200 shadow">
                                                    Edit Post
                                                </a>
                                            </div>
                                        @endif
                                </div>

                                {{-- Content section --}}
                                <div class="flex-1 p-6">
                                    {{-- Applicant Information --}}
                                    <div class="mb-8">
                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                                <svg class="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                                </svg>
                                                {{ $request->name }}
                                            </h2>

                                            {{-- Status badge --}}
                                            <div class="flex items-center justify-between mb-4">
                                                <div class="flex items-center">
                                                    @if ($request->status === 'pending')
                                                        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                                                            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                                                            </svg>
                                                            Pending Review
                                                        </span>
                                                    @elseif ($request->status === 'accepted')
                                                        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                                            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                            </svg>
                                                            Accepted
                                                        </span>
                                                    @else
                                                        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                                                            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                                                            </svg>
                                                            Rejected
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>

                                        {{-- User Info --}}
                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                                            <div class="flex items-center text-gray-700">
                                                <svg class="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                </svg>
                                                <span class="font-medium text-sm">{{ $request->email }}</span>
                                            </div>
                                            <div class="flex items-center text-gray-700">
                                                <svg class="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                                </svg>
                                                <span class="text-sm">{{ $request->phone }}</span>
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                            <div class="flex items-center text-gray-700">
                                                <svg class="w-4 h-4 text-gray-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                </svg>
                                                <span class="font-medium text-sm">{{ $request->address }}</span>
                                            </div>
                                            <div class="flex items-center text-gray-700">
                                                <svg class="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span class="text-sm">{{ $request->isPrevious }}</span>
                                            </div>
                                        </div>

                                        @if ($request->message)
                                            <div class="bg-gray-50 rounded-lg p-3 border-l-4 border-blue-500">
                                                <p class="text-gray-700 font-medium mb-1 text-sm">Message:</p>
                                                <p class="text-gray-600 italic text-sm">"{{ $request->message }}"</p>
                                            </div>
                                        @endif
                                    </div>

                                    {{-- Divider --}}
                                    <div class="border-t border-gray-200 my-4"></div>

                                    {{-- Pet Info + Update Form --}}
                                    <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">

                                        {{-- Pet Information --}}
                                        <div class="bg-gray-50 rounded-lg p-4 space-y-2 border border-gray-200">
                                            <h3 class="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                                <svg class="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                                Pet Info
                                            </h3>

                                            <div class="text-sm text-gray-700 space-y-1">
                                                <p><span class="font-medium">Name:</span> {{ $request->post->name ?? 'N/A' }}</p>
                                                <p><span class="font-medium">Breed:</span> {{ $request->post->breed ?? 'N/A' }}</p>
                                                <p><span class="font-medium">Age:</span> {{ $request->post->age ?? 'N/A' }}</p>
                                                <p><span class="font-medium">Gender:</span> {{ $request->post->gender ?? 'N/A' }}</p>
                                                <p><span class="font-medium">Description:</span> {{ $request->post->description ?? 'N/A' }}</p>
                                                <p><span class="font-medium">Size:</span> {{ $request->post->size ?? 'N/A' }}</p>
                                                <p><span class="font-medium">Status:</span> {{ $request->post->status ?? 'N/A' }}</p>
                                            </div>
                                        </div>

                                        {{-- Status Update Form --}}
                                        <form action="{{ route('requests.update', ['postUser' => $request->id]) }}"
                                              method="POST"
                                              class="bg-gray-50 rounded-lg p-4 space-y-3 border border-gray-200">
                                            @csrf
                                            @method('PATCH')

                                            <label class="block text-sm font-semibold text-gray-700">Update Status</label>

                                            <div class="flex flex-col gap-2">
                                                @php
                                                    $statuses = ['pending' => 'Pending', 'accepted' => 'Accept', 'rejected' => 'Reject'];
                                                    $colors = ['pending' => 'yellow', 'accepted' => 'green', 'rejected' => 'red'];
                                                @endphp

                                                @foreach ($statuses as $value => $label)
                                                    @php
                                                        $isActive = $request->status === $value;
                                                        $color = $colors[$value];
                                                    @endphp

                                                    <label class="flex items-center px-3 py-1.5 border-2 rounded-lg text-sm cursor-pointer transition
                              {{ $isActive ? 'border-'.$color.'-400 bg-'.$color.'-50' : 'border-gray-200 hover:bg-'.$color.'-50' }}">
                                                        <input type="radio"
                                                               name="status"
                                                               value="{{ $value }}"
                                                               class="form-radio text-{{ $color }}-500 focus:ring-{{ $color }}-400"
                                                            {{ $isActive ? 'checked' : '' }}>
                                                        <span class="ml-2 text-gray-800">{{ $label }}</span>
                                                    </label>
                                                @endforeach
                                            </div>

                                            <button type="submit"
                                                    class="w-full mt-2 bg-blue-600 text-white font-medium text-sm py-2 rounded hover:bg-blue-700 transition">
                                                Update
                                            </button>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            @endif
        </div>
    </div>






    <div class="min-h-screen">
        <div class="max-w-5xl mx-auto py-8 px-4">
            <!-- Header Section -->
            <div class="text-center mb-8">
                <h1 class="text-4xl font-bold text-gray-900 mb-2">User Post Requests</h1>
                <p class="text-gray-600 text-lg">Accept or Delete the post</p>
            </div>

        @if($posts->isEmpty())
            <p>No invisible posts found.</p>
        @else
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                @foreach($posts as $post)
                    <div class="bg-white rounded-xl shadow p-4">
                        @if($post->images->first())
                            <img src="{{ asset('storage/' . $post->images->first()->image) }}" class="w-full h-48 object-cover rounded-md mb-3" alt="{{ $post->name }}">
                        @else
                            <div class="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 rounded-md mb-3">No Image</div>
                        @endif

                        <h2 class="text-xl font-semibold mb-2">{{ $post->name }}</h2>
                        <div class="text-sm text-gray-600">{{ $post->breed }} • {{ $post->age }} years</div>
                        <p class="text-sm mt-2">{{ $post->description }}</p>
                            {{-- Delete Button --}}
                            <form action="{{ route('post.destroy', $post->id) }}" method="POST"
                                  onsubmit="return confirm('Are you sure you want to delete this pet?');"
                                  class="flex-1 mt-3">
                                @csrf
                                @method('DELETE')

                                <button type="submit"
                                        class="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition">
                                    Delete Pet
                                </button>
                            </form>

                            <form action="{{ route('post.request', $post->id) }}" method="POST"
                                  class="flex-1 mt-3">
                                @csrf
                                @method('PATCH')

                                <button type="submit"
                                        class="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition">
                                    Accept Request
                                </button>
                            </form>
                    </div>
                @endforeach
            </div>
        @endif
        </div>
    </div>
</x-layout>
