import styles from "../styles/components/PresentationBar.module.scss";

//comp
import PresentationLink from "./PresentationLink";

async function getProjects() {
  const response = await fetch("http://localhost:4000/projects", {
    next: {
      revalidate: 60,
    },
  });
  return await response.json();
}

export default async function PresentationBar() {
  const projects = await getProjects();

  return (
    <div className={styles.bar}>
      {projects.map((project: any) => {
        return (
          <div key={project.id} className={styles.bar__link}>
            <PresentationLink name={project.title} />
          </div>
        );
      })}
    </div>
  );
}
