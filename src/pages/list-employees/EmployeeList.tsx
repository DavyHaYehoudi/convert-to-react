import { useFormContext } from '../../store/UseFormContext';
import { EmployeeTable } from './EmployeeTable';
import { employeesMock } from './mocks/employeesList';

const EmployeeList = () => {
    let { employees } = useFormContext();
    // console.log('employees:', employees)
const employeesFromMock = employeesMock

employees = [...employees,...employeesFromMock]

    return (
      <div className="container mx-auto py-10 text-[whitesmoke]">
        <EmployeeTable data={employees} />
      </div>
    );
};

export default EmployeeList;