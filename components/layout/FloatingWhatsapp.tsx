'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    // WhatsApp number - replace with actual number
    const phoneNumber = '2341234567890';
    const message = encodeURIComponent('Hi! I\'m interested in learning more about your cars.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
        {/* Expanded Info Card */}
        {isExpanded && (
          <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs animate-slide-in-bottom border border-gray-100">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-sm">Chat with Us</h4>
                  <p className="text-xs text-gray-500">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-3">
              Have questions about our cars? Our team is ready to help you!
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 text-white px-4 py-3 rounded-xl font-semibold text-sm hover:bg-green-600 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Start Chat on WhatsApp
            </button>
          </div>
        )}

        {/* Main Floating Button */}
        <button
          onClick={() => {
            if (isExpanded) {
              handleWhatsAppClick();
            } else {
              setIsExpanded(true);
            }
          }}
          className="relative group"
          aria-label="Contact us on WhatsApp"
        >
          {/* Unread Message Indicator */}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg animate-pulse z-10">
            1
          </span>

          {/* Button */}
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group-hover:from-green-600 group-hover:to-green-700">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>

          {/* Ripple Effect */}
          <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></span>
        </button>

        {/* Tooltip - Desktop Only */}
        {!isExpanded && (
          <div className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Chat with us on WhatsApp
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slide-in-bottom {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in-bottom {
          animation: slide-in-bottom 0.3s ease-out;
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </>
  );
}