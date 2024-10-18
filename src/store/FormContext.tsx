import React, { createContext, useState } from "react";


// Définir le typage des données stockées à partager
interface FormContextType {
  employees: FormData[];
  addEmployee: (employee: FormData) => void;
}

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);
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

// Configuration du provider lié au contexte
export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [employees, setEmployees] = useState<FormData[]>([]);

  const addEmployee = (employee: FormData) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
  };

  return (
    <FormContext.Provider value={{ employees, addEmployee }}>
      {children}
    </FormContext.Provider>
  );
};
