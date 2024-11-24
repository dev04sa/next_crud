'use client';

import Link from 'next/link';

export default function UserList({ users, onDelete, loading }) {
    if (loading) {
        return <div>Loading...</div>;
    }

    if (users.length === 0) {
        return <div>No users found.</div>;
    }

    return (
        <ul className="space-y-4">
            {users.map((user) => (
                <li key={user._id} className="border p-4 rounded shadow">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-lg font-bold">{user.name}</h2>
                            <p>{user.email}</p>
                        </div>
                        <div className="space-x-2">
                            <Link
                                href={`/users/${user._id}/`}
                                className="text-blue-500 hover:underline"
                            >
                                Edit
                            </Link>
                            <button
                                onClick={() => onDelete(user._id)}
                                className="text-red-500 hover:underline"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
