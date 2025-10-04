"use client";

export default function TenantTable({ tenants }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 w-11/12 mx-auto my-6">
      <div className="m-6 border-b">
        <h2 className="text-3xl font-bold">Tenants</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="py-4 px-6  text-md font-bold text-gray-900">
                Name
              </th>
              <th className="py-4 px-6  text-md font-bold text-gray-900">
                Email
              </th>
              <th className="py-4 px-6  text-md font-bold text-gray-900">
                Phone
              </th>
              <th className="py-4 px-6  text-md font-bold text-gray-900">
                Property
              </th>
              <th className="py-4 px-6  text-md font-bold text-gray-900">
                Status
              </th>
              <th className="py-4 px-6  text-md font-bold text-gray-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tenants.map((tenant) => (
              <tr
                key={tenant.id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 px-6 font-medium text-gray-800">
                  {tenant.name}
                </td>
                <td className="py-4 px-6 text-gray-800">{tenant.email}</td>
                <td className="py-4 px-6 text-gray-800">{tenant.phone}</td>
                <td className="py-4 px-6 text-gray-800">{tenant.property}</td>
                <td className="py-4 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      tenant.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {tenant.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex justify-center-safe gap-2">
                    <button className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors">
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-purple-500 text-white rounded-lg text-sm hover:bg-purple-600 transition-colors">
                      Update
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
