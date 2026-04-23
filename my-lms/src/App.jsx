import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Course from './pages/Course';
import './App.css';

function App() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">📚 My LMS</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<Course />} />
      </Routes>
    </div>
  );
}

export default App;
