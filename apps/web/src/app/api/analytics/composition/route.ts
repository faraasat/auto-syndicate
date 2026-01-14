import { NextResponse } from "next/server";

const PYTHON_API_URL = process.env.PYTHON_API_URL || "http://localhost:8000";

export async function GET() {
  try {
    const response = await fetch(
      `${PYTHON_API_URL}/api/analytics/composition`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Python API error: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Composition Analytics API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch composition data" },
      { status: 500 }
    );
  }
}
