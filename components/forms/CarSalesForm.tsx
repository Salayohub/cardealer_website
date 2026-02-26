'use client';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function CarSalesForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    carModel: '',
    budget: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic (API call or email)
    toast.success('Request submitted successfully!');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-xl p-8 max-w-xl mx-auto space-y-6"
    >
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
        Request a Premium Car
      </h2>

      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500"
        required
      />

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email Address"
        className="w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500"
        required
      />

      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className="w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500"
        required
      />

      <input
        type="text"
        name="carModel"
        value={form.carModel}
        onChange={handleChange}
        placeholder="Desired Car Model"
        className="w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500"
      />

      <input
        type="text"
        name="budget"
        value={form.budget}
        onChange={handleChange}
        placeholder="Budget (₦)"
        className="w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500"
      />

      <button
        type="submit"
        className="w-full bg-red-600 text-white p-4 rounded-xl font-bold hover:bg-red-700 transition"
      >
        Submit Request
      </button>
    </form>
  );
}
