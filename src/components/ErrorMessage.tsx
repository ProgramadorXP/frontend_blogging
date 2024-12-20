import { ReactNode } from "react";

export default function ErrorMessage({ children }: { children: ReactNode }) {
  return (
    <div className="text-center my-2 bg-red-600 text-red-50 font-bold p-1 text-sm">
      {children}
    </div>
  );
}
