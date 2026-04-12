import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="text-2xl font-bold text-white">Page not found</h1>
      <p className="mt-2 text-red-100/65">That comp or URL does not exist.</p>
      <Link
        href="/"
        className="mt-6 inline-block text-sm font-medium text-red-200 hover:text-red-100"
      >
        Back to home
      </Link>
    </div>
  );
}
