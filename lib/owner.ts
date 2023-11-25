import prisma from "./prisma";

export async function getOwner(id: number) {
    try {
        const owner = await prisma.owner.findUnique({
            where: { id },
            include: { pets: true }
        });
        return owner;
    }
    catch (err) {
        console.error(err);
        return null;
    }
}

export async function getOwners() {
    try {
        const owners = await prisma.owner.findMany({
            include: { pets: true }
        });
        return owners;
    }
    catch (err) {
        console.error(err);
        return null;
    }
}

export async function createOwner(data: any) {
    try {
        const owner = await prisma.owner.create({
            data
        });
        return owner;
    }
    catch (err) {
        console.error(err);
        return null;
    }
}

export async function updateOwner(id: number, data: any) {
    try {
        const owner = await prisma.owner.update({
            where: { id },
            data
        });
        return owner;
    }
    catch (err) {
        console.error(err);
        return null;
    }
}

export async function deleteOwner(id: number) {
    try {
        const owner = await prisma.owner.delete({
            where: { id }
        });
        return owner;
    }
    catch (err) {
        console.error(err);
        return null;
    }
}