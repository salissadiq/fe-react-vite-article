import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import toast, { Toaster } from 'react-hot-toast';

type ArticleFormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  articleTitle: string;
  content: string;
};

export default function CreateArticle() {
  const [loader, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleFormData>();
  const onSubmit: SubmitHandler<ArticleFormData> = (formData) =>
    submitArticle(formData);

  const submitArticle: SubmitHandler<ArticleFormData> = async (formData) => {
    setLoader(true);
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to create article');
      }
      setLoader(false);
      toast.success('Article created successfully');
    } catch (error) {
      setLoader(false);
      toast.error('Error creating article!');

      console.error('Error creating article:', error);
      throw error;
    }
  };
  const toastConfig = {
    position: 'top-center',
    duration: 3000,
    style: {
      minWidth: '250px',
    },
    success: {
      icon: '👍',
    },
    error: {
      icon: '❌',
    },
    loading: {
      icon: '⏳',
      duration: Infinity,
    },
  } as const;
  return (
    <>
      <form role="form" onSubmit={handleSubmit(onSubmit)}>
        <div data-testid="formDiv" className="flex flex-col gap-5 items-center">
          <div className="flex flex-col">
            <label className={` font-nunito text-sm font-semibold`}>
              Name
              {<span className="text-red-500">*</span>}
            </label>
            <input
              type="text"
              {...register('name', {
                required: 'Name is required',
                minLength: {
                  value: 5,
                  message: "Name should'nt be lessthan 5 characters",
                },
              })}
              className={`${errors.name ? 'border-red-500' : ''} focus:outline-none border px-5 py-2 w-[500px] rounded-md`}
              placeholder="John Doe"
            />
            {errors.name && (
              <span className="text-red-500 text-sm font-light font-nunito">
                {errors.name?.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className={` font-nunito text-sm font-semibold`}>
              Email
              {<span className="text-red-500">*</span>}
            </label>
            <input
              type="text"
              {...register('email', { required: true })}
              className={`${errors.email ? 'border-red-500' : ''} focus:outline-none border px-5 py-2 w-[500px] rounded-md`}
              placeholder="johndoe@example.com"
            />
            {errors.email && (
              <span className="text-red-500 text-sm font-light font-nunito">
                Email is required
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className={` font-nunito text-sm font-semibold`}>
              Phone
              {<span className="text-red-500">*</span>}
            </label>
            <input
              type="text"
              {...register('phone', { required: true })}
              className={`${errors.phone ? 'border-red-500' : ''} focus:outline-none border px-5 py-2 w-[500px] rounded-md`}
              placeholder="234 0812345678"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm font-light font-nunito">
                Phone is required
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className={` font-nunito text-sm font-semibold`}>
              Address
              {<span className="text-red-500">*</span>}
            </label>
            <input
              type="text"
              {...register('address', { required: true })}
              className={`${errors.address ? 'border-red-500' : ''} focus:outline-none border px-5 py-2 w-[500px] rounded-md`}
              placeholder="123 Address street"
            />
            {errors.address && (
              <span className="text-red-500 text-sm font-light font-nunito">
                Address is required
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className={` font-nunito text-sm font-semibold`}>
              Article title
              {<span className="text-red-500">*</span>}
            </label>
            <input
              type="text"
              {...register('articleTitle', { required: true })}
              className={`${errors.articleTitle ? 'border-red-500' : ''} focus:outline-none border px-5 py-2 w-[500px] rounded-md`}
              placeholder="Unique title"
            />
            {errors.articleTitle && (
              <span className="text-red-500 text-sm font-light font-nunito">
                Article title is required
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className={` font-nunito text-sm font-semibold`}>
              Article Content
              {<span className="text-red-500">*</span>}
            </label>
            <textarea
              placeholder="Article content"
              className={`${errors.content ? 'border-red-500' : ''} border focus:outline-none w-[500px] h-[200px] rounded-md px-5 py-2`}
              {...register('content', {
                required: 'Article content is required',
              })}
            ></textarea>
            {errors.content && (
              <span className={`  text-red-500 text-sm font-light font-nunito`}>
                Article content is required
              </span>
            )}
          </div>

          <button
            className={`bg-[#606c38] text-white px-10 py-2 rounded-md hover:bg-[#283618] focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 ${loader ? 'cursor-not-allowed' : ''}`}
          >
            {loader ? (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              'Submit'
            )}
          </button>
        </div>
      </form>
      <div data-testid="toast">
        <Toaster toastOptions={toastConfig} />
      </div>
    </>
  );
}
