<x-layout>
        <div class="max-w-4xl mx-auto p-6">
            <h2 class="text-2xl font-bold mb-4">My Profile</h2>

            <div class="mb-6">
                <p><strong>Name:</strong> {{ $user->name }}</p>
                <p><strong>Email:</strong> {{ $user->email }}</p>
            </div>

            <h3 class="text-xl font-semibold mt-6 mb-2">My Adopt Requests</h3>
            @forelse ($adoptRequests as $request)
                <div class="border p-3 rounded mb-4">
                    <p><strong>Pet:</strong> {{ $request->post->name ?? 'Deleted Post' }}</p>
                    <p><strong>Status:</strong> {{ ucfirst($request->status) }}</p>
                    <p><strong>Message:</strong> {{ $request->message }}</p>
                    @if($request->post && $request->post->images->isNotEmpty())
                        <img src="{{ asset('storage/' . $request->post->images->first()->image) }}" class="w-32 mt-2 rounded"  alt=""/>
                    @endif
                </div>
            @empty
                <p>No adoption requests yet.</p>
            @endforelse

            @if($myPosts->isNotEmpty())
                <h3 class="text-xl font-semibold mt-6 mb-2">My Created Posts</h3>
                @foreach ($myPosts as $post)
                    <div class="border p-3 rounded mb-4">
                        <p><strong>{{ $post->name }}</strong> - {{ $post->status ?? 'No Status' }}</p>
                        <p>{{ $post->description }}</p>
                        @if($post->images->isNotEmpty())
                            <img src="{{ asset('storage/' . $post->images->first()->image) }}" class="w-32 mt-2 rounded"  alt=""/>
                        @endif
                    </div>
                @endforeach
            @endif
        </div>
</x-layout>

