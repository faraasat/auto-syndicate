import { NextResponse } from "next/server";
import { prisma } from "@autosyndicate/database";

export async function POST(req: Request) {
  try {
    const { email, password, firstName, lastName, company, role } =
      await req.json();

    // Validate input
    if (!email || !password || !firstName || !lastName || !role) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // Map role string to Enum
    // Form sends lowercase, schema expects uppercase Enum keys
    const roleUpper = role.toUpperCase();
    const validRoles = ["ADMIN", "BORROWER", "LENDER", "ARRANGER"];
    const userRole = validRoles.includes(roleUpper) ? roleUpper : "LENDER";

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password, // In production, hash this!
        name: `${firstName} ${lastName}`,
        role: userRole,
        profile: {
          create: {
            company: company || "",
          },
        },
      },
    });

    return NextResponse.json({
      message: "User created successfully",
      user: { id: user.id, email: user.email, name: user.name },
    });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
