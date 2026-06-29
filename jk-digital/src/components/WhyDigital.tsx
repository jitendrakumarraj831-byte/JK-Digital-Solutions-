import { Store, Search, Target, Clock } from "lucide-react";

const cards = [
  {
    icon: Store,
    number: "01",
    title: "सीमित बाजार vs पूरा शहर",
    description:
      "आपकी दुकान एक गली तक सीमित है — वहीं से आगे नहीं बढ़ पाती। लेकिन जब आपका बिजनेस इंटरनेट पर होगा, तो Forbesganj और Araria जिले के हज़ारों लोग आपको ढूंढ सकते हैं। एक छोटी सी वेबसाइट आपकी दुकान को पूरे जिले में खोल देती है।",
    highlight: "पूरा Forbesganj & Araria आपका बाज़ार!",
    color: "cyan",
  },
  {
    icon: Search,
    number: "02",
    title: "ग्राहक अब गूगल पर ढूंढते हैं",
    description:
      "जब कोई Google पर \"Best shop near me\" या \"Best medical store Forbesganj\" सर्च करता है — तो वो सबसे पहले वाली दुकान में जाता है। अगर आप Google पर नहीं हैं, तो रोज़ दर्जनों ग्राहक आपके competitor के पास जा रहे हैं।",
    highlight: "Google Maps पर top पर आएं — रोज़ calls पाएं!",
    color: "emerald",
  },
  {
    icon: Target,
    number: "03",
    title: "स्मार्ट विज्ञापन, सही ग्राहक",
    description:
      "पहले pamphlet छपवाना पड़ता था — 5,000 में से शायद 10 लोग काम के निकलते थे। अब Google Ads और Meta Ads में पैसा सिर्फ उन लोगों पर लगता है जो पहले से आपकी सर्विस खरीदने के इच्छुक हैं। हर रुपया सही जगह।",
    highlight: "Zero Waste Budget — Only Real Buyers देखते हैं!",
    color: "cyan",
  },
  {
    icon: Clock,
    number: "04",
    title: "24/7 खुली दुकान",
    description:
      "रात 11 बजे आपकी दुकान बंद है — लेकिन कोई ग्राहक आपकी service ढूंढ रहा है। एक Next.js website रात को भी leads capture करती है, सवालों के जवाब देती है, और सुबह होते ही आपके पास enquiries ready मिलती हैं।",
    highlight: "नींद में भी बिजनेस — सोते रहो, leads आते रहें!",
    color: "emerald",
  },
];

export default function WhyDigital() {
  return (
    <section id="why-digital" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/5 text-emerald-400 text-sm font-semibold tracking-wide uppercase">
            Why Go Digital?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            हमें <span className="glow-text-emerald text-emerald-400">डिजिटल क्यों</span> होना है?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            जो बिजनेस ऑनलाइन है वो आगे बढ़ रहा है। जो नहीं है — वो पीछे रह जा रहा है।
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            const isCyan = card.color === "cyan";
            return (
              <div key={card.number} className="why-card rounded-2xl p-8 group">
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center border group-hover:scale-110 transition-transform ${
                      isCyan
                        ? "bg-cyan-500/10 border-cyan-500/25 text-cyan-400"
                        : "bg-emerald-500/10 border-emerald-500/25 text-emerald-400"
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  {/* Number */}
                  <span
                    className={`text-5xl font-black opacity-15 leading-none ${
                      isCyan ? "text-cyan-400" : "text-emerald-400"
                    }`}
                  >
                    {card.number}
                  </span>
                </div>

                <h3 className="text-white font-bold text-xl mt-5 mb-3">{card.title}</h3>
                <p className="text-slate-400 text-base leading-relaxed mb-5">{card.description}</p>

                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border ${
                    isCyan
                      ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-300"
                      : "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
                  }`}
                >
                  ✅ {card.highlight}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
