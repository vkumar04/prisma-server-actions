import CreateOwnerForm from "@/components/createOwner/CreateOwnerForm";

export default async function CreateUser() {
    return (
        <main>
            <h1 className="text-2xl font-bold text-center mt-4">Create Owner</h1>
            <CreateOwnerForm />
        </main>
    )
}