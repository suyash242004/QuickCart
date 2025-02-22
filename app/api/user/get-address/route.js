import { getAuth } from "@clerk/nextjs/server";
import ConnectDB from "@/config/db";
import Address from "@/models/Address";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { userId } = getAuth(request);

    await ConnectDB();

    const addresses = await Address.find({ userId });

    return NextResponse.json({ success: true, addresses });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
