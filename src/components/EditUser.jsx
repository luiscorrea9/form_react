import React, {useState} from 'react'
import {useForm} from 'react-hook-form'

const EditUser = (props) => {

    console.log(props.currentUser)

  const { register, formState: { errors }, handleSubmit, setValue} = useForm({
      defaultValues: props.currentUser
  });

  setValue('name', props.currentUser.name)
  setValue('lastname', props.currentUser.lastname)
  setValue('age', props.currentUser.age)
  setValue('email', props.currentUser.email)
  setValue('phone', props.currentUser.phone)


  const onSubmit = (data, e) => {
    data.id = props.currentUser.id
    props.updateUser(props.currentUser.id, data)

    
    e.target.reset();
  }

  return (
    
    <form  onSubmit={handleSubmit(onSubmit)}>
      
      <input {...register("name", { required: true, maxLength: 15, minLength:2})} 
      placeholder="Name" className="form-control my-2"/>
      <span className="text-danger text-small d-block mb-2">
        {errors.name?.type === 'required' && "Name required"}
      </span>

      <input {...register("lastname", { required: true, maxLength: 15, minLength:2})} 
      placeholder="Lastname" className="form-control my-2"/>
      <span className="text-danger text-small d-block mb-2">
        {errors.lastname?.type === 'required' && "Lastname required"}
      </span>

      <input type="number" {...register("age", { required:true, min: 18, max: 99 })}
      placeholder="Age" className="form-control my-2"/>
      <span className="text-danger text-small d-block mb-2">
        {errors.age?.type === 'required' && "Age required"}
      </span>

      <input type="email" {...register("email", { required: true, maxLength: 50, minLength:2})} 
      placeholder="Email" className="form-control my-2"/>
      <span className="text-danger text-small d-block mb-2">
        {errors.email?.type === 'required' && "Email required"}
      </span>

      <input {...register("phone", { required: true, maxLength: 15, minLength:2})} 
      placeholder="Phone" className="form-control my-2"/>
      <span className="text-danger text-small d-block mb-2">
        {errors.phone?.type === 'required' && "Phone required"}
      </span>
      <div className="btnAdd">      
        <button className="btn btn-success">Edit User</button>
      </div>
  </form>
    )
}

export default EditUser;