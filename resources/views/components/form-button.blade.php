
<button {{ $attributes->merge(["class" => "flex w-full justify-center rounded-md bg-[rgb(230,165,70)] px-3 py-1.5 text-sm/6 font-semibold text-[rgb(74,38,22)] shadow-xs hover:bg-[rgb(243,179,87)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", "type" => "submit"]) }}>{{ $slot }}</button>
