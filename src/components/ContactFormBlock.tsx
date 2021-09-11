import { useForm } from "react-hook-form";
import React, { useState } from "react";
import {
  Container,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Textarea,
  Button,
  useToast
} from "@chakra-ui/react";
import { fetchApi } from '../lib/util'
import apiEndPoints from "../lib/strapiApi";

const emailPattern = /^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/

const ContactFormBlock = () => {
  const {
    handleSubmit,
    register,
    reset,
    setError,
    formState: { errors, isSubmitting }
  } = useForm();
  const [isDisabled, setIsDisabled] = useState(false)
  const toast = useToast()

  async function onSubmit(values) {
    setIsDisabled(true)
    const isClosable = true
    try {
      await fetchApi(apiEndPoints.postContactMessage, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      toast({
        title: 'Submitted Successfully!',
        status: 'success',
        isClosable
      })
      reset({ name: '', email: '', subject: '', message: '' })
    } catch(e) { 
      const errors = e.data?.errors
      const errorKeys = Object.keys(errors)
      errorKeys.forEach(name => {
        setError(name, { type: 'manual', message: errors[name][0] })
      })
      toast({
        title: 'Submission Error',
        status: 'error',
        isClosable
      })
    }     
    setIsDisabled(false);
  } 
  
  return (
    <Container as="section"  maxW="container.md">
      <form className="grid" onSubmit={handleSubmit(onSubmit)}>
        <FormControl className="gcol-6" isInvalid={errors.name}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            placeholder="name"
            type="text"
            {...register("name", {
              required: "A name is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
              maxLength: { value: 50, message: "Must be 50 characters or less." },
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl className="gcol-6" isInvalid={errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="email"
            {...register("email", {
              required: "A valid email is required",
              minLength: { value: 4, message: "Minimum length should be 4." },
              maxLength: { value: 50, message: "Must be 50 characters or less." },
              pattern:  {
                value: emailPattern,
                message: "The email needs to be a correct format."
              }
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl className="gcol-12" isInvalid={errors.subject}>
          <FormLabel htmlFor="subject">Subject</FormLabel>
          <Input
            id="subject"
            placeholder="subject"
            type="text"
            {...register("subject", {
              required: "A subject message is required",
              minLength: { value: 4, message: "Minimum length should be 4." },
              maxLength: { value: 50, message: "Must be 50 characters or less." },
            })}
          />
          <FormErrorMessage>
            {errors.subject && errors.subject.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl className="gcol-12" isInvalid={errors.message}>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea
            id="message"
            placeholder="message"
            {...register("message", {
              required: "A message is required"
            })}
          />
          <FormErrorMessage>
            {errors.message && errors.message.message}
          </FormErrorMessage>
        </FormControl>
        <Button className="gcol-sm-10 gcol-md-4 center" 
                isDisabled={isDisabled}
                mt={4} colorScheme="teal" 
                isLoading={isSubmitting} type="submit">
          Submit
        </Button>
      </form>
    </Container>
  )
}

export default ContactFormBlock