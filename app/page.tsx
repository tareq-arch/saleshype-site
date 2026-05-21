export default function Home() {
  return (
    <main className="relative">
      {/* ─────────── NAV ─────────── */}
      <nav className="relative z-10 px-6 md:px-12 pt-8 pb-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-baseline gap-2.5 group">
            <span className="font-serif text-xl tracking-tightest font-medium text-ink">
              Sales Hype
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted font-medium">
              UK · GCC
            </span>
          </a>
          <div className="hidden md:flex items-center gap-10 text-sm text-ink">
            <a href="#proof" className="link-underline">Results</a>
            <a href="#how" className="link-underline">How it works</a>
            <a href="#pricing" className="link-underline">Pricing</a>
            <a href="#faq" className="link-underline">FAQ</a>
          </div>
          <a
            href="https://calendly.com/tareq-saleshype/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex text-sm bg-ink text-paper px-4 py-2.5 hover:bg-accent-deep transition-colors duration-300"
          >
            Book a 30-min call
          </a>
        </div>
      </nav>

      {/* ─────────── HERO ─────────── */}
      <section className="relative z-10 px-6 md:px-12 pt-16 md:pt-28 pb-20 md:pb-32">
        <div className="max-w-6xl mx-auto">
          {/* Eyebrow */}
          <div className="reveal reveal-1 flex items-center gap-3 mb-10 md:mb-14">
            <span className="block w-8 h-px bg-accent"></span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-accent font-medium">
              HubSpot Solutions Partner
            </span>
          </div>

          {/* Headline — display serif, the moment */}
          <h1 className="reveal reveal-2 font-serif font-light text-[40px] md:text-[64px] lg:text-[80px] leading-[1.02] tracking-tightest text-ink mb-10 md:mb-14 max-w-4xl">
            Outbound built by{" "}
            <span className="italic font-normal text-accent-deep">operators</span>
            ,<br className="hidden md:block" /> not agencies.
          </h1>

          {/* Subhead */}
          <p className="reveal reveal-3 text-lg md:text-xl text-muted max-w-2xl mb-12 leading-[1.55]">
            Managed B2B outbound for founders who want pipeline they can
            actually count on. Targeted lists, written sequences, full
            deliverability — the same system we run across our own portfolio
            of businesses, available to yours for{" "}
            <span className="text-ink font-medium">£1,800 a month</span>.
          </p>

          {/* CTA cluster */}
          <div className="reveal reveal-4 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">
            <a
              href="https://calendly.com/tareq-saleshype/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 hover:bg-accent-deep transition-colors duration-300 group"
            >
              <span className="text-sm font-medium tracking-wide">Book a 30-min pipeline call</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
              </svg>
            </a>
            <div className="flex items-center gap-3 text-sm text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              <span>30 minutes · no pitch · diagnostic only</span>
            </div>
          </div>

          {/* Trust strip — footer of hero */}
          <div className="reveal reveal-5 mt-24 md:mt-32 pt-8 border-t rule-soft grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-light mb-2">Built on</div>
              <div className="text-sm text-ink font-medium">HubSpot · Data tools · Enrichment</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-light mb-2">Markets</div>
              <div className="text-sm text-ink font-medium">UK · GCC · KSA</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-light mb-2">Languages</div>
              <div className="text-sm text-ink font-medium">English · العربية</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-light mb-2">Engagement</div>
              <div className="text-sm text-ink font-medium">£1,800/mo · 3-mo min</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── TL;DR — extractable for AI search ─────────── */}
      <section className="relative z-10 bg-ink text-paper px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.22em] text-accent mb-3 font-medium">
              In short
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tightest leading-[1.05]">
              What Sales Hype does
            </h2>
          </div>
          <div className="md:col-span-9 space-y-5 text-paper/85 text-[17px] md:text-lg leading-[1.65]">
            <p>
              Sales Hype is a HubSpot Solutions Partner running managed outbound
              lead generation for B2B businesses in the UK and GCC. We build
              targeted prospect lists using tools such as Apollo, Clay or
              ZoomInfo, write and operate cold email sequences, manage
              deliverability and protected sending setup, and report
              weekly on pipeline movement — all for{" "}
              <span className="text-paper font-medium">£1,800 per month</span>,
              three-month minimum, no setup fee.
            </p>
            <p>
              The business is built by an operator who runs the same outbound
              systems across a portfolio of four operating businesses —
              hospitality supply, recruitment, professional services, and fine
              foods. The system you buy is the system we use ourselves.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────── PROOF — real Caviar de Beluga data ─────────── */}
      <section id="proof" className="relative z-10 px-6 md:px-12 py-24 md:py-36 bg-paper-warm">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <span className="block w-8 h-px bg-accent"></span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-accent font-medium">
              Real outbound · Real numbers
            </span>
          </div>

          <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tightest leading-[1.05] text-ink max-w-3xl mb-6">
            A live sequence we built and are operating right now.
          </h2>
          <p className="text-muted text-lg max-w-2xl mb-16">
            Caviar de Beluga — luxury food importer in the Sales Hype operating
            portfolio. Director available as a reference. The same outbound
            operating model we install for clients.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-rule border rule-soft">
            <div className="bg-paper-warm p-8 md:p-10">
              <div className="font-serif font-light text-4xl md:text-6xl text-ink mb-3 tracking-tightest">
                528
              </div>
              <div className="text-xs uppercase tracking-[0.15em] text-muted font-medium">
                Prospects contacted
              </div>
            </div>
            <div className="bg-paper-warm p-8 md:p-10">
              <div className="font-serif font-light text-4xl md:text-6xl text-ink mb-3 tracking-tightest">
                901
              </div>
              <div className="text-xs uppercase tracking-[0.15em] text-muted font-medium">
                Emails delivered
              </div>
            </div>
            <div className="bg-paper-warm p-8 md:p-10">
              <div className="font-serif font-light text-4xl md:text-6xl text-accent mb-3 tracking-tightest">
                25.4<span className="text-2xl md:text-4xl">%</span>
              </div>
              <div className="text-xs uppercase tracking-[0.15em] text-muted font-medium">
                Open rate
              </div>
            </div>
            <div className="bg-paper-warm p-8 md:p-10">
              <div className="font-serif font-light text-4xl md:text-6xl text-accent mb-3 tracking-tightest">
                5.1<span className="text-2xl md:text-4xl">%</span>
              </div>
              <div className="text-xs uppercase tracking-[0.15em] text-muted font-medium">
                Reply rate
              </div>
            </div>
          </div>

          <p className="text-xs text-muted-light mt-6 font-mono">
            Industry benchmark for cold B2B outbound: 1–3% reply rate.
          </p>

          {/* Real reply snippets */}
          <div className="mt-20 grid md:grid-cols-3 gap-6">
            <div className="bg-paper p-7 border rule-soft">
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-light mb-3">
                Reply · Hospitality F&B
              </div>
              <p className="font-serif italic text-lg text-ink leading-[1.4]">
                "Yes, please send over the overview and pricing and I will
                discuss with the chefs."
              </p>
              <div className="mt-4 text-xs text-muted">— Head of F&B Commercial, London private members club</div>
            </div>
            <div className="bg-paper p-7 border rule-soft">
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-light mb-3">
                Reply · Luxury retail
              </div>
              <p className="font-serif italic text-lg text-ink leading-[1.4]">
                "Yes please, I currently have two enquiries."
              </p>
              <div className="mt-4 text-xs text-muted">— Buyer, UK luxury fine foods retailer</div>
            </div>
            <div className="bg-paper p-7 border rule-soft">
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-light mb-3">
                Reply · Hotel group
              </div>
              <p className="font-serif italic text-lg text-ink leading-[1.4]">
                "Please send over some information, it will feature on the
                menus and events occasionally."
              </p>
              <div className="mt-4 text-xs text-muted">— Executive Chef, UK hotel group</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── PROBLEM ─────────── */}
      <section className="relative z-10 px-6 md:px-12 py-24 md:py-36">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-8 h-px bg-accent"></span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-accent font-medium">
                The problem
              </span>
            </div>
            <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tightest leading-[1.05] text-ink">
              You know outbound works. The question is who actually runs it properly.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-8 text-ink/80 text-[17px] leading-[1.7]">
            <p>
              Most B2B founders we speak to have been burned at least once.
              They've tried the £5k/month agency that disappeared after month
              two. They've tried the £400/month freelancer whose lists were
              scraped junk. They've tried building it in-house and watched
              their domain reputation tank.
            </p>
            <p>
              The pattern is always the same: <span className="font-medium text-ink">outbound is not hard, but it is unforgiving</span>. One wrong list, one badly warmed domain, one generic
              sequence, and you spend three months in the spam folder while
              your competitor's emails land in the inbox.
            </p>
            <p>
              Sales Hype runs outbound the way we'd want someone to run it for
              our own businesses — because we run it for our own businesses.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────── WHAT YOU GET ─────────── */}
      <section className="relative z-10 px-6 md:px-12 py-24 md:py-36 bg-ink text-paper">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-8 h-px bg-accent"></span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-accent font-medium">
              What's included
            </span>
          </div>
          <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tightest leading-[1.05] mb-20 max-w-3xl">
            One monthly fee. Everything to run outbound properly.
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              {
                n: "01",
                t: "Targeted prospect lists",
                d: "Built around your ideal customer profile using modern data and enrichment tools such as Apollo, Clay or ZoomInfo. Verified contacts, decision-maker focus, fresh data refreshed monthly. Typically 500–1,500 prospects per cycle.",
              },
              {
                n: "02",
                t: "Cold email sequences",
                d: "Multi-step sequences written by us in your voice. Follow-up logic, reply handling, A/B tested subject lines. Built to land, not to look clever.",
              },
              {
                n: "03",
                t: "Domain & deliverability setup",
                d: "Protected sending setup, authentication, reputation controls and cautious volume management. Your primary brand reputation stays protected. This is what most operators get wrong.",
              },
              {
                n: "04",
                t: "Full campaign management",
                d: "We operate the sequence end-to-end. Daily monitoring, deliverability adjustments, reply routing into your inbox. You handle the conversations we surface.",
              },
              {
                n: "05",
                t: "HubSpot integration",
                d: "Replies and interested leads flow into a clean HubSpot pipeline. Optional CRM build for clients who need somewhere proper to land them.",
              },
              {
                n: "06",
                t: "Weekly reporting",
                d: "Open rates, reply rates, meetings booked, deliverability health. Honest numbers, not vanity dashboards. You always know what's working.",
              },
            ].map((item) => (
              <div key={item.n} className="border-t border-paper/15 pt-6">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-mono text-xs text-accent">{item.n}</span>
                  <h3 className="font-serif text-2xl font-light tracking-tight">
                    {item.t}
                  </h3>
                </div>
                <p className="text-paper/70 leading-[1.65] pl-9">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── HOW IT WORKS ─────────── */}
      <section id="how" className="relative z-10 px-6 md:px-12 py-24 md:py-36">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-8 h-px bg-accent"></span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-accent font-medium">
              How it works
            </span>
          </div>
          <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tightest leading-[1.05] mb-4 max-w-3xl">
            Two weeks to launch. Three months to know.
          </h2>
          <p className="text-muted text-lg max-w-2xl mb-20">
            A clear, paced engagement. No mystery. No drip-feed of "strategy"
            for six weeks before anything ships.
          </p>

          <div className="space-y-px bg-rule border rule-soft">
            {[
              {
                w: "Week 1",
                t: "Diagnose & build",
                d: "30-minute scoping call. We map your ICP, write your messaging, build prospect data, set up protected sending infrastructure and prepare the campaign. You review and approve.",
              },
              {
                w: "Week 2",
                t: "Launch",
                d: "Sequences go live. Daily monitoring begins. First replies typically arrive within 5–10 days of launch.",
              },
              {
                w: "Month 2",
                t: "Optimise",
                d: "Sequence iteration based on actual reply data. List refinement. Subject line and copy A/B tests. This is where the curve starts to bend.",
              },
              {
                w: "Month 3",
                t: "Review",
                d: "Free strategic review. We look at what's working, what's not, and whether outbound is the right channel for your offer. Honest assessment. No renewal pressure.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-paper p-8 md:p-10 grid md:grid-cols-12 gap-6 md:gap-12 items-start"
              >
                <div className="md:col-span-2">
                  <div className="font-mono text-xs text-accent uppercase tracking-wider">
                    {s.w}
                  </div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-serif text-2xl font-light tracking-tight text-ink">
                    {s.t}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-muted leading-[1.7]">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── PRICING ─────────── */}
      <section id="pricing" className="relative z-10 px-6 md:px-12 py-24 md:py-36 bg-paper-warm">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="block w-8 h-px bg-accent"></span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-accent font-medium">
              Pricing · plainly
            </span>
            <span className="block w-8 h-px bg-accent"></span>
          </div>

          <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tightest leading-[1.05] text-ink mb-16">
            One offer. One price. Everything included.
          </h2>

          <div className="bg-paper p-10 md:p-16 border rule-soft">
            <div className="font-serif font-light text-7xl md:text-[120px] text-ink tracking-tightest leading-none mb-3">
              £1,800
            </div>
            <div className="text-muted text-lg mb-12 font-mono uppercase tracking-wider text-xs">
              per month · 3-month minimum · no setup fee
            </div>

            <div className="text-left max-w-md mx-auto space-y-3 mb-12 text-ink/80">
              {[
                "Targeted prospect data",
                "Full sequence copywriting",
                "Domain & deliverability setup",
                "Daily campaign management",
                "HubSpot integration",
                "Weekly reporting",
                "Founder-level account ownership",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-4 h-4 mt-1 text-accent flex-shrink-0" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://calendly.com/tareq-saleshype/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-ink text-paper px-8 py-4 hover:bg-accent-deep transition-colors duration-300 group"
            >
              <span className="text-sm font-medium tracking-wide">Book a 30-min pipeline call</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
              </svg>
            </a>

            <p className="mt-8 text-sm text-muted">
              Need HubSpot CRM and pipeline systems too?{" "}
              <span className="text-ink">Available as an add-on</span> for outbound clients.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────── WHO THIS IS FOR ─────────── */}
      <section className="relative z-10 px-6 md:px-12 py-24 md:py-36">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-8 h-px bg-accent"></span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-accent font-medium">
                Best fit
              </span>
            </div>
            <h3 className="font-serif font-light text-2xl md:text-3xl tracking-tightest text-ink mb-8 leading-[1.15]">
              We work best with…
            </h3>
            <ul className="space-y-4 text-ink/80 text-[17px] leading-[1.55]">
              {[
                "B2B services with £5,000+ average deal size",
                "5–100 employees, founder- or director-led",
                "Identifiable decision-maker on the other side",
                "Strong delivery, inconsistent commercial systems",
                "Wholesale, recruitment, professional services, hospitality supply, project management, specialised B2B consulting",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-accent"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-8 h-px bg-muted-light"></span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-muted-light font-medium">
                Not for us
              </span>
            </div>
            <h3 className="font-serif font-light text-2xl md:text-3xl tracking-tightest text-ink mb-8 leading-[1.15]">
              Probably not the right fit if…
            </h3>
            <ul className="space-y-4 text-muted text-[17px] leading-[1.55]">
              {[
                "You sell B2C or to consumers",
                "Average deal size is under £2,000",
                "You need pipeline this week, not this quarter",
                "You're looking for the cheapest possible option",
                "You want growth-hacks rather than systems",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="text-muted-light flex-shrink-0 leading-[1.55] select-none" aria-hidden="true">×</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─────────── UK & GCC ─────────── */}
      <section className="relative z-10 px-6 md:px-12 py-24 md:py-36 bg-ink text-paper">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-8 h-px bg-accent"></span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-accent font-medium">
                UK · GCC · KSA
              </span>
            </div>
            <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tightest leading-[1.05]">
              Native English. Native Arabic. <span className="italic text-accent">No translation gaps.</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-paper/80 text-[17px] leading-[1.7] md:pt-2">
            <p>
              Most UK lead-generation agencies don't speak Arabic. Most
              Arabic-speaking agencies aren't HubSpot Solutions Partners. Sales
              Hype is both.
            </p>
            <p>
              Our founder is fluent in all dialects of Arabic and has operated
              across the UK and GCC for over a decade. We've built native
              Arabic WhatsApp follow-up sequences inside HubSpot — particularly
              relevant for the Saudi market, where WhatsApp is the primary
              business channel.
            </p>
            <p className="text-paper/65 text-sm pt-4 border-t border-paper/15">
              <span className="text-paper">For UK businesses expanding into the GCC,</span>{" "}
              or GCC businesses selling internationally — we run outbound
              fluently in both directions.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────── PORTFOLIO ─────────── */}
      <section className="relative z-10 px-6 md:px-12 py-24 md:py-36">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-8 h-px bg-accent"></span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-accent font-medium">
              Operator credentials
            </span>
          </div>
          <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tightest leading-[1.05] text-ink mb-6 max-w-3xl">
            We don't have case studies. We have a portfolio.
          </h2>
          <p className="text-muted text-lg max-w-2xl mb-16">
            Sales Hype is built by an operator running outbound across multiple
            real B2B businesses. The systems we sell are the systems we run.
            Every founder and director listed is a reachable reference.
          </p>

          <div className="grid md:grid-cols-2 gap-px bg-rule border rule-soft">
            {[
              {
                name: "Caviar de Beluga",
                sector: "Luxury fine foods · UK importer",
                role: "Sales Hype runs full outbound across hospitality, airline catering, and luxury retail.",
              },
              {
                name: "Focus Point",
                sector: "Project management · UK",
                role: "Active outbound campaigns into commercial property and fit-out sector.",
              },
              {
                name: "Career Buddies",
                sector: "Recruitment & staffing",
                role: "Outbound infrastructure and pipeline systems built and operating.",
              },
              {
                name: "New Veterinary Clinic",
                sector: "Healthcare · UK",
                role: "Online presence, lead capture and follow-up systems built from scratch.",
              },
            ].map((c) => (
              <div key={c.name} className="bg-paper p-8 md:p-10">
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-light mb-4">
                  {c.sector}
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-light tracking-tightest text-ink mb-4">
                  {c.name}
                </h3>
                <p className="text-muted leading-[1.6]">{c.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── FOUNDER NOTE ─────────── */}
      <section className="relative z-10 px-6 md:px-12 py-24 md:py-36 bg-paper-warm">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <span className="block w-8 h-px bg-accent"></span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-accent font-medium">
              A note from the founder
            </span>
          </div>

          <blockquote className="font-serif text-2xl md:text-3xl font-light tracking-tightest leading-[1.3] text-ink space-y-5">
            <p>
              "I built Sales Hype because I needed it. After years of running
              B2B businesses where pipeline depended on my mood, my memory,
              and my margin of free time, I built the system I wished someone
              had built for me."
            </p>
            <p>
              "The version we sell to clients is the version we run for
              ourselves. <span className="italic text-accent-deep">If it stops working for us, it gets fixed
              for everyone.</span>"
            </p>
          </blockquote>

          <div className="mt-10 flex items-center gap-4 pt-6 border-t rule-soft">
            <div className="w-10 h-10 bg-ink text-paper flex items-center justify-center">
              <span className="font-serif text-sm">TS</span>
            </div>
            <div>
              <div className="text-ink font-medium text-sm">Tareq Shaheen</div>
              <div className="text-muted text-sm">Founder, Sales Hype</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── FAQ ─────────── */}
      <section id="faq" className="relative z-10 px-6 md:px-12 py-24 md:py-36">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-8 h-px bg-accent"></span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-accent font-medium">
              Common questions
            </span>
          </div>
          <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tightest leading-[1.05] text-ink mb-16">
            Answered plainly.
          </h2>

          <div className="space-y-px bg-rule border rule-soft">
            {[
              {
                q: "How is Sales Hype different from a marketing agency?",
                a: "Sales Hype is built by an operator running outbound across multiple B2B businesses. We are a HubSpot Solutions Partner focused only on outbound infrastructure and revenue operations — not branding, ads, content marketing, or growth hacks. The systems we build for clients are the same systems we run ourselves.",
              },
              {
                q: "How much does B2B outbound lead generation cost?",
                a: "£1,800 per month, three-month minimum, no setup fee. This is a fully managed retainer including prospect data, sequence copywriting, protected sending setup and deliverability, daily campaign management, HubSpot integration and weekly reporting.",
              },
              {
                q: "How long until I see results?",
                a: "Week 1 is build, week 2 is launch. First replies typically within 5–10 days of launch. Meaningful pipeline builds through month 2 as deliverability and targeting are optimised. Three months is the minimum window to genuinely evaluate. Outbound is unforgiving of impatience — but it's also unforgiving of bad execution, which is why most try and fail.",
              },
              {
                q: "What tools do you use?",
                a: "HubSpot for CRM and pipeline (we are a HubSpot Solutions Partner). For prospect data and enrichment we use tools such as Apollo, Clay, ZoomInfo and other sources depending on the market. We can integrate with most existing stacks rather than forcing a rebuild.",
              },
              {
                q: "Do you work with GCC and Saudi Arabia?",
                a: "Yes. We operate across UK and GCC. Our founder is fluent in all Arabic dialects, and we have built native Arabic WhatsApp follow-up sequences inside HubSpot — particularly valuable for the Saudi market where WhatsApp is the primary business channel.",
              },
              {
                q: "What if it doesn't work after three months?",
                a: "If outbound isn't generating meaningful pipeline at month three, we run a free strategic review. Usually the targeting or offer needs adjustment — not the execution. There's no long-term lock-in beyond the initial three-month minimum.",
              },
              {
                q: "Do you also build HubSpot systems?",
                a: "Yes — as a HubSpot Solutions Partner we build full CRM and pipeline systems. Typically as an add-on for outbound clients who need somewhere clean to land the leads. Available as a separate engagement for businesses that need the infrastructure first.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="bg-paper group p-7 md:p-8"
              >
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <h3 className="font-serif text-lg md:text-xl font-normal text-ink leading-[1.4]">
                    {item.q}
                  </h3>
                  <span className="text-accent text-2xl leading-none font-light flex-shrink-0 mt-1 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 text-muted leading-[1.7] text-[16px] pr-10">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── FINAL CTA ─────────── */}
      <section className="relative z-10 px-6 md:px-12 py-32 md:py-44 bg-ink text-paper">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="block w-8 h-px bg-accent"></span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-accent font-medium">
              Ready to talk?
            </span>
            <span className="block w-8 h-px bg-accent"></span>
          </div>

          <h2 className="font-serif font-light text-4xl md:text-7xl tracking-tightest leading-[1.0] mb-10">
            Thirty minutes. <br/>
            <span className="italic text-accent">No pitch.</span>
          </h2>

          <p className="text-paper/75 text-lg max-w-xl mx-auto mb-12 leading-[1.6]">
            Tell us about your business. We'll map where outbound could work,
            what it would look like, and whether we're the right people to
            build it. If we're not, we'll tell you who is.
          </p>

          <a
            href="https://calendly.com/tareq-saleshype/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-paper text-ink px-8 py-4 hover:bg-accent hover:text-paper transition-colors duration-300 group"
          >
            <span className="text-sm font-medium tracking-wide">Book a 30-min pipeline call</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
              <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
            </svg>
          </a>

          <p className="mt-10 text-sm text-paper/50">
            Or write to{" "}
            <a href="mailto:hello@saleshype.co.uk" className="text-paper link-underline">
              hello@saleshype.co.uk
            </a>
          </p>
        </div>
      </section>

      {/* ─────────── FOOTER ─────────── */}
      <footer className="relative z-10 px-6 md:px-12 py-12 border-t rule-soft bg-paper">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 text-sm">
          <div className="md:col-span-5">
            <div className="font-serif text-xl tracking-tightest text-ink mb-3 font-medium">
              Sales Hype
            </div>
            <p className="text-muted leading-[1.6] max-w-md">
              HubSpot Solutions Partner. Outbound lead generation built by
              operators for B2B businesses across the UK and GCC.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-light mb-3">
              Contact
            </div>
            <a href="mailto:hello@saleshype.co.uk" className="text-ink link-underline block mb-1">
              hello@saleshype.co.uk
            </a>
            <a href="https://calendly.com/tareq-saleshype/consultation" target="_blank" rel="noopener noreferrer" className="text-ink link-underline">
              Book a 30-min call
            </a>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-light mb-3">
              Registered office
            </div>
            <p className="text-muted leading-[1.55]">
              Sales Hype Ltd · Company no. 15332241<br />
              Apex House, 2nd Floor, Office 2a, Grand Arcade,<br />
              North Finchley, London, N12 0EH
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t rule-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted-light">
          <div>© 2023 Sales Hype Ltd. All rights reserved.</div>
          <div className="flex items-center gap-2 font-mono uppercase tracking-wider">
            <span>Built on HubSpot · modern data tools</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
