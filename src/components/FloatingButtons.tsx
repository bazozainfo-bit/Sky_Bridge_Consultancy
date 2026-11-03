import { Phone } from "lucide-react";
import { site, waLink } from "@/data/site";
import { WhatsAppIcon } from "./ui";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 md:bottom-8 md:right-6">
      <a href={`tel:${site.phoneE164}`} aria-label={`Call ${site.phoneDisplay}`}
         className="group flex h-13 w-13 items-center justify-center rounded-full bg-maroon text-white shadow-lg shadow-maroon/30 ring-2 ring-white transition hover:scale-105 h-[52px] w-[52px]">
        <Phone className="h-5 w-5" />
      </a>
      <a href={waLink()} target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp"
         className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/20 ring-2 ring-white transition hover:scale-105">
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
