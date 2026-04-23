import { Link } from 'react-router-dom';

function CourseCard({ course }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{course.title}</h2>
      <p className="text-gray-600">{course.description}</p>
      <Link to={`/course/${course.id}`} className="text-blue-600 underline mt-2 inline-block">
        View Course →
      </Link>
    </div>
  );
}

export default CourseCard;
