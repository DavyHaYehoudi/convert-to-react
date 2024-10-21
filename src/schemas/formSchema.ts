import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().nonempty({ message: "First name is required" }),
  lastName: z.string().nonempty({ message: "Last name is required" }),
  dateOfBirth: z.date({
    required_error: "Date of birth is required",
  }),
  startDate: z.date({
    required_error: "Start date is required",
  }),
  street: z.string().nonempty({ message: "Street is required" }),
  city: z.string().nonempty({ message: "City is required" }),
  state: z.string().nonempty({ message: "State is required" }), 
  zipCode: z.string().nonempty({ message: "Zip code is required" }),
  department: z.string().nonempty({ message: "Department is required" }),
});
