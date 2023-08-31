import React, { useState } from "react";
import { useAuth } from "../../app/context/AuthContext"
import { createPostRequest } from "@/api/post";
export default function ModalNewPost() {
  const [open, setOpen] = useState(false);

  const { user } = useAuth();
  

  const [formData, setFormData] = useState({
    photo: user.photo,
    name: user.name,
    email: user.email,
    title: "",
    description: "",
    likes: 0,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpen(false);
    const res = await createPostRequest(formData);
    const data = await res.json()
    console.log(data)
};

console.log(formData)
  return (
    <>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
            <div className="modal-header flex justify-between">
              <h2 className="text-lg font-semibold text-gray-800">Crear nuevo post</h2>
              <button
                type="button"
                className="modal-close h-7 bg-red-800"
                aria-label="Cerrar"
                onClick={handleClose}
                
              >
                X
                <svg className="bi bi-x" viewBox="0 0 16 16">
                  {/* SVG path here */}
                </svg>
              </button>
            </div>
            <div className="modal-content mt-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Título
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Título"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="mt-1 px-4 py-2 block w-full border rounded-lg focus:outline-none focus:border-blue-500 text-gray-800"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Contenido
                  </label>
                  <textarea
                    name="description"
                    placeholder="Contenido"
                    value={formData.content}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="mt-1 px-4 py-2 block w-full border rounded-lg focus:outline-none focus:border-blue-500 text-gray-800"
                    rows="4"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="">
       
        <button
          onClick={handleOpen}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          +
        </button>
      </div>
    </>
  );
}
