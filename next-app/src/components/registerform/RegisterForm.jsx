"use client"

import {  useState } from 'react';

import { registerPostRequest } from '@/api/post';
import { useAuth } from '@/app/context/AuthContext';
import { redirect } from 'next/navigation';
import { redirects } from '../../../next.config';


export default function LoginForm() {

  const { user, login } = useAuth(); 
  const [error, setError] = useState(null);


  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name:'',
    rol:0
  });


  const handleRegister = async (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      photo: `https://avatars.dicebear.com/api/open-peeps/${formData.name}.svg`
    };
  
    const res = await registerPostRequest(updatedFormData);
    

     if (res.ok) {

      //  login(data)
      
      //  setError(null);
      window.location.href = '/';
      } else {
       setError('Registro invalido');
     }
    
     console.log(res);
  };

 
  
  

  return (
    <div>
      {!user ? ( <section className="flex justify-center items-center h-screen">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-2xl mb-4">Registrarse</h2>
            <form onSubmit={handleRegister}>
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
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
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
                Registrarse
              </button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
          </div>
        </section>) : (

<div>POOP</div>

      )}
       
     
    </div>
  );
}
