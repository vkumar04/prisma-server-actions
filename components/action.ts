'use server'

import { getOwner, updateOwner } from "@/lib/owner"
import { getOwnerPets, deleteOwnerPet } from "@/lib/pet"

export async function getOwnerAction(id: number){
    const owner = await getOwner(id)
    return owner
}

export async function getOwnerPetsAction(id: number){
    const pets = await getOwnerPets(id)
    return pets
}

export async function updateOwnerAction(id: number, data: any){
    if(!data) throw new Error('No data provided')
    if(!id) throw new Error('No id provided')
    const owner = await updateOwner(id, data)
    return owner
}

export async function deletePetAction(ownerId: number, petId: number){
    if(!ownerId || !petId) throw new Error('No id provided')
    const pet = await deleteOwnerPet(ownerId, petId)
    return pet
}