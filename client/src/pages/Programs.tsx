import { useEffect, useState } from "react";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data: Program[]) => setPrograms(data));
  }, []);

  return (
    <div>
      <h1>Programs</h1>

      {programs.map((program) => (
        <div key={program.id}>
          <h2>{program.title}</h2>
          <p>{program.synopsis}</p>
          <p>
            {program.country} - {program.year}
          </p>
          <img src={program.poster} alt={program.title} width="200" />
        </div>
      ))}
    </div>
  );
}

export default Programs;
