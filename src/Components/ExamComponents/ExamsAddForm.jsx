import { Form, useForm } from "react-hook-form";

function ExamsAddForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
        console.log(data)
        try {
          const response = await fetch('http://192.168.0.89:8070/api/v1/exams', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        
        if (!response.ok){
          throw new Error (`Http error! status: ${response.status}`)
        }
        alert ('Medicine succesfully created!')
        reset();
        
      }catch(error) {
        console.error("Error creating new medicine", error);
        alert("An error ocurred while adding the medicine. Please try again");
      }
        
        
  }

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Exam name"
        {...register("name", { required: true })}
        autoFocus
      />
      {errors.name && <span>Name field is required</span>}
      <input
        placeholder="Exam price"
        {...register("price", { required: true })}
      />
      {errors.price && <span>Price field is required</span>}
      <input
        placeholder="Exam quantity"
        {...register("quantity", { required: true })}
      />
       {errors.quantity && <span>Quantity field is required</span>}

      <button>Create Exam</button>
    </form>
  );
}

export default ExamsAddForm;
