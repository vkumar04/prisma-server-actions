'use client'

import { getOwnerAction, deletePetAction } from '@/components/action'
import Modal from '@/components/modal/Modal'
import { Owner, Pet } from '@prisma/client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ProfilePage() {
    const params = useParams()
    const { id } = params
    const [owner, setOwner] = useState<Owner | null>(null)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        getOwnerAction(Number(id))
            .then((res) => {
                setOwner(res)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [id])
    return (
        <main className='container'>
            <h1 className='text-2xl'>Profile Page</h1>
            <div className='flex flex-col'>
            <p>{`${owner?.firstName} ${owner?.lastName}`}</p>
            <p>{owner?.address}</p>
            <p>{owner?.city}</p>
            <p>{owner?.state}</p>
            <p>{owner?.zip}</p>
            <p>{owner?.email}</p>
            <p>{owner?.phone}</p>
            {owner?.pets.map((pet: Pet) => {
                return (
                    <div key={pet.id}>
                        <p>{pet.name}</p>
                        <p>{pet.type}</p>
                        <button className='px-4 py-2 bg-blue-500 text-white rounded'>Edit Pet</button>
                        <button className='px-4 py-2 bg-blue-500 text-white rounded' onClick={() => deletePetAction(owner?.id, pet?.id )}>Delete Pet</button>
                    </div>
                )
            }
            )}
            </div>
            <Modal data={owner} buttonText='Add Pet' />
        </main>
    )
}