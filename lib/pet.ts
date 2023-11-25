import prisma from "./prisma";

export async function getOwnerPets(id: number) {
    try {
        const pets = await prisma.owner.findUnique({
            where: { id },
            include: { pets: true }
        });
        return pets;
    }
    catch (err) {
        console.error(err);
        return null;
    }
}

export async function createOwnerPet(id: number, data: any) {
    try {
        const pet = await prisma.pet.create({
            data: {
                ...data,
                owner: { connect: { id } }
            }
        });
        return pet;
    }
    catch (err) {
        console.error(err);
        return null;
    }
}

export async function updateOwnerPet(ownerId: number, petId: number, data: any) {
    try {
        const pet = await prisma.pet.update({
            where: { id: petId },
            data: {
                ...data,
                owner: { connect: { id: ownerId } }
            }
        });
        return pet;
    }
    catch (err) {
        console.error(err);
        return null;
    }
}

export async function deleteOwnerPet(ownerId: number, petId: number) {
    try {
        const pet = await prisma.pet.delete({
            where: { id: petId }
        });
        return pet;
    }
    catch (err) {
        console.error(err);
        return null;
    }
}
