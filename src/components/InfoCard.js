'use client';
import React from 'react';

export default function InfoCard({ Icon, iconBg, title, children }) {
  return (
    <div className="flex items-center space-x-4 border rounded-lg p-10 h-28 shadow-sm hover:bg-gray-100 transition">
      <div className={`${iconBg} p-2 rounded-full`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-lg text-left font-semibold mb-1">{title}</h3>
        <p className="text-sm text-left text-gray-600">{children}</p>
      </div>
    </div>
  );
}