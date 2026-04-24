import { Lock } from "lucide-react";

export function ExclusiveAccessButton() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-md bg-primary-600 px-3 py-2 text-white shadow transition hover:bg-primary-700 cursor-pointer"
    >
      <Lock size={18} />

      <div className="flex flex-col items-start leading-tight">
        <span className="text-xs font-medium">acesso exclusivo</span>
        <span className="text-sm font-semibold">Servidor</span>
      </div>
    </button>
  );
}
