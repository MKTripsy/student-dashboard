import { getStudent } from "@/lib/queries";

export default async function StudentPage({
  params,
}: {
  params: { id: string };
}) {
  const student = await getStudent(params.id);

  if (!student) return <p>Student not found</p>;

  return (
    <main>
      <h1>{student.name}</h1>
      <p>Email: {student.email}</p>
      <p>Course: {student.course}</p>
    </main>
  );
}