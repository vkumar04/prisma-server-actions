import { getOwner } from "@/lib/owner"
export const dynamic = "force-dynamic";

export default async function Profile({ id }: { id: string | string[] }) {
    const owner = await getOwner(Number(id));
    console.log(owner)
    return (
        <>
            <h2>Owner</h2>
            <p>{owner?.email}</p>
        </>
    )
}