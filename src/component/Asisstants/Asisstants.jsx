import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Assistants() {
  const [assistants, setAssistants] = useState([]); // تخزين بيانات المساعدين
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // 🔹 جلب المساعدين عند تحميل الصفحة
  async function fetchAssistants() {
    setLoading(true);
    try {
      const { data } = await axios.get('https://bigbrotherv01.runasp.net/api/Assistants/getall');
      setAssistants(data);
    } catch (err) {
      setError('Failed to fetch assistants.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAssistants();
  }, []);

  // 🔹 تحديث القيم عند الإدخال
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // 🔹 إضافة مساعد جديد وتحديث الجدول فورًا
  async function addAssistant(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data } = await axios.post('https://bigbrotherv01.runasp.net/api/Assistants/add', formData);

      // ✅ تحديث القائمة مباشرة بإضافة المساعد الجديد
      setAssistants((prevAssistants) => [...prevAssistants, data]);

      // ✅ تصفية الفورم بعد الإضافة
      setFormData({ name: '', email: '', phone: '' });
    } catch (err) {
      setError('Failed to add assistant.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='bg-sky-200 min-h-screen flex flex-col items-center pt-10 px-5 pl-[250px]'>
      <h2 className='text-3xl font-bold text-gray-800 mb-6'>Assistants Management</h2>

      {/* ✅ فورم إضافة مساعد جديد */}
      <form onSubmit={addAssistant} className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md mb-6'>
        <h3 className='text-xl font-bold text-gray-700 mb-4'>Add New Assistant</h3>

        <label className='block text-gray-700 font-semibold mb-2'>Name:</label>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          className='w-full p-3 border rounded-md mb-3 focus:ring-2 focus:ring-sky-500'
          placeholder='Enter Name'
          required
        />

        <label className='block text-gray-700 font-semibold mb-2'>Email:</label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          className='w-full p-3 border rounded-md mb-3 focus:ring-2 focus:ring-sky-500'
          placeholder='Enter Email'
          required
        />

        <label className='block text-gray-700 font-semibold mb-2'>Phone:</label>
        <input
          type='text'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          className='w-full p-3 border rounded-md mb-3 focus:ring-2 focus:ring-sky-500'
          placeholder='Enter Phone'
          required
        />

        <button type='submit' className='w-full bg-sky-600 text-white py-2 rounded-md hover:bg-sky-700 transition duration-300'>
          Add Assistant
        </button>
      </form>

      {/* ✅ تحميل البيانات */}
      {loading && <p className='text-blue-600 mt-4'>Loading...</p>}

      {/* ✅ عرض الخطأ */}
      {error && <p className='text-red-500 mt-4'>{error}</p>}

      {/* ✅ عرض جدول المساعدين */}
      <div className='w-full max-w-3xl bg-white p-6 rounded-lg shadow-md'>
        <h3 className='text-2xl font-bold text-gray-800 mb-4'>Assistants List</h3>

        {assistants.length > 0 ? (
          <table className='w-full border-collapse border border-gray-300'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='border border-gray-300 px-4 py-2'>ID</th>
                <th className='border border-gray-300 px-4 py-2'>Name</th>
                <th className='border border-gray-300 px-4 py-2'>Email</th>
                <th className='border border-gray-300 px-4 py-2'>Phone</th>
              </tr>
            </thead>
            <tbody>
              {assistants.map((assistant) => (
                <tr key={assistant.id}>
                  <td className='border border-gray-300 px-4 py-2'>{assistant.id}</td>
                  <td className='border border-gray-300 px-4 py-2'>{assistant.name}</td>
                  <td className='border border-gray-300 px-4 py-2'>{assistant.email}</td>
                  <td className='border border-gray-300 px-4 py-2'>{assistant.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className='text-gray-600'>No assistants found.</p>
        )}
      </div>
    </div>
  );
}
