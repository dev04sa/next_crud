import User from "@/lib/models/User";
import connectMongo from "@/lib/mongodb";


export async function GET() {
    await connectMongo();
    const users = await User.find({});
    return new Response(JSON.stringify(users), { status: 200 });
}




export async function POST(req) {
    await connectMongo();
    const body = await req.json();
    const user = await User.create(body);
    return new Response(JSON.stringify(user), { status: 201 });
}
