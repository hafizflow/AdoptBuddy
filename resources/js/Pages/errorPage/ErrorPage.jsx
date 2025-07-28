// resources/js/Pages/ErrorPage.jsx
export default function ErrorPage({ status }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
            <h1 className="text-6xl font-bold text-red-600">Error {status}</h1>
            <p className="mt-4 text-lg text-gray-700">
                {status === 404 && "The page you are looking for was not found."}
                {status === 500 && "Something went wrong on our end."}
                {![404, 500].includes(status) && "An unexpected error occurred."}
            </p>
        </div>
    );
}
