"use client";

import { AlertCircle, CheckCircle, XCircle } from "lucide-react";

export default function PaymentTable({ payments }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 min-w-11/12 mx-auto my-6">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold">Payment History</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="py-4 px-6 text-sm font-bold text-gray-900">
                Tenant
              </th>
              <th className="py-4 px-6 text-sm font-bold text-gray-900">
                Amount
              </th>
              <th className="py-4 px-6 text-sm font-bold text-gray-900">
                Date
              </th>
              <th className="py-4 px-6 text-sm font-bold text-gray-900">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => {
              let statusClass = "";
              if (payment.status === "Paid") {
                statusClass = "bg-green-100 text-green-700";
              } else if (payment.status === "Pending") {
                statusClass = "bg-yellow-100 text-yellow-700";
              } else {
                statusClass = "bg-red-100 text-red-700";
              }
              return (
                <tr
                  key={payment.id}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-6 font-medium text-gray-600">
                    {payment.tenant}
                  </td>
                  <td className="py-4 px-6 text-gray-600">
                    ${payment.amount.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-gray-600">{payment.date}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 mx-auto rounded-full text-xs font-medium flex items-center gap-1 w-fit ${statusClass}`}
                    >
                      {payment.status === "Paid" && (
                        <CheckCircle className="w-3 h-3" />
                      )}
                      {payment.status === "Pending" && (
                        <AlertCircle className="w-3 h-3" />
                      )}
                      {payment.status === "Overdue" && (
                        <XCircle className="w-3 h-3" />
                      )}
                      {payment.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
