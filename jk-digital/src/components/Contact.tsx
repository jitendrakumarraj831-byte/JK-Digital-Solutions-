"use client";
import { useState } from "react";
import { Send, MessageCircle, Phone, Mail, MapPin, Clock, Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface FormData { name: string; phone: string; businessType: string; message: string; }
type Status = "idle" | "loading" | "success" | "error";

const businessTypes = ["Medical / Clinic / Hospital","Restaurant / Hotel / Dhaba","Coaching / School / Institute","Real Estate / Property","Beauty / Salon / Spa","Hardware / Retail Shop","Interior Design","Service Provider","Other / अन्य"];

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", phone: "", businessType: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (data.success) { setStatus("success"); setMsg(data.message); setForm({ name: "", phone: "", businessType: "", message: "" }); }
      else { setStatus("error"); setMsg(data.error || "Something went wrong."); }
    } catch { setStatus("error"); setMsg("Network error. Please try again."); }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">Contact Us</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
            आज ही बात करें — <span className="gradient-text">Free Consultation</span>
          </h2>
          <p className="text-slate-500 text-lg">Form भरें या directly WhatsApp करें। हम 30 minutes में reply करते हैं।</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Info */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: MessageCircle, label: "WhatsApp", value: "+91 86510 70831", sub: "Instant Response", href: "https://wa.me/918651070831", iconBg: "bg-emerald-50 border-emerald-100 text-emerald-600" },
              { icon: Phone, label: "Call Now", value: "+91 86510 70831 / 85418 49118", sub: "Mon–Sat 9AM–8PM", href: "tel:+918651070831", iconBg: "bg-blue-50 border-blue-100 text-blue-600" },
              { icon: Mail, label: "Email", value: "jkdigitalsolutionfbg@gmail.com", sub: "Reply in 2 hours", href: "mailto:jkdigitalsolutionfbg@gmail.com", iconBg: "bg-violet-50 border-violet-100 text-violet-600" },
              { icon: MapPin, label: "Office", value: "Forbesganj, Araria, Bihar", sub: "India — 854318", href: "https://maps.google.com/?q=Forbesganj,Bihar", iconBg: "bg-slate-50 border-slate-200 text-slate-600" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <a key={c.label} href={c.href} target={c.label !== "Call Now" ? "_blank" : undefined} rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-sm transition-all">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${c.iconBg}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-400 text-xs font-semibold uppercase tracking-wide">{c.label}</p>
                    <p className="text-slate-900 font-semibold text-sm mt-0.5 break-all">{c.value}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{c.sub}</p>
                  </div>
                </a>
              );
            })}

            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-slate-800 font-bold text-sm">Business Hours</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm"><span className="text-slate-500">Monday – Saturday</span><span className="text-slate-800 font-semibold">9AM – 8PM</span></div>
                <div className="flex justify-between text-sm"><span className="text-slate-500">Sunday</span><span className="text-slate-800 font-semibold">10AM – 6PM</span></div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden h-44">
              <iframe src="https://maps.google.com/maps?q=Forbesganj,Bihar,India&output=embed"
                width="100%" height="100%" style={{ border: 0 }} loading="lazy" title="Office Location" />
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-slate-200 p-7 lg:p-9 shadow-sm">
              <h3 className="text-slate-900 font-bold text-xl mb-1">Free Website Audit Request</h3>
              <p className="text-slate-500 text-sm mb-6">Form भरें — हम personally analyze करके बताएंगे कि आपके लिए क्या best है।</p>

              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 text-sm font-semibold mb-1.5">Full Name <span className="text-red-400">*</span></label>
                    <input type="text" name="name" value={form.name} onChange={onChange} required placeholder="आपका पूरा नाम"
                      className="input-premium w-full px-4 py-3 rounded-xl text-sm" />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-semibold mb-1.5">WhatsApp Number <span className="text-red-400">*</span></label>
                    <input type="tel" name="phone" value={form.phone} onChange={onChange} required placeholder="10-digit number" maxLength={10}
                      className="input-premium w-full px-4 py-3 rounded-xl text-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 text-sm font-semibold mb-1.5">Business Type <span className="text-red-400">*</span></label>
                  <select name="businessType" value={form.businessType} onChange={onChange} required
                    className="input-premium w-full px-4 py-3 rounded-xl text-sm appearance-none cursor-pointer bg-white">
                    <option value="">-- Select your business type --</option>
                    {businessTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 text-sm font-semibold mb-1.5">Message / Requirements <span className="text-red-400">*</span></label>
                  <textarea name="message" value={form.message} onChange={onChange} required rows={4}
                    placeholder="आप क्या चाहते हैं? Website, SEO, GMB, Ads — या सब कुछ? बताएं..."
                    className="input-premium w-full px-4 py-3 rounded-xl text-sm resize-none" />
                </div>

                {status === "success" && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <p className="text-emerald-700 text-sm font-medium">{msg}</p>
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-100">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-red-600 text-sm font-medium">{msg}</p>
                  </div>
                )}

                <button type="submit" disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-base shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 transition-all disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === "loading"
                    ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                    : <><Send className="w-4 h-4" /> Send Free Audit Request 🚀</>}
                </button>

                <p className="text-slate-400 text-xs text-center">🔒 Your information is 100% secure. No spam, ever.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
