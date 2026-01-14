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
      institution: "Goldman Sachs",
    },
  });

  console.log("✅ Created demo arranger");

  // 2. Create Lenders
  const lenders = [
    {
      name: "BlackRock Global",
      email: "lender1@blackrock.com",
      institution: "BlackRock",
      role: "LENDER",
    },
    {
      name: "JP Morgan Asset Mgmt",
      email: "lender2@jpmorgan.com",
      institution: "JP Morgan",
      role: "LENDER",
    },
    {
      name: "Allianz Real Estate",
      email: "lender3@allianz.com",
      institution: "Allianz",
      role: "LENDER",
    },
  ];

  for (const l of lenders) {
    await prisma.user.upsert({
      where: { email: l.email },
      update: {},
      create: l, // @ts-ignore
    });
  }

  console.log("✅ Created demo lenders");

  // 3. Create Sample Deal
  const deal = await prisma.deal.create({
    data: {
      title: "Project Alpha - Solar Infrastructure",
      description: "500MW Solar Farm in Arizona. High ESG impact.",
      amount: 150000000,
      minParticipation: 5000000,
      interestRate: 5.5,
      maturityDate: new Date("2029-12-31"),
      status: "OPEN",
      borrower: "Alpha Energy Ltd",
      sector: "Energy",
      region: "North America",
      arrangerId: arranger.id,
      esgScore: 92,
    },
  });

  console.log(`✅ Created demo deal: ${deal.title}`);
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
