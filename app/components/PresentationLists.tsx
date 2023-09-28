async function getPresentations() {
  const res = await fetch("http://localhost:4000/projects", {
    next: {
      revalidate: 0,
    },
  });
  return await res.json();
}

export default async function PresentationLists() {
  const presentations = await getPresentations();
  return (
    <>
      {presentations.map((project: any) => (
        <div key={project.id}>{project.title}</div>
      ))}
    </>
  );
}
