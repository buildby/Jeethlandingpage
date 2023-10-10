import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  company?: string;
  mobile: string;
  comments: string;
};

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-full md:w-1/2 mb-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="w-full border p-2 rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block text-gray-700 text-sm">Company (Optional)</label>
          <input
            type="text"
            id="company"
            {...register("company")}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="w-full border p-2 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="mobile" className="block text-gray-700 text-sm">Mobile</label>
          <input
            type="tel"
            id="mobile"
            {...register("mobile", { required: true, pattern: /^[0-9]{10}$/i })}
            className="w-full border p-2 rounded"
          />
          {errors.mobile && <p className="text-red-500 text-sm">Mobile is required</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="comments" className="block text-gray-700 text-sm">Comments</label>
          <textarea
            id="comments"
            rows={4}
            {...register("comments", { required: true })}
            className="w-full border p-2 rounded"
          ></textarea>
          {errors.comments && (
            <p className="text-red-500 text-sm">Comments are required</p>
          )}
        </div>
        {/* Add reCAPTCHA here */}
        <button
          type="submit"
          className="bg-primary text-white p-2 rounded hover:bg-green-700 transition duration-300"
        >
          Submit
        </button>
      </form>
  );
}
