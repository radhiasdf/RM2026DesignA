import { useState } from 'react';
import { Link } from 'react-router-dom';

import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

function Home() {
  const [query, setQuery] = useState("");

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(query.toLowerCase()) ||
    course.description.toLowerCase().includes(query.toLowerCase()) ||
    course.lessons.some(l => l.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search courses or lessons..."
        className="border px-4 py-2 mb-4 w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="grid gap-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p className="text-gray-500">No matching courses found.</p>
        )}
      </div>
    </>
  );
}



export default Home;
