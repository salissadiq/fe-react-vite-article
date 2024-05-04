import { SubmitHandler, useForm } from 'react-hook-form';
// import { articleValidationSchema } from '../hooks/formValidattionSchema';

// type ArticleFormData = {
//   name: string;
//   email: string;
//   phone: string;
//   address: string;
//   articleTitle: string;
//   content: string;
// };
type Inputs = {
    name: string;
  email: string;
  phone: string;
  address: string;
  articleTitle: string;
  content: string;
}
export default function CreateArticle() {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
 console.log(watch("name")) // watch input value by passing the name of it
  // const submitArticle: SubmitHandler<ArticleFormData> = async (formData) => {
  //   // try {
  //   //   const validateddata = articleValidationSchema.parse(formData);
  //   //   console.log(validateddata, '////////');
  //   // } catch (error) {
  //   //   if (error instanceof ZodError) {
  //   //     error.errors.forEach((validationError) => {
  //   //       // Set error message for corresponding form field
  //   //       setError(validationError.path[0] as keyof typeof formData, {
  //   //         type: 'manual',
  //   //         message: validationError.message,
  //   //       });
  //   //     });
  //   //   }
  //   // }
  //   const validateddata = articleValidationSchema.parse(formData);
  //     console.log(validateddata, '////////');
  // };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-5 items-center">
        <div className='flex flex-col'>
          <label  className={` font-nunito text-sm font-semibold`}>
        Name
        {<span className="text-red-500">*</span> }
      </label>
        <input type="text" {...register("name", { required: true })} className={`${errors.name ? 'border-red-500' : ''} focus:outline-none border px-5 py-2 w-[500px] rounded-md`} placeholder='John Doe'/>
         {errors.name && <span className='text-red-500 text-sm font-light font-nunito'>Name is required</span>}
        </div>

        <div className='flex flex-col'>
          <label  className={` font-nunito text-sm font-semibold`}>
        Email
        {<span className="text-red-500">*</span> }
      </label>
          <input type="text" {...register("email", { required: true })} className={`${errors.email ? 'border-red-500' : ''} focus:outline-none border px-5 py-2 w-[500px] rounded-md`} placeholder='johndoe@example.com'/>
         {errors.email && <span className='text-red-500 text-sm font-light font-nunito'>Email is required</span>}
        </div>

        <div className='flex flex-col'>
          <label  className={` font-nunito text-sm font-semibold`}>
        Phone
        {<span className="text-red-500">*</span> }
      </label>
          <input type="text" {...register("phone", { required: true })} className={`${errors.phone ? 'border-red-500' : ''} focus:outline-none border px-5 py-2 w-[500px] rounded-md`} placeholder='234 0812345678'/>
         {errors.phone && <span className='text-red-500 text-sm font-light font-nunito'>Phone is required</span>}
        </div>

        <div className='flex flex-col'>
          <label  className={` font-nunito text-sm font-semibold`}>
        Address
        {<span className="text-red-500">*</span> }
      </label>
          <input type="text" {...register("address", { required: true })} className={`${errors.address ? 'border-red-500' : ''} focus:outline-none border px-5 py-2 w-[500px] rounded-md`} placeholder='123 Address street'/>
         {errors.address && <span className='text-red-500 text-sm font-light font-nunito'>Address is required</span>}
        </div>

        <div className='flex flex-col'>
          <label  className={` font-nunito text-sm font-semibold`}>
        Article title
        {<span className="text-red-500">*</span> }
      </label>
          <input type="text" {...register("articleTitle", { required: true })} className={`${errors.articleTitle ? 'border-red-500' : ''} focus:outline-none border px-5 py-2 w-[500px] rounded-md`} placeholder='123 Address street'/>
         {errors.articleTitle && <span className='text-red-500 text-sm font-light font-nunito'>Article title is required</span>}
        </div>

        <div className='flex flex-col'>
          <label  className={` font-nunito text-sm font-semibold`}>
        Article Content
        {<span className="text-red-500">*</span> }
      </label>
          <textarea
          placeholder="Article content"
          className={`${errors.content ? 'border-red-500' : ''} border focus:outline-none w-[500px] h-[200px] rounded-md px-5 py-2`}
          {...register('content', { required: 'Article content is required' })}
        ></textarea>
          {errors.content && <span className={`  text-red-500 text-sm font-light font-nunito`}>Article content is required</span>}
        </div>

        <button className="bg-[#606c38] text-white px-10 py-2 rounded-md hover:bg-[#283618] ">
          Submit
        </button>
      </div>
    </form>
  );
}
