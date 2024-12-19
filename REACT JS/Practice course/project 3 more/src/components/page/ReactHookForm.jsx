import React from "react";

import { useForm } from "react-hook-form";

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const SubmitHandler = (formdata) => {
    console.log(formdata);

    reset()
  };

  return (
    <div>
      <h4>React hook form</h4>
      <form onSubmit={handleSubmit(SubmitHandler)}>
        <div>
          <label>Email</label>
          <input type="email" name="email" {...register("email",{required: true})}  placeholder="email"/>
          {errors.email && <span>This field is required</span>}
        </div>
        <div>
          <label>password</label>
          <input type="password" name="password" {...register("password",{required: true})} placeholder="password" />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default ReactHookForm;
