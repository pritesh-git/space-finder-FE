import { NextResponse } from "next/server";
import data from "@/data/staticdata.json";

// GET all payments
export async function GET() {
  return NextResponse.json(data.payments);
}

// POST create new payment
export async function POST(request) {
  try {
    const newPayment = await request.json();

    // In a real app, you'd save to database
    const payment = {
      id: data.payments.length + 1,
      ...newPayment,
    };

    return NextResponse.json(
      {
        success: true,
        payment,
        message: "Payment recorded successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error recording payment:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error recording payment",
      },
      { status: 500 },
    );
  }
}
