import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding demo data...");

  // 1. Create Demo Arranger
  const arranger = await prisma.user.upsert({
    where: { email: "demo@autosyndicate.com" },
    update: {},
    create: {
      email: "demo@autosyndicate.com",
      name: "Demo Arranger",
      role: "ARRANGER",
      profile: {
        create: {
          company: "Goldman Sachs",
        }
      }
    },
  });

  console.log("✅ Created demo arranger");

  // 2. Create Lenders
  const lenders = [
    {
      name: "BlackRock Global",
      email: "lender1@blackrock.com",
      institutionName: "BlackRock",
      role: "LENDER",
    },
    {
      name: "JP Morgan Asset Mgmt",
      email: "lender2@jpmorgan.com",
      institutionName: "JP Morgan",
      role: "LENDER",
    },
    {
      name: "Allianz Real Estate",
      email: "lender3@allianz.com",
      institutionName: "Allianz",
      role: "LENDER",
    },
  ];

  for (const l of lenders) {
    await prisma.user.upsert({
      where: { email: l.email },
      update: {},
      create: {
        email: l.email,
        name: l.name,
        role: "LENDER",
        lenderProfile: {
          create: {
            institutionName: l.institutionName,
            institutionType: "ASSET_MANAGER",
          }
        }
      },
    });
  }

  console.log("✅ Created demo lenders");

  // 3. Create Sample Loan Request
  const loan = await prisma.loanRequest.create({
    data: {
      title: "Project Alpha - Solar Infrastructure",
      description: "500MW Solar Farm in Arizona. High ESG impact.",
      amount: 150000000,
      term: 60,
      interestRate: 5.5,
      purpose: "Solar Farm Construction",
      status: "ACTIVE",
      borrowerId: arranger.id, // Using arranger as borrower for demo
      esgScore: 92,
    },
  });

  console.log(`✅ Created demo loan: ${loan.title}`);
  console.log("🚀 Demo seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
