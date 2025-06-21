import pool from '@/lib/db';

async function getStudents() {
  const res = await pool.query('SELECT * FROM students');
  return res.rows;
}

export default async function Students() {
  const students = await getStudents();

  return (
    <main>
      <h1>All Students</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <a href={`/students/${student.id}`}>{student.name}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}