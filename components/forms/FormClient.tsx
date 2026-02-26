'use client';
import { useState } from 'react';

export default function CarImportForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    carModel: '',
    originCountry: '',
    budget: '',
    deliveryAddress: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert('Your import request has been submitted!');
  };

  return (
    <form className="bg-white shadow-lg rounded-2xl p-10 max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
        Request International Car Import
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="name" placeholder="Full Name" onChange={handleChange} required
          className="p-4 border rounded-xl focus:ring-2 focus:ring-blue-500" />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required
          className="p-4 border rounded-xl focus:ring-2 focus:ring-blue-500" />
        <input name="phone" type="tel" placeholder="Phone Number" onChange={handleChange} required
          className="p-4 border rounded-xl focus:ring-2 focus:ring-blue-500" />
        <input name="carModel" placeholder="Car Make & Model" onChange={handleChange} 
          className="p-4 border rounded-xl focus:ring-2 focus:ring-blue-500" />
        <select name="originCountry" onChange={handleChange} required
          className="p-4 border rounded-xl focus:ring-2 focus:ring-blue-500">
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UAE">UAE</option>
          <option value="South Korea">South Korea</option>
          <option value="China">China</option>
        </select>
        <input name="budget" placeholder="Budget (₦)" onChange={handleChange} 
          className="p-4 border rounded-xl focus:ring-2 focus:ring-blue-500" />
      </div>

      <input name="deliveryAddress" placeholder="Delivery Address" onChange={handleChange} 
        className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500" />

      <button className="w-full bg-blue-600 text-white font-bold p-4 rounded-xl hover:bg-blue-700 transition">
        Request Quote
      </button>
    </form>
  );
}
