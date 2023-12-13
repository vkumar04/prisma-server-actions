import PetCard from "@/components/petCard/PetCard"
import { getAllPetsAction } from "@/components/action"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"

export default async function Page() {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
        queryKey: ["pets"],
        queryFn: getAllPetsAction,
    })
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <PetCard />
        </HydrationBoundary>
    )
}