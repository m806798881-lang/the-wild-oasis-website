"use client";

import { useFormStatus } from "react-dom";

function FormButton({ children, className }) {
  const { pending } = useFormStatus();
  return (
    <button className={className} disabled={pending}>
      {pending ? "updating..." : children}
    </button>
  );
}

export default FormButton;
