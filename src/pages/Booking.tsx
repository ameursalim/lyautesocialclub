
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingCalendar from "@/components/BookingCalendar";
import { Button } from "@/components/ui/button";

const Booking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Booking Header */}
        <section className="bg-gray-50 py-12 mb-10">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-gray-600 hover:text-brand-accent transition-colors mb-6"
            >
              <ChevronLeft size={16} className="mr-1" />
              Back to Home
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-brand-dark">Book Your Padel Court</h1>
                <p className="text-gray-600 mt-2">
                  Select a date and time to reserve your court at Lyautey Social Club
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-brand-accent"></span>
                <span className="text-gray-600 text-sm">Available Slots</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Booking Calendar */}
        <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-gray-50 rounded-3xl p-6 md:p-10 mb-12">
            <BookingCalendar />
          </div>
        </section>
        
        {/* Additional Information */}
        <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-subtle">
              <h3 className="text-xl font-semibold text-brand-dark mb-4">Court Information</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• 60-minute court sessions</li>
                <li>• 6 premium glass-walled courts</li>
                <li>• Climate controlled indoor facility</li>
                <li>• Professional-grade artificial turf</li>
                <li>• Court lighting for evening play</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-subtle">
              <h3 className="text-xl font-semibold text-brand-dark mb-4">Booking Policy</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Bookings up to 7 days in advance</li>
                <li>• Cancellations accepted up to 24 hours before</li>
                <li>• Locker rooms and showers available</li>
                <li>• Equipment rental available on site</li>
                <li>• Arrive 15 minutes before your session</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-subtle">
              <h3 className="text-xl font-semibold text-brand-dark mb-4">Coaching Services</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Private lessons (1-2 players)</li>
                <li>• Group sessions (3-4 players)</li>
                <li>• Kids programs (ages 5-16)</li>
                <li>• Beginner to advanced levels</li>
                <li>• Add coaching during court booking</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-10 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How far in advance can I book a court?",
                answer: "You can book courts up to 7 days in advance. For regular weekly bookings, we offer membership packages that allow bookings up to 14 days ahead."
              },
              {
                question: "What is your cancellation policy?",
                answer: "Cancellations made at least 24 hours before your reserved time are fully refundable. Cancellations with less than 24 hours notice are non-refundable."
              },
              {
                question: "Do you provide padel equipment?",
                answer: "Yes, we offer premium padel rackets and balls for rent. Equipment rental is not included in court booking and can be added during the checkout process."
              },
              {
                question: "Can I book a coach with my court reservation?",
                answer: "Absolutely! You can add coaching services during the booking process. We offer private and group coaching for all skill levels."
              },
              {
                question: "Are there changing facilities available?",
                answer: "Yes, we provide modern locker rooms with showers, toilets, and changing areas for all players."
              },
              {
                question: "How long is each court session?",
                answer: "Standard court bookings are for 60-minute sessions. If you need more time, you can book consecutive slots."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-brand-dark mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
