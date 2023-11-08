'use client';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  company: string;
  state: string;
  city: string;
  email: string;
  mobile: string;
  foundVia?: string;
};

export const TryDemoForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto p-4">
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
        <label htmlFor="company" className="block text-gray-700 text-sm">Company</label>
        <input
          type="text"
          id="company"
          {...register("company", { required: true })}
          className="w-full border p-2 rounded"
        />
        {errors.company && <p className="text-red-500 text-sm">Company is required</p>}
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
        <label htmlFor="state" className="block text-gray-700 text-sm">State</label>
        <input
          type="text"
          id="state"
          {...register("state", { required: true })}
          className="w-full border p-2 rounded"
        />
        {errors.state && <p className="text-red-500 text-sm">State is required</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block text-gray-700 text-sm">City</label>
        <input
          type="text"
          id="city"
          {...register("city", { required: true })}
          className="w-full border p-2 rounded"
        />
        {errors.city && <p className="text-red-500 text-sm">City is required</p>}
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
        <label htmlFor="foundVia" className="block text-gray-700 text-sm">How did you find us? (optional)</label>
        <select id="foundVia" {...register('foundVia')} className="w-full border p-2 rounded">
          <option value="Internet">Internet</option>
          <option value="Social Media Ads">Social Media Ads</option>
          <option value="Referred by someone">Referred by someone</option>
          <option value="Others">Others</option>
        </select>
      </div>
      {/* Add reCAPTCHA here */}
      <button
        type="submit"
        className="bg-primary text-white p-2 rounded hover:bg-green-700 transition duration-300"
      >
        Submit
      </button>
    </form>
  )
}