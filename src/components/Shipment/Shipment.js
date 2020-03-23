import React from 'react';
import { useForm} from 'react-hook-form';
import './Shipment.css';
import { useAuth } from '../Login/useauth';
const Shipment = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => { 
        console.log(data) 
    }
    
    const auth = useAuth();

    return (
        
        <form className="form-input" onSubmit={handleSubmit(onSubmit)}>
          <input name="name" defaultValue={auth.user.name} ref={register({ required: true })} placeholder="Name"/>
          {errors.name && <span>Name is required</span>}

          <input name="email" defaultValue={auth.user.email} ref={register({ required: true })} placeholder="Email"/>
          {errors.name && <span>Email is required</span>}

          <input name="address" ref={register({ required: true })} placeholder="Address Line 1"/>
          {errors.name && <span>Address is required</span>}

          <input name="address" ref={register({ required: true })} placeholder="Address Line 2"/>
          {errors.name && <span>Address is required</span>}

          <input name="Country" ref={register({ required: true })} placeholder="Country"/>
          {errors.name && <span>Country is required</span>}

          <input name="City" ref={register({ required: true })} placeholder="City"/>
          {errors.name && <span>City is required</span>}

          <input name="ZIPcode" ref={register({ required: true })} placeholder="ZIP Code"/>
          {errors.name && <span>ZIPcode is required</span>}

          <input className="main-button" type="submit" />
        </form>
      
    )}; 
export default Shipment;