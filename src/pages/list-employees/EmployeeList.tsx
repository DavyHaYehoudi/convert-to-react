// import { useFormContext } from '../../store/UseFormContext';
import { EmployeeTable } from './EmployeeTable';
import { employeesMock } from './mocks/employeesList';

const EmployeeList = () => {
    // const { employees } = useFormContext();
    // console.log('employees:', employees)
const employees = employeesMock
    return (
      <div className="container mx-auto py-10 text-[whitesmoke]">
        <EmployeeTable data={employees} />
      </div>
    );
};

export default EmployeeList;