import { Wrench } from "lucide-react";

export default function RepairmanPage() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center min-w-11/12 mx-auto my-6">
      <div className="max-w-md mx-auto">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Wrench className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Premium Feature</h2>
        <p className="text-gray-600 mb-8">
          Subscribe to access our repairman management system. Track work
          orders, manage contractors, and streamline maintenance requests.
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow cursor-pointer">
          Subscribe Now
        </button>
        <p className="text-sm text-gray-500 mt-3">Starting at $29/month</p>
      </div>
    </div>
  );
}
