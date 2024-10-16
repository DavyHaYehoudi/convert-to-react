import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "../../schemas/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/ui/button";
import { Form } from "../../components/ui/form";
import { useState } from "react";
import DatePickerField from "../../shared/inputs/DatePicker";
import ClassicInputField from "../../shared/inputs/ClassicInputField";
import SelectField from "../../shared/inputs/SelectField";

const CreateEmployer = () => {
  const [confirmation, setConfirmation] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "",
    },
  });
  // Gestion de la soumission du formulaire
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setConfirmation(true); // Affiche la confirmation après enregistrement
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <h2 className="text-2xl font-bold">Créer un employé</h2>

          <ClassicInputField
            name="firstName"
            label="Prénom"
            placeholder="John"
          />
          <ClassicInputField name="lastName" label="Nom" placeholder="Doe" />
          <DatePickerField name="dateOfBirth" label="Date de naissance" />
          <DatePickerField name="startDate" label="Date de début" />

          <fieldset className="space-y-4">
            <legend className="text-lg font-semibold">Adresse</legend>
            <ClassicInputField
              name="street"
              label="Rue"
              placeholder="123 Main St"
            />
            <ClassicInputField name="city" label="Ville" placeholder="Paris" />
            <ClassicInputField
              name="state"
              label="État"
              placeholder="Île-de-France"
            />
            <ClassicInputField
              name="zipCode"
              label="Code Postal"
              type="number"
              placeholder="75000"
            />
          </fieldset>

          <SelectField
            name="department"
            label="Département"
            options={[
              { value: "Sales", label: "Ventes" },
              { value: "Marketing", label: "Marketing" },
              { value: "Engineering", label: "Ingénierie" },
              { value: "Human Resources", label: "Ressources Humaines" },
              { value: "Legal", label: "Juridique" },
            ]}
            placeholder="Sélectionner"
          />

          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 rounded text-[whitesmoke]"
          >
            Enregistrer
          </Button>
        </form>
      </Form> 
      {/* Message de confirmation */}
      {confirmation && (
        <div className="modal">
          <p className="text-green-500 m-2">Employé créé avec succès !</p>
        </div>
      )}
    </div>
  );
};
export default CreateEmployer;
