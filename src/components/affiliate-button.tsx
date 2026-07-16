import { siteConfig } from "@/config/site";
export function AffiliateButton({ href }: { href: string }) { return <div className="affiliate"><span>Werbung / Affiliate-Link</span><a href={href} target="_blank" rel="nofollow sponsored noopener" className="button button-outline">Bei Amazon ansehen <span aria-hidden>↗</span></a><small>{siteConfig.amazonPartnerDisclosure}</small></div>; }
