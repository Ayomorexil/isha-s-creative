import { useQuery } from "@tanstack/react-query";

const fetchProjects = async () => {
  return [
    { id: 1, name: "Landing Page Design" },
    { id: 2, name: "Crypto Dashboard" },
  ];
};

export default function Portfolio() {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  if (isLoading) return <p className="text-center py-10">Loading...</p>;

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Work
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {data.map((project) => (
          <div
            key={project.id}
            className="p-8 rounded-2xl bg-base-200 hover:shadow-xl transition"
          >
            {project.name}
          </div>
        ))}
      </div>
    </section>
  );
}