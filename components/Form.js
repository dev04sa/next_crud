'use client';

import { useState } from 'react';

export default function UserForm({ onSubmit, initialData = {} }) {
    const [name, setName] = useState(initialData.name || '');
    const [email, setEmail] = useState(initialData.email || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, email });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-10">
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </form>
    );
}
