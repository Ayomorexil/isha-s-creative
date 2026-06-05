import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="py-20 px-6 bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-12">
        Contact Us
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto space-y-4"
      >
        <input
          {...register("name")}
          placeholder="Your Name"
          className="input input-bordered w-full"
        />

        <input
          {...register("email")}
          placeholder="Email"
          className="input input-bordered w-full"
        />

        <textarea
          {...register("message")}
          placeholder="Message"
          className="textarea textarea-bordered w-full"
        />

        <button className="btn btn-primary w-full">
          Send Message
        </button>
      </form>
    </section>
  );
}