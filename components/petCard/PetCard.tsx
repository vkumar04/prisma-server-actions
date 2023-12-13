"use client";

import { getAllPetsAction } from "../action"
import { useQuery } from "@tanstack/react-query"

export default function PetCard() {
    const { data, error } = useQuery({
        queryKey: ["pets"],
        queryFn: getAllPetsAction,
    })
    if (error) return <h1>Error</h1>
    console.log(data)
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}