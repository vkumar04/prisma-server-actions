import { createOwner } from "@/lib/owner"
import { revalidatePath } from "next/cache"

export default function CreateOwnerForm() {
    async function action(data: FormData) {
        "use server"
       await createOwner({
              firstName: data.get('firstName') as string,
              lastName: data.get('lastName') as string,
              address: data.get('address') as string,
              city: data.get('city') as string,
              state: data.get('state') as string,
              zip: data.get('zip') as string,
              phone: data.get('phone') as string,
              email: data.get('email') as string,
       })
       revalidatePath("/owners")
    }
    return (
        <form action={action} className="space-y-4 mx-auto w-4/6">
            <div>
                <label htmlFor="firstName" className="font-bold">First Name</label>
                <input type="text" name="firstName" id="firstName" className="block w-full p-2 border rounded" />
            </div>
            <div>
                <label htmlFor="lastName" className="font-bold">Last Name</label>
                <input type="text" name="lastName" id="lastName" className="block w-full p-2 border rounded" />
            </div>
            <div>
                <label htmlFor="address" className="font-bold">Address</label>
                <input type="text" name="address" id="address" className="block w-full p-2 border rounded" />
            </div>
            <div>
                <label htmlFor="city" className="font-bold">City</label>
                <input type="text" name="city" id="city" className="block w-full p-2 border rounded" />
            </div>
            <div>
                <label htmlFor="state" className="font-bold">State</label>
                <input type="text" name="state" id="state" className="block w-full p-2 border rounded" />
            </div>
            <div>
                <label htmlFor="zip" className="font-bold">Zip</label>
                <input type="text" name="zip" id="zip" className="block w-full p-2 border rounded" />
            </div>
            <div>
                <label htmlFor="phone" className="font-bold">Phone</label>
                <input type="text" name="phone" id="phone" className="block w-full p-2 border rounded" />
            </div>
            <div>
                <label htmlFor="email" className="font-bold">Email</label>
                <input type="text" name="email" id="email" className="block w-full p-2 border rounded" />
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
        </form>
    )
}