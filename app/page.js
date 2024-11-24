import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="container mx-auto py-10 text-center">
            <h1 className="text-4xl font-bold mb-5">Welcome to the User Management App</h1>
            <p className="text-lg mb-8">
                Manage your users efficiently. Create, update, and delete user information with ease.
            </p>
            <Link
                href="/users"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Go to User Management
            </Link>
        </div>
    );
}
