import TenantTable from "@/components/TenantTable";

async function getTenants() {
  const res = await fetch("http://localhost:3000/api/tenants", {
    cache: "no-store",
  });

  if (!res.ok) {
    // Fallback to static data if API fails
    const data = await import("@/data/staticdata.json");
    return data.default.tenants;
  }

  return res.json();
}

export default async function TenantsPage() {
  const tenants = await getTenants();

  return <TenantTable tenants={tenants} />;
}
