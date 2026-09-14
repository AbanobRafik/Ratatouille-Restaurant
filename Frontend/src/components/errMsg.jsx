import { AlertCircle } from "lucide-react";

export default function FieldError({ id, message }) {
  return (
    <p
      id={id}
      role="alert"
      className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm leading-5 text-red-800"
    >
      <AlertCircle className="mt-0.5 shrink-0 text-red-600" size={16} />
      <span>{message}</span>
    </p>
  );
}
