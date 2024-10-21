import "@testing-library/jest-dom";
import { render, screen} from "@testing-library/react";
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
  beforeEach(() => {
    (useFormContext as jest.Mock).mockReturnValue({
      addEmployee: jest.fn(),
      employees: [],
    });
  });

  test("renders the CreateEmployer component", () => {
    render(<CreateEmployer />);

    expect(screen.getByText("Créer un employé")).toBeInTheDocument();
    expect(screen.getByText("Enregistrer")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("John")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Doe")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("75000")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("123 Main St")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Paris")).toBeInTheDocument();
    const regionOptions = screen.getAllByText(/sélectionner une région/i);
    expect(regionOptions).toHaveLength(1);
    const departmentOptions = screen.getAllByText(
      /sélectionner un département/i
    );
    expect(departmentOptions).toHaveLength(1);
  });
});
