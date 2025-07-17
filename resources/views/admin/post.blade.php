<x-layout>
    <div class="mt-12 sm:mx-auto sm:w-full sm:max-w-md bg-white p-8 shadow-lg rounded-xl">
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-8">Add New Pet</h2>

        <form class="space-y-6" action="/admin" method="POST" enctype="multipart/form-data" aria-label="Create new item">
            @csrf

            {{-- Name --}}
            <x-form-field>
                <x-form-label for="name">Name</x-form-label>
                <x-form-input :value="old('name')" type="text" name="name" id="name" aria-describedby="name-error" />
                <x-form-error name="name" />
            </x-form-field>

            {{-- Age --}}
            <x-form-field>
                <x-form-label for="age">Age</x-form-label>
                <x-form-input :value="old('age')" type="number" name="age" id="age" aria-describedby="age-error" />
                <x-form-error name="age" />
            </x-form-field>


            {{-- Image Preview --}}
            <div id="image-preview" class="mt-4 hidden">
                <img id="preview" src="#" alt="Selected Image Preview" class="w-full rounded-xl border mb-3 shadow" />
                <button
                    type="button"
                    id="cancel-image"
                    class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
                    aria-label="Cancel selected image"
                >
                    Cancel Image
                </button>
            </div>

            {{-- Upload Image --}}
            <x-form-field>
                <x-form-label for="images">Upload Images</x-form-label>

                <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-300 bg-white px-6 py-10 shadow-sm">
                    <div class="text-center">
                        <svg class="mx-auto h-12 w-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" d="M1.5 6A2.25 2.25 0 013.75 3.75h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zm1.5 10.06V18a.75.75 0 00.75.75h16.5a.75.75 0 00.75-.75v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd"/>
                        </svg>
                        <div class="mt-4 flex text-sm text-gray-600">
                            <label for="images" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 hover:text-indigo-500">
                                <span>Upload a file</span>
                                <input id="images" name="images[]" type="file" class="sr-only" accept="image/*" multiple>
                            </label>
                            <p class="pl-1">or drag and drop</p>
                        </div>
                        <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>

                <x-form-error name="images" />
            </x-form-field>

            {{-- Size --}}
            <x-form-field>
                <x-form-label for="size">Size</x-form-label>
                <x-form-input :value="old('size')" type="text" name="size" id="size" aria-describedby="size-error" />
                <x-form-error name="size" />
            </x-form-field>

            {{-- Breed --}}
            <x-form-field>
                <x-form-label for="breed">Breed</x-form-label>
                <x-form-input :value="old('breed')" type="text" name="breed" id="breed" aria-describedby="breed-error" />
                <x-form-error name="breed" />
            </x-form-field>

            {{-- Gender --}}
            <x-form-field>
                <x-form-label for="gender">Gender</x-form-label>
                <x-form-input :value="old('gender')" type="text" name="gender" id="gender" aria-describedby="gender-error" />
                <x-form-error name="gender" />
            </x-form-field>

            {{-- Description --}}
            <x-form-field>
                <x-form-label for="description">Description</x-form-label>
                <x-form-input :value="old('description')" type="text" name="description" id="description" aria-describedby="description-error" />
                <x-form-error name="description" />
            </x-form-field>

            {{-- Submit Button --}}
            <x-form-button class="w-full">Submit</x-form-button>
        </form>
    </div>

    {{-- Image Preview Script --}}
    <script>
        const imageInput = document.getElementById('images'); // ✅ fixed ID
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
