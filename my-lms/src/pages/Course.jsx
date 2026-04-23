import { useParams } from 'react-router-dom';
import { courses } from '../data/courses';
import { lessonData } from '../data/lessons';

function Course() {
  const { id } = useParams();
  const course = courses.find(c => c.id === Number(id));
  const lessons = lessonData[id] || [];

  if (!course) return <p>Course not found.</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
      <div className="space-y-3">
        {lessons.map(lesson => (
          <div key={lesson.id} className="p-4 border rounded bg-gray-50">
            <h3>{lesson.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
