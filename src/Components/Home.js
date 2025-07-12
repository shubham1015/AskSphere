// home.js
import React, { useState } from 'react';

const tagsList = [
  'JavaScript', 'Python', 'Mathematics', 'React',
  'Machine Learning', 'Algorithms', 'CSS', 'HTML'
];

const initialQuestions = [
  {
    id: 1,
    title: 'How to manage state in large React applications?',
    description: "I'm building a complex React application and struggling with state management across multiple components. What are the best practices for managing state when the application grows large?",
    tags: ['JavaScript', 'React'],
    time: '2 hours ago',
    answers: 5,
    views: 12,
    user: 'JohnDoe'
  },
  {
    id: 2,
    title: 'Understanding eigenvalues and eigenvectors',
    description: 'Can someone explain eigenvalues and eigenvectors in simple terms? I\'m having trouble grasping the geometric interpretation of these concepts.',
    tags: ['Mathematics', 'Algebra'],
    time: '1 day ago',
    answers: 0,
    views: 24,
    user: 'MathStudent'
  },
  {
    id: 3,
    title: 'Best practices for feature engineering',
    description: 'What are some advanced feature engineering techniques that can improve model performance? I\'m working with structured data.',
    tags: ['Python', 'Machine Learning'],
    time: '3 days ago',
    answers: 3,
    views: 56,
    user: 'DataScientist'
  }
];

export default function Home() {
  const [showAskModal, setShowAskModal] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [titleInput, setTitleInput] = useState('');
  const [descInput, setDescInput] = useState('');
  const [questions, setQuestions] = useState(initialQuestions);

  const addTag = () => {
    if (tagInput && !selectedTags.includes(tagInput) && selectedTags.length < 5) {
      setSelectedTags([...selectedTags, tagInput]);
      setTagInput('');
    }
  };

  const handlePostQuestion = (e) => {
    e.preventDefault();
    if (titleInput && descInput && selectedTags.length > 0) {
      const newQuestion = {
        id: questions.length + 1,
        title: titleInput,
        description: descInput,
        tags: selectedTags,
        time: 'Just now',
        answers: 0,
        views: 0,
        user: 'Anonymous'
      };
      setQuestions([newQuestion, ...questions]);
      setTitleInput('');
      setDescInput('');
      setSelectedTags([]);
      setShowAskModal(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Knowledge Hub</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search questions..."
              className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => setShowAskModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Ask Question
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-4 gap-6">
        <div className="md:col-span-3 space-y-6">
          {questions.map((q) => (
            <div key={q.id} className="bg-white rounded-lg shadow-sm p-6 transition hover:shadow-md">
              <div className="flex justify-between">
                <div className="flex gap-2 mb-4">
                  {q.tags.map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <span className="text-sm text-gray-500">Asked {q.time}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{q.title}</h3>
              <p className="text-gray-600 mb-4">{q.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{q.answers} answers • {q.views} views</span>
                <span>{q.user}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="md:col-span-1 space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tagsList.map(tag => (
                <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Top Contributors</h3>
            <div className="space-y-3">
              {['JaneSmith', 'CodeMaster', 'MathWizard'].map((user, index) => (
                <div key={index} className="flex items-center">
                  <img src="https://placehold.co/40x40" className="w-8 h-8 rounded-full mr-3" alt="profile" />
                  <div>
                    <div className="font-medium">{user}</div>
                    <div className="text-sm text-gray-500">{(1200 - index * 200)} points</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {showAskModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Ask a Question</h2>
                <button onClick={() => setShowAskModal(false)} className="text-gray-500 hover:text-gray-700">✕</button>
              </div>
              <form onSubmit={handlePostQuestion}>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input type="text" className="w-full border px-3 py-2 rounded-md" value={titleInput} onChange={(e) => setTitleInput(e.target.value)} placeholder="What's your question? Be specific." required />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea className="w-full border px-3 py-2 rounded-md min-h-[100px]" value={descInput} onChange={(e) => setDescInput(e.target.value)} placeholder="Describe your issue in detail..." required></textarea>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Tags</label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {selectedTags.map((tag, idx) => (
                      <span key={idx} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      type="text"
                      className="border px-3 py-2 rounded-md w-full"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      placeholder="Add tag"
                    />
                    <button type="button" onClick={addTag} className="text-blue-600 hover:text-blue-800">Add</button>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Add up to 5 tags.</p>
                </div>
                <div className="flex justify-end gap-2">
                  <button type="button" onClick={() => setShowAskModal(false)} className="px-4 py-2 border rounded-md">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Post Question</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
