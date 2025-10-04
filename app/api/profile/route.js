import data from "@/data/staticdata.json";
import { NextResponse } from "next/server";

// GET profile
export async function GET() {
  return NextResponse.json(data.profile);
}

// PUT update profile
export async function PUT(request) {
  try {
    const updatedProfile = await request.json();

    // In a real app, you'd update in database
    return NextResponse.json({
      success: true,
      profile: updatedProfile,
      message: "Profile updated successfully",
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error updating profile",
      },
      { status: 500 },
    );
  }
}
