import { useForm } from "react-hook-form";
import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Textarea,
  Button
} from "@chakra-ui/react";

const emailPattern = /^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/

const ContactFormBlock = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();

  function onSubmit(values) {
    // eslint-disable-next-line no-console
    console.log(values)
  }
  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
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
        <FormControl isInvalid={errors.email}>
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
        <FormControl isInvalid={errors.subject}>
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
        <FormControl isInvalid={errors.message}>
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
        <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
          Submit
        </Button>
      </form>
    </section>
  )
}

export default ContactFormBlock