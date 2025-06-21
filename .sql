CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  course TEXT NOT NULL
);


INSERT INTO students (name, email, course)
VALUES ('John Max', 'johnmax@email.com', 'Computer Science'),
('John Doe', 'johndoe@email.com', 'Architecture'),
('Jane Doe', 'janedoe@email.com', 'Animation'),
('Jane Max', 'janemax@email.com', 'Graphic Design'),
('Max Doe', 'maxdoe@email.com', 'Graphic Design');