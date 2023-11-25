import OwnerCard from "@/components/ownerCard/OwnerCard";

export default async function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-4">List of Pet Owners</h1>
      <div className="mt-6">
        <OwnerCard />
      </div>
    </main>
  );
}
