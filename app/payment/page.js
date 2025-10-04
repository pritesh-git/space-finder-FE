import PaymentTable from "@/components/PaymentTable";

async function getPayments() {
  const res = await fetch("http://localhost:3000/api/payments", {
    cache: "no-store",
  });

  if (!res.ok) {
    // Fallback to static data if API fails
    const data = await import("@/data/staticdata.json");
    return data.default.payments;
  }

  return res.json();
}

export default async function PaymentPage() {
  const payments = await getPayments();

  return <PaymentTable payments={payments} />;
}
