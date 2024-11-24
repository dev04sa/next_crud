'use client';

import UserForm from '@/components/Form';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function EditUserPage({ params }) {
    // Destructure the params directly, no need for async/await here
    const { id } = params;

    // State for user data
    const [user, setUser] = useState(null);
    const router = useRouter();

    // Fetch user data when component mounts
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`/api/users/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, [id]); // Depend on `id` to refetch if it changes

    // Function to update the user
    const updateUser = async (updatedUser) => {
        try {
            const response = await fetch(`/api/users/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedUser),
            });
            if (!response.ok) {
                throw new Error('Failed to update user');
            }
            router.push('/users');
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    if (!user) return <div>Loading...</div>;  // Show loading until user data is fetched

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-2xl font-bold mb-5">Edit User</h1>
            <UserForm initialData={user} onSubmit={updateUser} />
        </div>
    );
}
