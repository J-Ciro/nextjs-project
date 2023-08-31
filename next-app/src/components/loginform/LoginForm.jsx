"use client"

import {useState } from 'react';

import { loginPostRequest } from '@/api/post';
import { useAuth } from '@/app/context/AuthContext';


export default function LoginForm() {

  const { user, login } = useAuth(); 
  const [error, setError] = useState(null);


  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const res = await loginPostRequest(formData);
    const data = await res.json();
  
    if (res.ok) {
      login(data); // Use the login function from the context
      setError(null);
    } else {
      setError('Credenciales inválidas');
    }
  };
  

  // const isLoggedIn = !!token;


  

  return (
    <div>
      {!user ? (
        <section className="flex justify-center items-center h-screen">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-2xl mb-4 text-green-800">Ingresar</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1 px-4 py-2 w-full border rounded-lg focus:ring focus:border-blue-300 text-gray-800"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="mt-1 px-4 py-2 w-full border rounded-lg focus:ring focus:border-blue-300 text-gray-800"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
              >
                Login
              </button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
          </div>
        </section>
      ) : (
        <section className="flex justify-center items-center h-screen">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-2xl mb-4 text-green-800">Bienvenid@ {user.email}</h2>
            <figure>
              <img src={user.photo} alt="" className="rounded-full w-20 h-20 mx-auto mb-4" />
            </figure>
            <span className="block text-center text-gray-800">{user.name}</span>
            <span className="block text-center mt-2 text-gray-800"></span>
          </div>
        </section>
      )}
    </div>
  );
}
