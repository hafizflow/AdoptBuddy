<x-layout>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-5" action="/admin" method="POST" enctype="multipart/form-data" aria-label="Create new item">
            @csrf

            <x-form-field>
                <x-form-label for="name">Name</x-form-label>
                <x-form-input :value="old('name')" type="text" name="name" id="name" aria-describedby="name-error" />
                <x-form-error name="name"></x-form-error>

            </x-form-field>
            <x-form-field>
                <x-form-label for="age">Age</x-form-label>
                <x-form-input :value="old('age')" type="number" name="age" id="age" aria-describedby="age-error" />
                <x-form-error name="age"></x-form-error>
            </x-form-field>

            <x-form-field>
                <x-form-label for="image">Upload Image</x-form-label>
                <input
                    type="file"
                    name="images[]"
                    id="image"
                    class="border border-gray-300 rounded w-full p-2"
                    accept="image/*"
                    aria-describedby="image-error"
                    multiple
                >
                <x-form-error name="image" id="image-error" />
            </x-form-field>

            <x-form-field>
                <x-form-label for="size">Size</x-form-label>
                <x-form-input :value="old('size')" type="text" name="size" id="size" aria-describedby="size-error" />
                <x-form-error name="size"></x-form-error>
            </x-form-field>

            <x-form-field>
                <x-form-label for="breed">Breed</x-form-label>
                <x-form-input :value="old('breed')" type="text" name="breed" id="breed" aria-describedby="breed-error" />
                <x-form-error name="breed"></x-form-error>
            </x-form-field>

            <x-form-field>
                <x-form-label for="email">Pet Status</x-form-label>
                <div class="flex gap-x-2">
                    <input type="radio" id="available" name="status" value="Available">
                    <label for="available">Available</label><br>
                    <input type="radio" id="on-hold" name="status" value="On Hold">
                    <label for="on-hold">On Hold</label><br>
                    <input type="radio" id="adopted" name="status" value="Adopted">
                    <label for="adopted">Adopted</label><br>
                </div>
                <x-form-error name="email"></x-form-error>
            </x-form-field>

            <x-form-field>
                <x-form-label for="gender">Gender</x-form-label>
                <x-form-input :value="old('gender')" type="text" name="gender" id="gender" aria-describedby="gender-error" />
                <x-form-error name="gender"></x-form-error>
            </x-form-field>

            <x-form-field>
                <x-form-label for="description">Description</x-form-label>
                <x-form-input :value="old('description')" type="text" name="description" id="description" aria-describedby="description-error" />
                <x-form-error name="description"></x-form-error>
            </x-form-field>

            <div id="image-preview" class="mt-4 hidden">
                <img id="preview" src="#" alt="Selected Image Preview" class="w-full rounded mb-2" />
                <button
                    type="button"
                    id="cancel-image"
                    class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    aria-label="Cancel selected image"
                >
                    Cancel Image
                </button>
            </div>

            <x-form-button>Submit</x-form-button>
        </form>
    </div>

    <script>
        const imageInput = document.getElementById('image');
        const preview = document.getElementById('preview');
        const previewContainer = document.getElementById('image-preview');
        const cancelButton = document.getElementById('cancel-image');

        imageInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    preview.src = reader.result;
                    previewContainer.classList.remove('hidden');
                };
                reader.readAsDataURL(file);
            }
        });

        cancelButton.addEventListener('click', () => {
            imageInput.value = '';
            preview.src = '#';
            previewContainer.classList.add('hidden');
        });
    </script>
</x-layout>
