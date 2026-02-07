'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  Search,
  ShoppingCart,
  User,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function EverydayMarketplace() {
  // Sample product data (8 products as in Figma)
  const products = Array(8).fill({
    title: 'Classic Denim Jacket',
    price: '฿800',
    image: '/placeholder-product.jpg'
  })

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FCF9F6' }}>
      {/* Navigation Header */}
      <header
        className="sticky top-0 z-50 w-full border-b backdrop-blur"
        style={{
          backgroundColor: '#F0E4D9',
          borderColor: '#E4CDB7'
        }}
      >
        <div className="mx-auto flex h-24 max-w-[1360px] items-center justify-between px-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/logo.png" />
              <AvatarFallback style={{ backgroundColor: '#3E332E', color: '#FAFAFA' }}>
                E
              </AvatarFallback>
            </Avatar>
            <span className="text-xl font-bold" style={{ color: '#3E332E' }}>
              Everyday
            </span>
          </div>

          {/* Search Bar */}
          <div className="relative hidden md:block flex-1 max-w-md mx-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: '#815E46' }} />
            <Input
              type="search"
              placeholder="Search for items..."
              className="pl-10 rounded-full border"
              style={{
                backgroundColor: '#FCF9F6',
                borderColor: '#E4CDB7',
                color: '#3E332E'
              }}
            />
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
              <ShoppingCart className="h-6 w-6" style={{ color: '#3E332E' }} />
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
              <User className="h-6 w-6" style={{ color: '#3E332E' }} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-[1360px] px-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 max-w-[534px]">
            {/* Badge */}
            <Badge
              variant="secondary"
              className="rounded-full px-4 py-2 text-base font-normal"
              style={{
                backgroundColor: '#F0E4D9',
                color: '#3E332E',
                border: 'none'
              }}
            >
              Sustainable Fashion, Beautifully Curated
            </Badge>

            {/* Main Heading */}
            <h1
              className="font-semibold tracking-tight"
              style={{
                fontSize: '60px',
                lineHeight: '60px',
                color: '#3E332E'
              }}
            >
              Give your pre-loved pieces a new story
            </h1>

            {/* Description */}
            <p
              className="text-xl"
              style={{
                color: '#815E46',
                lineHeight: '28px'
              }}
            >
              Join our community of conscious fashion lovers. Share what you no longer wear and discover unique treasures that deserve a second chance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full h-12 px-6 text-sm font-medium"
                style={{
                  backgroundColor: '#3E332E',
                  color: '#FAFAFA'
                }}
              >
                Start Sharing
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-6 text-sm font-medium"
                style={{
                  borderColor: '#3E332E',
                  color: '#3E332E'
                }}
              >
                Browse Items
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                width: '316px',
                height: '316px',
                backgroundColor: '#E4CDB7'
              }}
            >
              {/* Placeholder for hero image */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-6xl">👗</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-loved Treasures Section */}
      <section className="mx-auto max-w-[1360px] px-10 py-16">
        <div className="text-center space-y-4 mb-12">
          <h2
            className="text-4xl font-semibold"
            style={{
              color: '#3E332E',
              lineHeight: '40px'
            }}
          >
            Pre-loved Treasures
          </h2>
          <p
            className="text-lg mx-auto max-w-2xl"
            style={{
              color: '#815E46',
              lineHeight: '28px'
            }}
          >
            Each piece has been carefully selected and loved. Find your next favorite item.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 rounded-xl"
              style={{ backgroundColor: '#FCF9F6' }}
            >
              {/* Product Image */}
              <div
                className="relative w-full aspect-square overflow-hidden"
                style={{ backgroundColor: '#E4CDB7' }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-6xl">👕</span>
                </div>
              </div>

              {/* Product Info */}
              <div
                className="p-6 space-y-2"
                style={{ backgroundColor: '#FCF9F6' }}
              >
                <h3
                  className="text-lg font-semibold line-clamp-1"
                  style={{
                    color: '#3E332E',
                    lineHeight: '28px'
                  }}
                >
                  {product.title}
                </h3>
                <p
                  className="text-lg font-medium"
                  style={{
                    color: '#543E2E',
                    lineHeight: '28px'
                  }}
                >
                  {product.price}
                </p>
                <Button
                  variant="outline"
                  className="w-full rounded-full h-12 mt-2 text-sm font-medium"
                  style={{
                    borderColor: '#3E332E',
                    color: '#3E332E'
                  }}
                >
                  Add to cart
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            className="rounded-full h-12 px-8 text-sm font-medium"
            style={{
              borderColor: '#3E332E',
              color: '#3E332E'
            }}
          >
            Load More
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="mt-20"
        style={{ backgroundColor: '#3E332E' }}
      >
        <div className="mx-auto max-w-[1360px] px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback style={{ backgroundColor: '#FAFAFA', color: '#3E332E' }}>
                    E
                  </AvatarFallback>
                </Avatar>
                <span className="text-lg font-bold" style={{ color: '#FAFAFA' }}>
                  Everyday
                </span>
              </div>
              <p
                className="text-base"
                style={{ color: '#E4CDB7' }}
              >
                Sustainable fashion marketplace connecting conscious buyers and sellers.
              </p>
            </div>

            {/* Shop Column */}
            <div>
              <h4 className="font-semibold mb-4" style={{ color: '#FAFAFA' }}>
                Shop
              </h4>
              <ul className="space-y-2">
                {['All Items', 'Clothing', 'Accessories', 'Shoes'].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-base hover:underline"
                      style={{ color: '#E4CDB7' }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h4 className="font-semibold mb-4" style={{ color: '#FAFAFA' }}>
                Support
              </h4>
              <ul className="space-y-2">
                {['Help Center', 'Shipping Info', 'Returns', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-base hover:underline"
                      style={{ color: '#E4CDB7' }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community Column */}
            <div>
              <h4 className="font-semibold mb-4" style={{ color: '#FAFAFA' }}>
                Community
              </h4>
              <ul className="space-y-2">
                {['About Us', 'Sustainability', 'Blog', 'Join Us'].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-base hover:underline"
                      style={{ color: '#E4CDB7' }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div
            className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4 text-sm"
            style={{ borderColor: '#815E46' }}
          >
            <p style={{ color: '#E4CDB7' }}>
              © 2026 Everyday. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="hover:underline"
                style={{ color: '#E4CDB7' }}
              >
                Privacy Policy
              </Link>
              <span style={{ color: '#815E46' }}>|</span>
              <Link
                href="#"
                className="hover:underline"
                style={{ color: '#E4CDB7' }}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
