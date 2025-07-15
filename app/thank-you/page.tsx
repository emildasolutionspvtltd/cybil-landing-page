'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ThankYouPage() {
  useEffect(() => {
    // Auto-redirect to home page after 5 seconds
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h1>
          <p className="text-gray-600 mb-6">
            Your message has been sent successfully. We'll contact you shortly to discuss your business needs in Dubai.
          </p>
          <div className="space-y-3">
            <Link href="/">
              <Button className="w-full bg-[#f2b84b] hover:bg-[#f4d48c] text-black">
                Return to Home
              </Button>
            </Link>
            <p className="text-sm text-gray-500">
              You will be automatically redirected in 5 seconds...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
