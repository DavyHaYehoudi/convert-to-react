import { useState } from "react";
import Modal from "@davy-dev/react-modal-plugin";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "../../schemas/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/ui/button";
import { Form } from "../../components/ui/form";
import DatePickerField from "../../shared/inputs/DatePicker";
import ClassicInputField from "../../shared/inputs/ClassicInputField";
import SelectField from "../../shared/inputs/SelectField";
import { useFormContext } from "../../store/UseFormContext";
import { states } from "./states";

const CreateEmployer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { addEmployee, employees } = useFormContext();
  console.log("employees:", employees);

  // Valeurs par défaut des champs du formulaire et typage par inférence
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: undefined,
      startDate: undefined,
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    addEmployee(values); // Ajoute l'employé dans la liste des employés du contexte
    setIsOpen(true); // Ouvre la modale à la soumission réussie
    form.reset(); // Réinitialise le formulaire d'enregistrement
  }

  const closeModal = () => setIsOpen(false);

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <h2 className="text-2xl font-bold">Create Employee</h2>

          <ClassicInputField
            name="firstName"
            label="First Name"
            placeholder="John"
          />
          <ClassicInputField
            name="lastName"
            label="Last Name"
            placeholder="Doe"
          />
          <DatePickerField name="dateOfBirth" label="Date of Birth" />
          <DatePickerField name="startDate" label="Start Date" />

          <fieldset className="space-y-4">
            <legend className="text-lg font-semibold">Address</legend>
            <ClassicInputField
              name="street"
              label="Street"
              placeholder="123 Main St"
            />
            <ClassicInputField
              name="city"
              label="City"
              placeholder="New York"
            />
            <SelectField
              name="state"
              label="State"
              options={states}
              placeholder="Select a state"
            />

            <ClassicInputField
              name="zipCode"
              label="Zip Code"
              type="number"
              placeholder="70000"
            />
          </fieldset>

          <SelectField
            name="department"
            label="Department"
            options={[
              { value: "Sales", label: "Sales" },
              { value: "Marketing", label: "Marketing" },
              { value: "Engineering", label: "Engineering" },
              { value: "Human Resources", label: "Human Resources" },
              { value: "Legal", label: "Legal" },
            ]}
            placeholder="Select a department"
          />

          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 rounded text-[whitesmoke] uppercase"
          >
            Create
          </Button>
        </form>
      </Form>

      {/* Intégration de la modale */}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="SUCCESSFUL CREATION"
        // title={<><h3>Rich title with HTML</h3><p>With one paragraph</p><p>and a second paragraph</p> </> }
        showCancelButton={false}
        okButtonText="Close"
        okButtonClassName="text-red-ok-button"
      >
        {employees && employees.length > 0 && (
          <div className="m-5">
            <span className="font-bold">
              {" "}
              {`${employees[employees.length - 1].firstName} ${
                employees[employees.length - 1].lastName
              }`}{" "}
            </span>
            <span> {`is added to the list of employees.`} </span>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CreateEmployer;
