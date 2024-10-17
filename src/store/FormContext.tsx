import React, { createContext, useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  dateOfBirth: Date | undefined;
  startDate: Date | undefined;
  street: string;
  city: string;
  region: string;
  zipCode: string;
  department: string;
};

type FormContextType = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

export const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    dateOfBirth: undefined,
    startDate: undefined,
    street: "",
    city: "",
    region: "",
    zipCode: "",
    department: "",
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
