import React, { useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import Menu from '../Menu';

const App = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post('https://chatgpt-backend-repo.vercel.app/message', { message : input });
      setResponse(res.data.result);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (<>
    <Menu />
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Ai Chat</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your message"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Send
                </button>
              </form>
              {isLoading && (
                <div className="text-center mt-3">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
              {response && !isLoading && (
                <div className="mt-3">
                  <div className="alert alert-success" role="alert">
                    {response}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default App;
