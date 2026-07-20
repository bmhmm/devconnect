type Props = {
  available: boolean
}

export default function AvailabilityBadge({
  available,
}: Props) {
  return (
    <span
      className={`inline-flex rounded-full px-4 py-2 text-sm font-medium ${
        available
          ? 'bg-green-100 text-green-700'
          : 'bg-red-100 text-red-700'
      }`}
    >
      {available
        ? 'Available for Work'
        : 'Not Available'}
    </span>
  )
}