import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <p>Breed: {animal.breed}</p>
        <address className="location__address">Location: {animal.location.name}</address>
    </section>
)