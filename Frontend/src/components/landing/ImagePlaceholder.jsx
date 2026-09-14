import { Image as ImageIcon } from "lucide-react";
import { useState } from "react";

export default function ImagePlaceholder({ src, alt, title, type, className = "", imageClassName = "" }) {
  const [hasError, setHasError] = useState(!src);

  if (!hasError) {
    return <img src={src} alt={alt || title} className={`h-full w-full ${imageClassName}`} onError={() => setHasError(true)} />;
  }

  return (
    <div className={`grid h-full w-full place-items-center bg-[#f5f5f3] p-5 text-center ${className}`}>
      <div>
        <div className="mx-auto grid size-11 place-items-center rounded-full border border-black/15 bg-white text-[#d65f3b]"><ImageIcon size={19} strokeWidth={1.5} /></div>
        <p className="mt-4 text-[10px] font-semibold uppercase tracking-[.2em] text-black/40">Image placeholder</p>
        <p className="mt-2 text-lg font-semibold text-black">{title}</p>
        {type && <p className="mt-1 text-xs text-black/50">{type}</p>}
      </div>
    </div>
  );
}
