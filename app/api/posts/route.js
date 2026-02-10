import { NextResponse } from "next/server"
import connect from "../../../ults/db";
import Post from "../../../src/models/post";

export const GET = async (request)=>{
try {
  await connect();
  const posts = await Post.find();
  return new NextResponse(posts, {status:200})
 }
 catch (error) {
   return new NextResponse("Database error", {status: 500})
}
    
}