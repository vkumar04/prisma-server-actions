import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { getOwners } from '@/lib/owner'
import Link from 'next/link'


export default async function ownerCard() {
    const owners = await getOwners()
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {owners?.map((owner) => (
        <li
          key={owner.email}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <Link href={`/${owner.id}`}><h3 className="mt-6 text-sm font-medium text-gray-900">{`${owner.firstName} ${owner.lastName}`}</h3></Link>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{`${owner.address} ${owner.city}, ${owner.state} ${owner.zip}`}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 ${owner.pets.length > 0 ? "bg-green-50 text-green-500": "bg-red-50 text-red-500"}`}>
                  {owner.pets.length} pets
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`mailto:${owner.email}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Email
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${owner.phone}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Call
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
