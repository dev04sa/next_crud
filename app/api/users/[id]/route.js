// app/api/users/[id]/route.js

import User from "@/lib/models/User";
import connectMongo from "@/lib/mongodb";


export async function PUT(req, { params }) {
    await connectMongo();
    const { id } = params;
    const body = await req.json();
    const updatedUser = await User.findByIdAndUpdate(id, body, { new: true });
    return new Response(JSON.stringify(updatedUser), { status: 200 });
}

export async function DELETE(req, { params }) {
    await connectMongo();
    const { id } = params;
    await User.findByIdAndDelete(id);
    return new Response(JSON.stringify({ message: 'User deleted' }), { status: 200 });
}
