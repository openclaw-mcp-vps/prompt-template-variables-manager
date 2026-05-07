export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  const faqs = [
    {
      q: "What are template variables?",
      a: "Template variables are reusable snippets — like your company name, tone of voice, or product description — that you define once and inject into any AI prompt instantly."
    },
    {
      q: "Which AI tools does it work with?",
      a: "PromptVars works with ChatGPT, Claude, Gemini, and any browser-based AI chat via our bookmarklet. No browser extension install required."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Cancel anytime from your billing portal. You keep access until the end of your billing period."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Prompt Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop retyping the same context<br className="hidden sm:block" /> in every AI prompt
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          PromptVars lets marketing teams define reusable variables — brand voice, company info, audience — and inject them into any AI chat in one click.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $15/mo
        </a>
        <p className="text-xs text-[#8b949e] mt-3">No credit card required for trial. Cancel anytime.</p>
      </section>

      {/* Feature highlights */}
      <section className="grid sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "📋", title: "Define Once", desc: "Create variables for brand voice, company info, and audience segments." },
          { icon: "⚡", title: "Inject Anywhere", desc: "Use our bookmarklet to insert variables into ChatGPT, Claude, or Gemini." },
          { icon: "🔄", title: "Stay Consistent", desc: "Every prompt uses the same approved language — no more copy-paste errors." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] text-sm mb-6">/month per workspace</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited template variables",
              "Bookmarklet for all AI tools",
              "Team sharing & collaboration",
              "Variable version history",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} PromptVars. All rights reserved.
      </footer>
    </main>
  );
}
