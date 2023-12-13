"use client"
import { getAllPetsAction } from "../action"
import { useQuery } from "@tanstack/react-query"

export default function PetCard() {
    const { data, error } = useQuery({
        queryKey: ["pets"],
        queryFn: getAllPetsAction,
    })
    if (error) return <h1>{error.message}</h1>

    if (data) {
        return (
            <div>
                {data.map((pet: any) => (
                    <div key={pet.id}>
                        <h1>{pet.name}</h1>
                        <p>{pet.description}</p>
                    </div>
                ))}
            </div>
        )
    }
}