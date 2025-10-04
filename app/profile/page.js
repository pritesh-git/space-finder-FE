"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading profile:", err);
        setLoading(false);
      });
  }, []);

  const handleSave = async () => {
    try {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      });

      if (response.ok) {
        alert("Profile updated successfully!");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">Error loading profile</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 min-w-11/12 mx-auto my-6">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold">My Profile</h2>
      </div>
      <div className="p-6 space-y-6">
        {/* Profile Picture */}
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            {profile.name?.charAt(0)}
          </div>
          <button
            type="button"
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            Change Photo
          </button>
        </div>

        {/* Profile Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="profile-name"
              className="block text-left text-md font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              id="profile-name"
              type="text"
              value={profile.name || ""}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="profile-email"
              className="block text-left text-md font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              id="profile-email"
              type="email"
              value={profile.email || ""}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="profile-phone"
              className="block text-left text-md font-medium text-gray-700 mb-2"
            >
              Phone
            </label>
            <input
              id="profile-phone"
              type="tel"
              value={profile.phone || ""}
              onChange={(e) =>
                setProfile({ ...profile, phone: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="profile-password"
              className="block text-left text-md font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              id="profile-password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Payment Information */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="payment-method"
                className="block text-left text-md font-medium text-gray-700 mb-2"
              >
                Payment Method
              </label>
              <select
                id="payment-method"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option>Credit Card</option>
                <option>PayPal</option>
                <option>Bank Transfer</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="card-number"
                className="block text-left text-md font-medium text-gray-700 mb-2"
              >
                Card Number
              </label>
              <input
                id="card-number"
                type="text"
                placeholder="**** **** **** ****"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleSave}
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
          >
            Save Changes
          </button>
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
