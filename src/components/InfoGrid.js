// src/components/InfoGrid.jsx
'use client';

import Link from 'next/link';
import InfoCard from './InfoCard';
import {
  ShoppingCart,
  MapPin,
  CreditCard,
  List,
  Mail,
  Gift,
  Tag,
  Headphones,
} from 'lucide-react';

const profileItems = [
  {
    title: 'Your Orders',
    icon: ShoppingCart,
    iconBg: 'bg-blue-100',
    desc: 'Track, return, cancel an order, download invoice or buy again',
    href: '/account/orders',
  },
  {
    title: 'Your Addresses',
    icon: MapPin,
    iconBg: 'bg-red-100',
    desc: 'Add or edit your shipping addresses',
    href: '/account/addresses',
  },
  {
    title: 'Payment Methods',
    icon: CreditCard,
    iconBg: 'bg-yellow-100',
    desc: 'Manage your credit & debit cards',
    href: '/account/payment-methods',
  },
  {
    title: 'Your Lists',
    icon: List,
    iconBg: 'bg-green-100',
    desc: 'Wish lists & gift registries',
    href: '/account/lists',
  },
  {
    title: 'Newsletter / Subscription',
    icon: Mail,
    iconBg: 'bg-indigo-100',
    desc: 'Manage your subscriptions & emails',
    href: '/account/subscriptions',
  },
  {
    title: 'Loyalty & Rewards',
    icon: Gift,
    iconBg: 'bg-pink-100',
    desc: 'View and redeem your rewards points',
    href: '/account/rewards',
  },
  {
    title: 'Gift Cards & Coupons',
    icon: Tag,
    iconBg: 'bg-purple-100',
    desc: 'Redeem or check balances',
    href: '/account/gift-cards',
  },
  {
    title: 'Customer Support',
    icon: Headphones,
    iconBg: 'bg-gray-200',
    desc: 'Chat or get help from our team',
    href: '/support',
  },
];

export default function InfoGrid() {
  return (
    <div className="text-center pt-[30px]">
      <h1 className=" text-yellow-500 text-[60px] font-serif mb-8">
        Your account
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr gap-6">
        {profileItems.map(({ title, icon: Icon, iconBg, desc, href }) => (
          <Link
            key={title}
            href={href}
            className="block hover:bg-gray transition"
          >
            <InfoCard
              Icon={Icon}
              iconBg={iconBg}
              title={title}
              className="flex flex-col justify-between"
            >
              {desc}
            </InfoCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
