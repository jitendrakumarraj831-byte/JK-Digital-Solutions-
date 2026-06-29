"use client";
import { useState } from "react";
import { Send, MessageCircle, Phone, Mail, MapPin, Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  businessType: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", phone: "", businessType: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setResponseMsg(data.message);
        setForm({ name: "", phone: "", businessType: "", message: "" });
      } else {
        setStatus("error");
        setResponseMsg(data.error || "कुछ गड़बड़ी हुई। दोबारा कोशिश करें।");
      }
    } catch {
      setStatus("error");
      setResponseMsg("नेटवर्क एरर। कृपया दोबारा कोशिश करें।");
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "WhatsApp / Call",
      value: "+91 8651070831",
      href: "https://wa.me/918651070831",
      color: "cyan",
    },
    {
      icon: Phone,
      label: "WhatsApp / Call",
      value: "+91 8541849118",
      href: "https://wa.me/918541849118",
      color: "cyan",
    },
    {
      icon: Mail,
      label: "Email",
      value: "jkdigitalsolutionfbg@gmail.com",
      href: "mailto:jkdigitalsolutionfbg@gmail.com",
      color: "emerald",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Forbesganj, Araria, Bihar, India",
      href: "https://maps.google.com/?q=Forbesganj,Bihar,India",
      color: "emerald",
    },
  ];

  const businessTypes = [
    "Retail Shop / दुकान",
    "Restaurant / Hotel",
    "Medical / Pharmacy",
    "Education / Coaching",
    "Real Estate",
    "Manufacturing",
    "Service Business",
    "Other / अन्य",
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 text-sm font-semibold tracking-wide uppercase">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            <span className="glow-text text-cyan-400">फ्री कंसल्टेशन</span> लें आज ही!
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            अपना नाम और नंबर भरें — हम 30 मिनट में वापस call करेंगे।
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="why-card rounded-2xl p-6 space-y-5">
              <h3 className="text-white font-bold text-xl">सीधे संपर्क करें</h3>
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const isCyan = item.color === "cyan";
                return (
                  <a
                    key={item.value}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-start gap-3 p-3 rounded-xl border transition-all hover:-translate-y-0.5 group ${
                      isCyan
                        ? "border-cyan-500/10 hover:border-cyan-500/30 hover:bg-cyan-500/5"
                        : "border-emerald-500/10 hover:border-emerald-500/30 hover:bg-emerald-500/5"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isCyan ? "bg-cyan-500/15 text-cyan-400" : "bg-emerald-500/15 text-emerald-400"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-medium uppercase tracking-wide">{item.label}</p>
                      <p className={`font-semibold text-sm mt-0.5 ${isCyan ? "text-cyan-300" : "text-emerald-300"}`}>
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918651070831?text=नमस्ते! मुझे JK Digital Solutions की सर्विसेज के बारे में जानना है।"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30 text-emerald-300 font-bold hover:from-emerald-500/30 hover:to-emerald-600/30 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp पर चैट करें
            </a>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="service-card rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-6">फ्री ऑडिट फॉर्म भरें</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">
                    नाम (Name) <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="आपका पूरा नाम"
                    className="input-field w-full px-4 py-3 rounded-xl text-sm"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">
                    मोबाइल नंबर (WhatsApp) <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    className="input-field w-full px-4 py-3 rounded-xl text-sm"
                  />
                </div>

                {/* Business Type */}
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">
                    बिजनेस का प्रकार <span className="text-cyan-400">*</span>
                  </label>
                  <select
                    name="businessType"
                    value={form.businessType}
                    onChange={handleChange}
                    required
                    className="input-field w-full px-4 py-3 rounded-xl text-sm appearance-none cursor-pointer"
                  >
                    <option value="">-- अपना बिजनेस चुनें --</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type} className="bg-slate-900">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">
                    संदेश (Message) <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="आप क्या जानना चाहते हैं? अपनी ज़रूरत बताएं..."
                    className="input-field w-full px-4 py-3 rounded-xl text-sm resize-none"
                  />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <p className="text-emerald-300 text-sm font-medium">{responseMsg}</p>
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/25">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-red-300 text-sm font-medium">{responseMsg}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-glow w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold text-base border border-cyan-400/30 shadow-lg shadow-cyan-500/20 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      भेजा जा रहा है...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      फ्री ऑडिट के लिए भेजें 🚀
                    </>
                  )}
                </button>

                <p className="text-slate-500 text-xs text-center">
                  आपकी जानकारी पूरी तरह सुरक्षित है। हम spam नहीं करते।
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
