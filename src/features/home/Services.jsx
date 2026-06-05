const services = [
  {
    title: "UI/UX Design",
    desc: "Clean, modern interfaces that convert users.",
  },
  {
    title: "Web Development",
    desc: "Fast, scalable, production-ready apps.",
  },
  {
    title: "Brand Identity",
    desc: "Stand out with a powerful brand system.",
  },
];

export default function Services() {
  return (
    <section className="py-20 px-6 bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-12">
        What We Do
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-base-100 shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="mt-3 text-gray-500">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}