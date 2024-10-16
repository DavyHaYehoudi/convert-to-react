import { z } from "zod";

export const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Le prénom doit avoir au moins 2 caractères." }),
  lastName: z
    .string()
    .min(2, { message: "Le nom doit avoir au moins 2 caractères." }),
  dateOfBirth: z
    .date().refine((date) => !isNaN(date.getTime()), {
      message: "Date de naissance invalide.",
    }),
  startDate: z
    .date()
    .refine((date) => !isNaN(date.getTime()), {
      message: "Date de début invalide.",
    }),
  street: z.string().min(1, { message: "La rue est requise." }),
  city: z.string().min(1, { message: "La ville est requise." }),
  state: z.string().min(1, { message: "L'état est requis." }),
  zipCode: z
    .string()
    .min(5, { message: "Le code postal doit avoir au moins 5 chiffres." }),
  department: z.string().min(1, { message: "Le département est requis." }),
});
