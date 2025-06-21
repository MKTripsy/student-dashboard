import pool from './db';

export async function getStudent(id: string) {
  const res = await pool.query('SELECT * FROM students WHERE id = $1', [id]);
  return res.rows[0];
}