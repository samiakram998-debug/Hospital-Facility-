/*
  Hospital Facility - Single-file React app (App.jsx)
  - Tailwind CSS utility classes (assumes Tailwind is set up in your project)
  - Uses lucide-react icons and shadcn/ui are available if desired
  - Designed to be dropped into a Vite/CRA/Next project as `App.jsx` (or `App.tsx` with small tweaks)

  How to use on GitHub Pages (quick):
  1. Create a new repo on GitHub (e.g. hospital-facility-web).
  2. Initialize a Vite React app locally: `pnpm create vite@latest hospital-facility-web -- --template react`
     or use `npm create vite@latest ...` or use Create React App.
  3. Install dependencies: `npm install` then `npm i lucide-react` (optional).
  4. Add Tailwind: follow Tailwind official guide for Vite/CRA. (tailwindcss, postcss, autoprefixer)
  5. Replace `src/App.jsx` with this file. Add any images into `public/` and update paths.
  6. Commit and push to GitHub. Enable GitHub Pages from main branch (or use `gh-pages` for CRA) OR deploy from the `gh-pages` branch. For Vite + GitHub Pages you can use the `pages` workflow or GitHub Pages from the `gh-pages` branch.

  This file is intentionally self-contained and focuses on structure, accessibility and responsive layout.
*/

import React, { useState } from 'react';
import { Phone, MapPin, Mail, Calendar, UserCheck, Activity } from 'lucide-react';

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [appt, setAppt] = useState({ name: '', phone: '', dept: 'General', date: '' });
  const [msg, setMsg] = useState('');

  const services = [
    { id: 1, title: 'Emergency Care', desc: '24/7 emergency department with rapid response teams.' },
    { id: 2, title: 'Outpatient Clinics', desc: 'Specialist clinics: Cardiology, Orthopedics, Pediatrics.' },
    { id: 3, title: 'Diagnostics', desc: 'Radiology, Laboratory, MRI, CT-scan and Ultrasound services.' },
    { id: 4, title: 'Surgery', desc: 'General and specialized surgical procedures with post-op care.' },
  ];

  const doctors = [
    { id: 1, name: 'Dr. Aisha Khan', speciality: 'Cardiologist' },
    { id: 2, name: 'Dr. Imran Ali', speciality: 'Orthopedic Surgeon' },
    { id: 3, name: 'Dr. Noor Fatima', speciality: 'Pediatrician' },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    // client-side validation
    if (!appt.name || !appt.phone || !appt.date) {
      setMsg('Please fill name, phone and date.');
      return;
    }
    // This is a demo app — there is no backend. In production, send to an API endpoint.
    setMsg(`Appointment request received for ${appt.name} on ${appt.date}. We will contact ${appt.phone}.`);
    setAppt({ name: '', phone: '', dept: 'General', date: '' });
    setShowForm(false);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold">HF</div>
            <div>
              <h1 className="text-xl font-semibold">Hospital Facility</h1>
              <p className="text-xs text-gray-500">Care. Compassion. Community.</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-teal-600">Services</a>
            <a href="#doctors" className="hover:text-teal-600">Doctors</a>
            <a href="#contact" className="hover:text-teal-600">Contact</a>
            <button onClick={() => setShowForm(true)} className="ml-2 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm hover:opacity-95">Book Appointment</button>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setShowForm(true)} className="px-3 py-2 bg-teal-600 text-white rounded-md">Book</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Reliable hospital services for you and your family.</h2>
            <p className="mt-4 text-gray-600">We combine modern medicine with a compassionate approach. Our departments cover a wide range of specialties and our staff is available 24/7 for emergencies.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => setShowForm(true)} className="px-5 py-3 bg-teal-600 text-white rounded-lg shadow">Book Appointment</button>
              <a href="#services" className="px-5 py-3 border rounded-lg text-sm">Explore Services</a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-700">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-xs text-gray-500">+92 300 0000000</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-xs text-gray-500">info@hospital.example</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="font-semibold">Quick Triage</h3>
              <p className="text-sm text-gray-500 mt-2">If this is an emergency, call +92 300 0000000 or visit our emergency department immediately.</p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-4 border rounded-lg">
                  <div className="text-xs text-gray-500">Walk-in</div>
                  <div className="mt-1 font-semibold">Open 24/7</div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="text-xs text-gray-500">Ambulance</div>
                  <div className="mt-1 font-semibold">Available</div>
                </div>
              </div>

              <div className="mt-4">
                <iframe title="hospital-map" src="https://maps.google.com/maps?q=Karachi&t=&z=13&ie=UTF8&iwloc=&output=embed" className="w-full h-40 rounded-lg border" />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mt-12">
          <h3 className="text-2xl font-bold">Our Services</h3>
          <p className="text-gray-600 mt-2">Comprehensive medical services backed by experienced staff and modern equipment.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map(s => (
              <article key={s.id} className="bg-white p-5 rounded-lg shadow-sm">
                <div className="font-semibold">{s.title}</div>
                <p className="text-sm text-gray-500 mt-2">{s.desc}</p>
                <div className="mt-4">
                  <button className="text-sm px-3 py-2 border rounded-md">Learn more</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="doctors" className="mt-12">
          <h3 className="text-2xl font-bold">Meet Our Doctors</h3>
          <p className="text-gray-600 mt-2">Qualified specialists across departments.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {doctors.map(d => (
              <div key={d.id} className="bg-white p-4 rounded-lg shadow-sm flex gap-4 items-center">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-teal-600 font-semibold">{d.name.split(' ')[1]?.[0] || 'D'}</div>
                <div>
                  <div className="font-semibold">{d.name}</div>
                  <div className="text-sm text-gray-500">{d.speciality}</div>
                </div>
                <div className="ml-auto">
                  <button onClick={() => { setShowForm(true); setAppt(prev => ({ ...prev, dept: d.speciality })); }} className="px-3 py-2 bg-teal-600 text-white rounded-md text-sm">Book</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <p className="text-sm text-gray-500 mt-2">Reach out for general queries or feedback.</p>

            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <MapPin size={18} />
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-xs text-gray-500">City Center, Karachi, Pakistan</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-xs text-gray-500">+92 300 0000000</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-xs text-gray-500">info@hospital.example</div>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-white p-6 rounded-lg shadow-sm" onSubmit={e => { e.preventDefault(); setMsg('Thank you for your message — we will reply soon.'); }}>
            <h4 className="text-lg font-semibold">Send a Message</h4>
            <div className="mt-4 grid grid-cols-1 gap-3">
              <input className="border rounded-md p-2" placeholder="Your name" required />
              <input className="border rounded-md p-2" placeholder="Your email" type="email" required />
              <textarea className="border rounded-md p-2" placeholder="Message" rows={4} required />
              <div className="flex items-center justify-between">
                <button className="px-4 py-2 bg-teal-600 text-white rounded-md" type="submit">Send</button>
                <div className="text-sm text-gray-500">We reply within 48 hours</div>
              </div>
            </div>
          </form>
        </section>

        <footer className="mt-12 py-8 text-gray-600 text-sm">
          <div className="border-t pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>© {new Date().getFullYear()} Hospital Facility — All rights reserved.</div>
              <div className="flex gap-4">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Sitemap</a>
              </div>
            </div>
          </div>
        </footer>

      </main>

      {/* Appointment modal / drawer */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-30" onClick={() => setShowForm(false)} />
          <div className="relative w-full max-w-md bg-white rounded-t-2xl md:rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calendar size={20} />
                <div className="font-semibold">Book Appointment</div>
              </div>
              <button onClick={() => setShowForm(false)} className="text-gray-500">Close</button>
            </div>

            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-3">
                <input value={appt.name} onChange={e => setAppt(prev => ({ ...prev, name: e.target.value }))} placeholder="Full name" className="border rounded-md p-2" />
                <input value={appt.phone} onChange={e => setAppt(prev => ({ ...prev, phone: e.target.value }))} placeholder="Phone number" className="border rounded-md p-2" />
                <select value={appt.dept} onChange={e => setAppt(prev => ({ ...prev, dept: e.target.value }))} className="border rounded-md p-2">
                  <option>General</option>
                  <option>Cardiology</option>
                  <option>Orthopedics</option>
                  <option>Pediatrics</option>
                </select>
                <input type="date" value={appt.date} onChange={e => setAppt(prev => ({ ...prev, date: e.target.value }))} className="border rounded-md p-2" />

                <div className="flex items-center gap-2">
                  <UserCheck size={18} /> <div className="text-sm text-gray-600">All information is confidential.</div>
                </div>

                <div className="flex items-center justify-between">
                  <button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded-md">Submit</button>
                  <button type="button" onClick={() => { setShowForm(false); setMsg(''); }} className="px-3 py-2 border rounded-md">Cancel</button>
                </div>

                {msg && <div className="text-sm text-teal-700">{msg}</div>}
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
