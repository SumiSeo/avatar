async function getPresentations() {
  const res = await fetch("http://localhost:4000/tickets", {
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
      {presentations.map((ticket: any) => (
        <div key={ticket.id}>{ticket.title}</div>
      ))}
    </>
  );
}
