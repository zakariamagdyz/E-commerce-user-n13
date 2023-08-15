import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export const OPTIONS = async () => {
  return NextResponse.json({}, { headers: corsHeaders });
};

// e.g a webhook to `your-website.com/api/revalidate?path=/product/[productId]&secret=<token>`
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const path = request.nextUrl.searchParams.get("path");

  if (secret !== process.env.REVALIDATE_SECRET_TOKEN) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401, headers: corsHeaders });
  }

  if (!path) {
    return NextResponse.json({ message: "Missing path param" }, { status: 400, headers: corsHeaders });
  }

  revalidatePath(path);

  return NextResponse.json({ revalidated: true, now: Date.now() }, { headers: corsHeaders });
}
