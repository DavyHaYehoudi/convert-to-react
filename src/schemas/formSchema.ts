import { z } from 'zod';

export const formSchema = z.object({
    firstName: z.string().min(2, { message: 'Le prénom doit avoir au moins 2 caractères.' }),
    lastName: z.string().min(2, { message: 'Le nom doit avoir au moins 2 caractères.' }),
    dateOfBirth: z.string().nonempty({ message: 'La date de naissance est requise.' }),
    startDate: z.string().nonempty({ message: 'La date de début est requise.' }),
    street: z.string().nonempty({ message: 'La rue est requise.' }),
    city: z.string().nonempty({ message: 'La ville est requise.' }),
    state: z.string().nonempty({ message: 'L\'état est requis.' }),
    zipCode: z.string().min(5, { message: 'Le code postal doit avoir au moins 5 chiffres.' }),
    department: z.string().nonempty({ message: 'Le département est requis.' }),
  });
  