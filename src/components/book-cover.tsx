import Image from "next/image";
import type { Ebook } from "@/data/ebooks";
export function BookCover({ ebook, priority = false, className = "" }: { ebook: Ebook; priority?: boolean; className?: string }) { return <div className={`book-cover ${className}`}><Image src={ebook.coverImage} alt={`Cover: ${ebook.title}`} fill sizes="(max-width: 640px) 43vw, 260px" priority={priority} /></div>; }
