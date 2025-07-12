import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const tagsList = [
  'JavaScript',
  'React',
  'Machine Learning',
  'CSS',
  'HTML',
  'Python',
  'Databases',
  'Algorithms'
];


export default function Form({ user }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const navigate = useNavigate();

  const addTag = () => {
    if (selectedTags.length < 5 && !selectedTags.includes(desc)) setSelectedTags([...selectedTags, desc]);
  };

  const submit = e => {
    e.preventDefault();
    // push new question
    alert('Question posted by ' + user);
    navigate('/');
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <form onSubmit={submit} className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-2xl font-semibold">Ask a Question</h2>
        <label className="block">
          Title
          <input required className="w-full border rounded px-3 py-2 mt-1" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label className="block">
          Description
          <textarea required className="w-full border rounded px-3 py-2 mt-1" value={desc} onChange={e => setDesc(e.target.value)} />
        </label>
        <label className="block">
          Tags
          <div className="flex gap-2 flex-wrap mt-1">
            {tagsList.map(tag => (
              <button key={tag} type="button" onClick={() => selectedTags.length <5 && !selectedTags.includes(tag) && setSelectedTags([...selectedTags, tag])}
                className={`px-2 py-1 border rounded-full ${selectedTags.includes(tag) ? 'bg-blue-200' : 'bg-gray-100'}`}>
                {tag}
              </button>
            ))}
          </div>
        </label>
        <div>
          Selected: {selectedTags.join(', ')}
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Post</button>
      </form>
    </div>
  );
}
