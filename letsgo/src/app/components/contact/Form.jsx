"use client";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";


const container = {
  hidden: {
    opacity: 0},
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.4
      }
    }
}

const item = {
  hidden: {scale: 0},
  show: {scale: 1}
}

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    
    const toastid = toast.loading('Sending Message..., Please Wait...');
    emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      params,
      { 
        publicKey:
         process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate:{
            throttle: 5000,
        }

       }
    )
      .then(() => {
        toast.success('Message sent Successfully',{id:toastid});
      },
      (error) => {
        toast.error('Something went wrong!',{id:toastid});
      }
    );
        
        
  };

  const onSubmit = (data) =>{

    const templateParams = {
      to_name: "Utsav Vaghela",
      from_name: data.Name,
      reply_to: data.Email,
      message: data.Message,
    };

    sendEmail(templateParams);
  };
  

  return (
    <>
    
    <Toaster richColors={true} />
    <motion.form

    variants={container}
    initial="hidden"
    animate="show"
    

      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
    >
      <motion.input  
      variants={item}
        type="text"
        placeholder="Name"
        {...register("Name", { required: 'This field is required!',minLength:{value: 3,message: "Name must be at least 3 characters long"}, maxLength: 80 })}
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />
      {
        errors.Name && <span className="inline-block text-accent">{errors.Name.message}</span>
      }
      <motion.input 
      variants={item}
        type="email"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />

{
        errors.Email && <span className="inline-block text-accent">{errors.Email.message}</span>
      }


      <motion.textarea
      variants={item}
        placeholder="Message"
        {...register("Message", { required: true, max: 256, min: 50 })}
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />

{
        errors.Message && <span className="inline-block text-accent">{errors.Message.message}</span>
      }

      <motion.input 
      variants={item}
        value="Send your whispers!"
        className="px-10 py-4 rounded-md bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
        type="submit"
      />
    </motion.form>
    
    </>
  );
}
