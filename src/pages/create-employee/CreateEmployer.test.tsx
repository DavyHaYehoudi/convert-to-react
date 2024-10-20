import "@testing-library/jest-dom";
// import { employeesMock } from '../list-employees/mocks/employeesList';
// CreateEmployer.test.tsx
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CreateEmployer from "./CreateEmployer";
import { useFormContext } from "../../store/UseFormContext";

jest.mock("../../store/UseFormContext");
jest.mock("@davy-dev/react-modal-plugin", () => {
  return {
    __esModule: true,
    default: ({
      isOpen,
      onClose,
      title,
      children,
    }: {
      isOpen: boolean;
      onClose: () => void;
      title: string;
      children?: React.ReactNode;
    }) =>
      isOpen ? (
        <div>
          <h1>{title}</h1>
          <button onClick={onClose}>Close</button>
          {children}
        </div>
      ) : null,
  };
});

describe("CreateEmployer", () => {
  const addEmployeeMock = jest.fn();

  beforeEach(() => {
    (useFormContext as jest.Mock).mockReturnValue({
      addEmployee: addEmployeeMock,
      employees: [],
    });
  });

  afterEach(() => {
    jest.clearAllMocks(); // Réinitialise les mocks après chaque test
  });

  test("renders the CreateEmployer form and opens modal on submit", async () => {
    render(<CreateEmployer />);

    // Remplir le formulaire
    fireEvent.change(screen.getByPlaceholderText("John"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByPlaceholderText("Doe"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("75000"), {
      target: { value: "75000" },
    });
    fireEvent.change(screen.getByPlaceholderText("123 Main St"), {
      target: { value: "123 Main St" },
    });
    fireEvent.change(screen.getByPlaceholderText("Paris"), {
      target: { value: "Paris" },
    });

    // Sélectionner une région
    // fireEvent.change(screen.getByLabelText(/région/i), {
    //   target: { value: "Île-de-France" },
    // });

    // Sélectionner un département
    // fireEvent.change(screen.getByLabelText("Département"), {
    //   target: { value: "Sales" },
    // });

    // Soumettre le formulaire
    fireEvent.click(screen.getByText("Enregistrer"));

    // Vérifier que le mock addEmployee a été appelé avec les bonnes valeurs
    expect(addEmployeeMock).toHaveBeenCalledWith({
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: undefined,
      startDate: undefined,
      street: "123 Main St",
      city: "Paris",
      region: "Île-de-France", // Ajustez selon votre logique
      zipCode: "75000",
      department: "Sales", // Ajustez selon votre logique
    });

    // Vérifier que la modale est ouverte
    expect(screen.getByText("ENREGISTREMENT EFFECTUE")).toBeInTheDocument();
  });
});
