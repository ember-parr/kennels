// should display 3 employees
import React from "react"
import "./Employee.css"

export const EmployeeCard = ({employee}) => (
    <section className="employee">
        <h3 className="employee_name">{employee.name}</h3>
        <div className="employee_address">{employee.address}</div>
    </section>
)