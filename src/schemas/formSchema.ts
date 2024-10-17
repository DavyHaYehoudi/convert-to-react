import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().nonempty({ message: "Le prénom est requis" }),
  lastName: z.string().nonempty({ message: "Le nom est requis" }),
  dateOfBirth: z.date({
    required_error: "La date de naissance est requise",
  }),
  startDate: z.date({
    required_error: "La date de début est requise",
  }),
  street: z.string().nonempty({ message: "La rue est requise" }),
  city: z.string().nonempty({ message: "La ville est requise" }),
  state: z.string().nonempty({ message: "L'état est requis" }),
  zipCode: z.string().nonempty({ message: "Le code postal est requis" }),
  department: z.string().nonempty({ message: "Le département est requis" }),
});
