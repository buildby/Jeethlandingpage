'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { ContactFormState, ContactFormType, submitForm } from '../store/slices/contact-form.slice';

type Inputs = {
  name: string;
  email: string;
  company?: string;
  phone: string;
  message: string;
};

export default function ContactForm({ className = '' }) {
  const disptach = useAppDispatch();
  const formSubmitStatus = useAppSelector(state => state.contactForm.status);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormState>();

  const onSubmit: SubmitHandler<ContactFormState> = async (data) => {
    try {
      const contactFormData: ContactFormState = {
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        message: data.message,
        form_type: ContactFormType.CONTACT
      }
      console.log(contactFormData);
      disptach(submitForm(contactFormData));

      // if dispatch is successful, clear the form fields
      if (formSubmitStatus === 'submitted') {
        console.log('Form submitted successfully');
        reset({ name: "", company: "", email: "", phone: "", state: "", city: "", found_via: "", message: "" });
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${className} flex flex-col p-4`}>
      
      <div className="mb-4">
        <label htmlFor="name" className={`block text-gray-700 text-sm ${errors.name ? 'text-red-500' : ''}`}>Name</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
          className={`w-full border-b py-1 focus:outline-none ${errors.name ? 'border-red-500' : ''}`}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="company" className={`block text-gray-700 text-sm ${errors.company ? 'text-red-500' : ''}`}>Company</label>
        <input
          type="text"
          id="company"
          {...register("company", { required: true })}
          className={`w-full border-b py-1 focus:outline-none ${errors.company ? 'border-red-500' : ''}`}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className={`block text-gray-700 text-sm ${errors.email ? 'text-red-500' : ''}`}>Email</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i })}
          className={`w-full border-b py-1 focus:outline-none ${errors.email ? 'border-red-500' : ''}`}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className={`block text-gray-700 text-sm ${errors.phone ? 'text-red-500': ''}`}>Phone</label>
        <input
          type="tel"
          id="phone"
          {...register("phone", { required: true, pattern: /^[0-9]{10}$/i })}
          className={`w-full border-b py-1 focus:outline-none ${errors.phone ? 'border-red-500' : ''}`}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="comments" className={`block text-gray-700 text-sm ${errors.message ? 'text-red-500': ''}`}>Message</label>
        <textarea
          id="comments"
          rows={3}
          {...register("message", { required: true })}
          className={`w-full border-b py-1 focus:outline-none ${errors.message ? 'border-red-500' : ''}`}
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="bg-secondary text-white mx-auto mt-4 w-max px-16 py-2 rounded-full hover:bg-primary transition duration-300"
      >
        Submit
      </button>

      {/* Form submission status */}
      {formSubmitStatus === 'loading' && <p className="mt-4 text-gray-400 text-sm">Submitting form...</p>}
      {formSubmitStatus === 'failed' && <p className="mt-4 text-red-500 text-sm">Form submission failed. Please try again.</p>}
      {formSubmitStatus === 'submitted' && <p className="mt-4 text-green-500 text-sm">Form submitted successfully.</p>}

      <p className="mt-12 text-gray-400 text-xs">By submitting this form, you consent to being contacted<br/> by our sales team for further assistance and information.</p>
    </form>
  );
}
