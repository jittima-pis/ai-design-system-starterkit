import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Everyday - Sustainable Fashion Marketplace',
  description: 'Join our community of conscious fashion lovers. Share what you no longer wear and discover unique treasures that deserve a second chance.',
}

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
