import data from "@/data/staticdata.json";
import { DollarSign, Users, Wrench } from "lucide-react";

export default function OverallPage() {
  const totalPayments = data.payments.reduce((acc, p) => acc + p.amount, 0);
  const activeWorkOrders = data.workOrders.length;

  return (
    <div className="space-y-6 min-w-11/12 mx-auto my-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full max-w-[90vw] mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Tenants</p>
              <h3 className="text-3xl font-bold m-2 mb-0 text-left">
                {data.tenants.length}
              </h3>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full max-w-[90vw] mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Payments</p>
              <h3 className="text-3xl font-bold m-2 mb-0 text-left">
                ${totalPayments.toLocaleString()}
              </h3>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full max-w-[90vw] mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Work Orders</p>
              <h3 className="text-3xl font-bold m-2 mb-0 text-left">
                {activeWorkOrders}
              </h3>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <Wrench className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Work Orders Table */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-[90vw] mx-auto">
        <h3 className="text-lg font-bold mb-4">Active Work Orders</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  SL
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Tenant Name
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Company Name
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Issue
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Date
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {data.workOrders.map((order, index) => {
                let statusClass = "";
                if (order.status === "Contacted") {
                  statusClass = "bg-blue-100 text-blue-700";
                } else if (order.status === "Pending") {
                  statusClass = "bg-yellow-100 text-yellow-700";
                } else {
                  statusClass = "bg-gray-100 text-gray-700";
                }
                return (
                  <tr
                    key={order.id}
                    className="border-b hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-4 text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </td>
                    <td className="py-3 px-4">{order.tenant}</td>
                    <td className="py-3 px-4">{order.company}</td>
                    <td className="py-3 px-4">{order.issue}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${statusClass}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{order.date}</td>
                    <td className="py-3 px-4">{order.time}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
