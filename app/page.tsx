"use client";

import { useMemo } from "react";
import { Phone, ClipboardList, ArrowRight, Mail, CheckCircle2, MapPin } from "lucide-react";

const BRAND = {
  name: "Clear Out LLC",
  tagline: "Junk Removal • Hauling • Moving Help",
  phone: "+1 (720) 557-4085",
  email: "Liam-Dutka@clearoutltd.com",
  serviceArea: "Boulder County & Nearby",
  address: "Boulder, CO",
};

export default function Page() {
  const telHref = useMemo(
    () => `tel:${BRAND.phone.replace(/[^\d+]/g, "")}`,
    []
  );
  const mailHref = useMemo(
    () => `mailto:${BRAND.email}?subject=${encodeURIComponent("Quote request from website")}`,
    []
  );

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section id="top" className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-full px-3 py-1 shadow-sm">
            <MapPin className="h-3.5 w-3.5" /> {BRAND.serviceArea}
          </div>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold">
            🍂 {BRAND.name} – September Specials 🍂
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Serving Boulder &amp; all of Boulder County
          </p>
          <p className="mt-4 text-lg text-slate-700">
            This September, we’re offering exclusive discounts to help you clear out your home, yard, or business before fall sets in. Whether it’s a full house clean-out or just a single item, our professional team is here to make it easy.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={telHref} className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold bg-slate-900 text-white shadow hover:opacity-90">
              <Phone className="h-4 w-4" /> Call / Text {BRAND.phone}
            </a>
            <a href={mailHref} className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold border border-slate-300 text-slate-800 hover:bg-slate-100">
              <Mail className="h-4 w-4" /> {BRAND.email}
            </a>
          </div>
        </div>
      </section>

      {/* Specials / Price Cards */}
      <section id="pricing" className="py-16 sm:py-24 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Featured September Discounts!!</h2>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              { item: "Outdoor Structure/Attachment Removal", regular: "$700", special: "$600" },
              { item: "Outdoor Item Removal", regular: "$150", special: "$100" },
              { item: "Appliance Removal", regular: "$120", special: "$95" },
              { item: "Small–Medium Trash Clean Up", regular: "$115", special: "$85" },
              { item: "Large Trash Clean Up", regular: "$185", special: "$150" },
              { item: "2–3 Bedroom House Removal", regular: "$1200", special: "$975" },
              { item: "4–5 Bedroom House Removal", regular: "$1600", special: "$1375" },
              { item: "Garage Cleanout", regular: "$400", special: "$325" },
              { item: "Mattress & Bed Frame Removal", regular: "$150", special: "$110" },
              { item: "Yard Debris Hauling", regular: "$300", special: "$225" }
            ].map((service, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{service.item}</h3>
                <p className="mt-2 text-slate-600 line-through">Regular {service.regular}</p>
                <p className="text-xl font-bold text-slate-900">→ {service.special}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            *Final price depends on volume, weight, stairs/access, and dump fees. Over 1 metric ton surcharge may apply (+$200).
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Why Choose {BRAND.name}?</h2>
          <ul className="mt-6 space-y-2 text-lg text-slate-700">
            <li className="flex items-center justify-center gap-2"><CheckCircle2 className="h-5 w-5 text-slate-900"/> Local Boulder company</li>
            <li className="flex items-center justify-center gap-2"><CheckCircle2 className="h-5 w-5 text-slate-900"/> Licensed &amp; insured for peace of mind</li>
            <li className="flex items-center justify-center gap-2"><CheckCircle2 className="h-5 w-5 text-slate-900"/> Fast, professional, and respectful crews</li>
            <li className="flex items-center justify-center gap-2"><CheckCircle2 className="h-5 w-5 text-slate-900"/> Transparent pricing — no surprises</li>
            <li className="flex items-center justify-center gap-2"><CheckCircle2 className="h-5 w-5 text-slate-900"/> Starting our September promotion a week early 😉</li>
          </ul>
        </div>
      </section>

      {/* Lead / Contact */}
      <section id="contact" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Call or Text Today for a Free Quote!</h2>
          <p className="mt-2 text-lg text-slate-700">Leave your number or email below and we’ll get back to you right away.</p>

          {/* Formspree-ready form (replace YOUR_ENDPOINT to activate) */}
          <form
            action="https://formspree.io/f/YOUR_ENDPOINT"
            method="POST"
            className="mt-6 grid gap-3 max-w-md mx-auto"
            onSubmit={(e) => {
              // Remove this preventDefault when you add a real endpoint
              if ((e.target as HTMLFormElement).action.includes("YOUR_ENDPOINT")) {
                e.preventDefault();
                alert("Form not wired yet. Tap Call/Text or Email, or add your Formspree endpoint.");
              }
            }}
          >
            <input name="name" className="w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="Your name" />
            <input name="contact" className="w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="Phone or email" />
            <button className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold bg-slate-900 text-white shadow hover:opacity-90" type="submit">
              <ClipboardList className="h-4 w-4" /> Get My Free Quote
            </button>
          </form>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={telHref} className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold bg-slate-900 text-white shadow hover:opacity-90">
              <Phone className="h-4 w-4" /> {BRAND.phone}
            </a>
            <a href={mailHref} className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold border border-slate-300 text-slate-800 hover:bg-slate-100">
              <Mail className="h-4 w-4" /> {BRAND.email}
            </a>
          </div>
        </div>
      </section>

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        // @ts-ignore — fine for JSON-LD
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: BRAND.name,
            telephone: BRAND.phone,
            email: BRAND.email,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Boulder",
              addressRegion: "CO",
              addressCountry: "US"
            },
            areaServed: BRAND.serviceArea,
            url: "https://clearout.example.com",
            description: `${BRAND.tagline} — Transparent pricing and fast, friendly hauling in Boulder County.`,
            openingHours: "Mo-Su",
            priceRange: "$$"
          }),
        }}
      />
    </div>
  );
}
