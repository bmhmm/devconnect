'use client'

type Props = {
  open: boolean
  projectTitle?: string
  loading: boolean
  onCancel: () => void
  onConfirm: () => void
}

export default function DeleteProjectDialog({
  open,
  projectTitle,
  loading,
  onCancel,
  onConfirm,
}: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">

        <h2 className="text-xl font-semibold text-slate-900">
          Delete Project
        </h2>

        <p className="mt-3 text-sm text-slate-600">
          Are you sure you want to delete
          <span className="font-semibold"> "{projectTitle}"</span>?
        </p>

        <p className="mt-2 text-sm text-red-500">
          This action cannot be undone.
        </p>

        <div className="mt-8 flex justify-end gap-3">

          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="rounded-xl border border-slate-200 px-5 py-2.5 font-medium hover:bg-slate-100"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className="rounded-xl bg-red-500 px-5 py-2.5 font-medium text-white hover:bg-red-600 disabled:opacity-50"
          >
            {loading ? 'Deleting...' : 'Delete'}
          </button>

        </div>

      </div>
    </div>
  )
}