// ProjectOverviews.tsx
import { getAllPosts } from "@/utils";
import ProjectCard, { IProjectCard } from "./ProjectCard";
// import Link from "next/link";

export default async function ProjectOverviews() {
  let frontMatters = await getAllPosts();
  // filter posts with metadata.published
  frontMatters = frontMatters.filter((fm) => fm.metadata.published === "true");
  // order frontMatter according to metadata.date
  frontMatters = frontMatters.sort((a, b) => {
    return (
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    );
  });

  const projectCardProps: IProjectCard[] = frontMatters.map((fm) => {
    return {
      title: fm.metadata.title,
      description: fm.metadata.description,
      image: fm.metadata.image,
      // url: "/projects/" + fm.slug,
      url: fm.metadata.webLink,
    };
  });

  return (
    <div className="container mx-auto pt-40 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-10 max-w-[1200px]">
      {projectCardProps.map((props, i) => (
        <ProjectCard key={i} props={props} />
      ))}
    </div>
  );
}
