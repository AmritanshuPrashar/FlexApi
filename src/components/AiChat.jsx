import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const App = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post('https://gemini-ask-server.onrender.com/ask', { prompt: input });
      setResponse(res.data.Response); // Fixed response data key
      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const checkStatus = async () => {
    try {
      const res = await axios.get('https://gemini-ask-server.onrender.com/check');
      if (res.status === 200 && res.data.status === "ok") {
        setStatus('ok');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center px-6 py-4 bg-gray-800">
          <h2 className="text-3xl font-bold text-white text-center">AiChat</h2>
          <div className="ml-auto text-white text-lg">{moment().format('MMMM Do YYYY, h:mm a')}</div>
        </div>
        <div className="py-4 px-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                className="bg-gray-200 rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-gray-100 transition-all duration-300"
                placeholder="Enter your message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="w-full bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-600 transition-all duration-300">
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white inline-block mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4zm-2-5.291A7.962 7.962 0 0120 12h4c0-3.042-1.135-5.824-3-7.938l-3 2.647z"
                  ></path>
                </svg>
              ) : (
                'Send'
              )}
            </button>
          </form>
          {response && !isLoading && (
            <div className="mt-4 max-h-48 overflow-y-auto bg-gray-200 rounded-lg px-4 py-2">
              <pre className="whitespace-pre-wrap">{response}</pre>
            </div>
          )}
          <button
            onClick={checkStatus}
            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-all duration-300"
          >
            Check AI Status
          </button>
          {status && (
            <div className="mt-4 flex items-center justify-center">
              {status === 'ok' ? (
                <div className="flex items-center text-green-500">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  AI is working fine
                </div>
              ) : (
                <div className="flex items-center text-red-500">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  Something's wrong
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
