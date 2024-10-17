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

const CreateEmployer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: undefined,
      startDate: undefined,
      street: "",
      city: "",
      region: "",
      zipCode: "",
      department: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsOpen(true); // Ouvre la modale à la soumission réussie
    form.reset();
  }

  const closeModal = () => setIsOpen(false);

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
            {/* <ClassicInputField name="state" label="État" placeholder="Île-de-France" /> */}
            <SelectField
              name="region"
              label="Région"
              options={[
                {
                  value: "Auvergne-Rhône-Alpes",
                  label: "Auvergne-Rhône-Alpes",
                },
                {
                  value: "Bourgogne-Franche-Comté",
                  label: "Bourgogne-Franche-Comté",
                },
                { value: "Bretagne", label: "Bretagne" },
                { value: "Centre-Val de Loire", label: "Centre-Val de Loire" },
                { value: "Corse", label: "Corse" },
                { value: "Grand Est", label: "Grand Est" },
                { value: "Hauts-de-France", label: "Hauts-de-France" },
                { value: "Île-de-France", label: "Île-de-France" },
                { value: "Normandie", label: "Normandie" },
                { value: "Nouvelle-Aquitaine", label: "Nouvelle-Aquitaine" },
                { value: "Occitanie", label: "Occitanie" },
                { value: "Pays de la Loire", label: "Pays de la Loire" },
                {
                  value: "Provence-Alpes-Côte d'Azur",
                  label: "Provence-Alpes-Côte d'Azur",
                },
                { value: "Guadeloupe", label: "Guadeloupe" },
                { value: "Martinique", label: "Martinique" },
                { value: "Guyane", label: "Guyane" },
                { value: "La Réunion", label: "La Réunion" },
                { value: "Mayotte", label: "Mayotte" },
              ]}
              placeholder="Sélectionner une région"
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

      {/* Intégration de la modale */}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="Création réussie"
        showCancelButton={false}
        okButtonText="Fermer"
      >
        <p>Employé créé avec succès !</p>
      </Modal>
    </div>
  );
};

export default CreateEmployer;
