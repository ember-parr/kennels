import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import {AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home greeting="Good Morning"/>
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route exact path="/animals">
                <h2>Animals</h2>
                    <AnimalList />
                </Route>
            </AnimalProvider>


            <AnimalProvider>
                <Route exact path="/animals/detail">

                </Route>
            </AnimalProvider>

            {/* <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals/create">
                            <AnimalForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider> */}

            {/* Render the animal list when http://localhost:3000/animals */}
            <LocationProvider>
                <Route path="/locations">
                <h2>Locations</h2>
                    <LocationList />
                </Route>
            </LocationProvider>

            {/* Render the animal list when http://localhost:3000/animals */}
            <CustomerProvider>
                <Route path="/customers">
                <h2>Customers</h2>
                    <CustomerList />
                </Route>
            </CustomerProvider>

            {/* Render the animal list when http://localhost:3000/animals */}
            <EmployeeProvider>
                <Route path="/employees">
                <h2>Employees</h2>
                    <EmployeeList />
                </Route>
            </EmployeeProvider>
        </>
    )
}