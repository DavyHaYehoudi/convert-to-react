import React from 'react';
import { useFormContext } from '../store/UseFormContext';

const EmployeeList = () => {
    const { employees } = useFormContext();
    console.log('employees:', employees)
    return (
        <div>
            EmployeeList
        </div>
    );
};

export default EmployeeList;