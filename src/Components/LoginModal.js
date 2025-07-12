import React, { useState } from 'react';
import useModal from '../hooks/useModal';

export default function LoginModal({ onLogin }) {
  const { isOpen, open, close } = useModal();
  const [usern, setUsern] = useState('');
  const [pw, setPw] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (onLogin(usern, pw)) close();
  };

  return (
    <>
      {!isOpen && (
        <button onClick={open} className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg">
          Login
        </button>
      )}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="text-xl font-semibold mb-4">Login to Post</h2>
            <form onSubmit={submit}>
              <label className="block mb-2">
                Username
                <input type="text" required value={usern} onChange={e => setUsern(e.target.value)} className="w-full border rounded px-2 py-1 mt-1"/>
              </label>
              <label className="block mb-4">
                Password
                <input type="password" required value={pw} onChange={e => setPw(e.target.value)} className="w-full border rounded px-2 py-1 mt-1"/>
              </label>
              <div className="flex justify-end space-x-2">
                <button type="button" onClick={close} className="px-3 py-1 border rounded">X</button>
                <button type="submit" className="px-4 py-1 bg-blue-600 text-white rounded">Login</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
