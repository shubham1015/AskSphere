import React from 'react';
import { useParams, Link } from 'react-router-dom';

const mockAnswers = [{ author:'Alice', text:'Sample answer' }];
export default function AnswerPage({ user }) {
  const { id } = useParams();
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Question #{id}</h2>
      {/* mock content */}
      <div className="space-y-4">
        {mockAnswers.map((a,i) => (
          <div key={i} className="bg-white shadow rounded p-4">
            <div className="font-medium">{a.author}</div>
            <div>{a.text}</div>
          </div>
        ))}
      </div>
      {user
        ? <div className="mt-6"> {/* form for posting answer */} </div>
        : <p className="mt-6 text-gray-600">Login to post an answer.</p>
      }
      <Link to="/" className="mt-4 inline-block text-blue-600">← Back to Questions</Link>
    </div>
  );
}
