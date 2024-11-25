'use client';

import UserForm from '@/components/Form';
import UserList from '@/components/List';
import { useState, useEffect } from 'react';


export default function UsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch users from the API
    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            const response = await fetch('https://next-crud-alpha-one.vercel.app/api/users');
            const data = await response.json();
            setUsers(data);
            setLoading(false);
        };
        fetchUsers();
    }, []);

    // Handle user creation
    const addUser = async (user) => {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        });
        const newUser = await response.json();
        setUsers([...users, newUser]);
    };

    // Handle user deletion
    const deleteUser = async (id) => {
        await fetch(`/api/users/${id}`, { method: 'DELETE' });
        setUsers(users.filter((user) => user._id !== id));
    };

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-2xl font-bold mb-5">User Management</h1>
            <UserForm onSubmit={addUser} />
            <UserList users={users} onDelete={deleteUser} loading={loading} />
        </div>
    );
}
