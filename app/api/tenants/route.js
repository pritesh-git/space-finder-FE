import data from "@/data/staticdata.json";
import { NextResponse } from "next/server";

// GET all tenants
export async function GET() {
  return NextResponse.json(data.tenants);
}

// POST create new tenant
export async function POST(request) {
  try {
    const newTenant = await request.json();

    // In a real app, you'd save to database
    // For now, just return success with the new tenant
    const tenant = {
      id: data.tenants.length + 1,
      ...newTenant,
    };

    return NextResponse.json(
      {
        success: true,
        tenant,
        message: "Tenant created successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating tenant:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error creating tenant",
      },
      { status: 500 },
    );
  }
}

// PUT update tenant
export async function PUT(request) {
  try {
    const updatedTenant = await request.json();

    // In a real app, you'd update in database
    return NextResponse.json({
      success: true,
      tenant: updatedTenant,
      message: "Tenant updated successfully",
    });
  } catch (error) {
    console.error("Error updating tenant:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error updating tenant",
      },
      { status: 500 },
    );
  }
}
