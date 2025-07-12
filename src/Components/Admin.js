import React from 'react';

const questions = [{ id:1, title:'...' }];
export default function Admin() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      {questions.map(q => (
        <div key={q.id} className="bg-white shadow rounded p-4 mb-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold">{q.title}</span>
            <div>
              <button className="text-red-600 mr-2">Delete</button>
              <button className="text-gray-600">Edit</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
