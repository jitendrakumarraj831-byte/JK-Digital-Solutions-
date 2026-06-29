"use client";
import { useState } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

const types = ["Medical / Clinic","Restaurant / Dhaba","Coaching / School","Real Estate","Beauty / Salon","Hardware / Retail","Hotel / Hospitality","Service Provider","Other"];

interface F { name: string; phone: string; businessType: string; message: string; }
type S = "idle"|"loading"|"success"|"error";

export default function Contact() {
  const [form, setForm] = useState<F>({ name:"", phone:"", businessType:"", message:"" });
  const [status, setStatus] = useState<S>("idle");
  const [msg, setMsg] = useState("");

  const chg = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const sub = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus("loading");
    try {
      const r = await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form) });
      const d = await r.json();
      if (d.success) { setStatus("success"); setMsg(d.message); setForm({ name:"", phone:"", businessType:"", message:"" }); }
      else { setStatus("error"); setMsg(d.error||"Something went wrong."); }
    } catch { setStatus("error"); setMsg("Network error. Try again."); }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">Contact</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-4">
              बात करते हैं
            </h2>
            <p className="text-gray-500 text-lg mb-10">
              Form भरें या directly call/WhatsApp करें। हम 30 minutes में respond करते हैं।
            </p>

            <div className="space-y-5">
              {[
                { icon: "💬", label: "WhatsApp (Fastest)", val: "+91 86510 70831", href: "https://wa.me/918651070831" },
                { icon: "📞", label: "Call करें", val: "+91 86510 70831 / +91 85418 49118", href: "tel:+918651070831" },
                { icon: "📧", label: "Email", val: "jkdigitalsolutionfbg@gmail.com", href: "mailto:jkdigitalsolutionfbg@gmail.com" },
                { icon: "📍", label: "Office", val: "Forbesganj, Araria, Bihar — 854318", href: "https://maps.google.com/?q=Forbesganj,Bihar" },
              ].map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-4 group">
                  <span className="text-xl w-8 flex-shrink-0 mt-0.5">{c.icon}</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-0.5">{c.label}</p>
                    <p className="text-gray-800 font-semibold text-sm group-hover:text-blue-600 transition-colors">{c.val}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Business Hours</p>
              <p className="text-sm text-gray-600">Monday – Saturday: <strong>9AM – 8PM</strong></p>
              <p className="text-sm text-gray-600">Sunday: <strong>10AM – 6PM</strong></p>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-gray-50 rounded-3xl border border-gray-200 p-7 lg:p-9">
            <h3 className="font-black text-gray-900 text-xl mb-1">Free Audit Request</h3>
            <p className="text-gray-400 text-sm mb-6">हम personally analyze करके बताएंगे कि आपके business के लिए क्या best है।</p>

            <form onSubmit={sub} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Name *</label>
                  <input type="text" name="name" value={form.name} onChange={chg} required placeholder="आपका नाम"
                    className="inp" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">WhatsApp *</label>
                  <input type="tel" name="phone" value={form.phone} onChange={chg} required placeholder="10-digit number" maxLength={10}
                    className="inp" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Business Type *</label>
                <select name="businessType" value={form.businessType} onChange={chg} required className="inp bg-white cursor-pointer appearance-none">
                  <option value="">Select your business</option>
                  {types.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Message *</label>
                <textarea name="message" value={form.message} onChange={chg} required rows={4}
                  placeholder="आप क्या चाहते हैं? Website, SEO, Ads? जितना बताएंगे, उतनी better advice मिलेगी।"
                  className="inp resize-none" />
              </div>

              {status === "success" && (
                <div className="flex gap-2 p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <p className="text-emerald-700 text-xs font-medium">{msg}</p>
                </div>
              )}
              {status === "error" && (
                <div className="flex gap-2 p-3 rounded-xl bg-red-50 border border-red-100">
                  <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-red-600 text-xs font-medium">{msg}</p>
                </div>
              )}

              <button type="submit" disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20 disabled:opacity-50">
                {status === "loading"
                  ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                  : <><Send className="w-4 h-4" /> Free Audit Request भेजें 🚀</>}
              </button>
              <p className="text-gray-400 text-xs text-center">🔒 100% secure. No spam, ever.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
