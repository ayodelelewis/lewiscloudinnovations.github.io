import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cloud, Cpu, Landmark, Hospital, GraduationCap, Building2, CheckCircle2, Rocket, MapPin, Phone, Mail, ArrowRight, BookOpen, Lock, Server, Activity, Globe, Wifi, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// LewisCloud Innovations — single-file preview site
// Tailwind is available; shadcn/ui + lucide-react are preinstalled in this canvas environment.

const SectionHeading = ({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) => (
  <div className="max-w-3xl mx-auto text-center mb-10">
    {eyebrow && <p className="uppercase tracking-widest text-xs md:text-sm text-gray-500">{eyebrow}</p>}
    <h2 className="text-2xl md:text-4xl font-bold mt-1">{title}</h2>
    {sub && <p className="text-gray-600 mt-3 leading-relaxed">{sub}</p>}
  </div>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-extrabold">{value}</div>
    <div className="text-gray-600 mt-1">{label}</div>
  </div>
);

const Feature = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <Card className="rounded-2xl shadow-sm">
    <CardContent className="p-6">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-gray-100"><Icon className="w-6 h-6" /></div>
        <div>
          <h4 className="font-semibold text-lg">{title}</h4>
          <p className="text-gray-600 mt-1 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Tier = ({ name, price, tagline, items, cta }: { name: string; price: string; tagline: string; items: string[]; cta: string }) => (
  <Card className="rounded-2xl border-gray-200 shadow-sm">
    <CardContent className="p-6">
      <div className="flex items-baseline justify-between">
        <h4 className="text-xl font-bold">{name}</h4>
        <div className="text-3xl font-extrabold">{price}<span className="text-base font-medium text-gray-500">/mo</span></div>
      </div>
      <p className="text-gray-600 mt-2 text-sm">{tagline}</p>
      <ul className="mt-4 space-y-2">
        {items.map((t, i) => (
          <li key={i} className="flex gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 mt-0.5" /> {t}</li>
        ))}
      </ul>
      <Button className="w-full mt-5">{cta}</Button>
    </CardContent>
  </Card>
);

export default function LewisCloudSite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-black text-white flex items-center justify-center">
              <Cloud className="w-5 h-5" />
            </div>
            <div className="font-bold">LewisCloud Innovations</div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:text-black">Services</a>
            <a href="#iot" className="hover:text-black">IoT & Automation</a>
            <a href="#packages" className="hover:text-black">Packages</a>
            <a href="#industries" className="hover:text-black">Industries</a>
            <a href="#training" className="hover:text-black">Training</a>
            <a href="#about" className="hover:text-black">About</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="hidden md:inline-flex">Get a Quote</Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="uppercase tracking-widest text-xs text-gray-500">Cloud • Cybersecurity • IoT • Automation</p>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-3 leading-tight">
              Secure, Scalable Cloud & IoT for Africa’s <span className="bg-yellow-200 px-1">Growing Businesses</span>
            </h1>
            <p className="text-gray-600 mt-4 md:text-lg leading-relaxed">
              We help SMEs, NGOs, schools, healthcare and finance teams migrate, secure, automate, and grow—without overspending.
            </p>
            <div className="mt-6 flex gap-3 flex-wrap">
              <Button>Start a Free Assessment</Button>
              <Button variant="outline">Download Service Catalog</Button>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <Stat value="99.95%" label="Uptime targets" />
              <Stat value=">=30%" label="Avg. cost savings" />
              <Stat value="24/7" label="Security monitoring" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Feature icon={Server} title="Managed Cloud" desc="Deploy, scale, and maintain apps on AWS/GCP/Azure or our optimized VPS." />
                  <Feature icon={ShieldCheck} title="Cloud Security" desc="Zero‑trust design, WAF, MFA/SSO, SIEM, and encrypted backups by default." />
                  <Feature icon={Wifi} title="IoT Platforms" desc="Device onboarding, MQTT/HTTPS, edge gateways, over‑the‑air updates and telemetry." />
                  <Feature icon={Settings} title="Automation" desc="Smart workflows for offices, factories and logistics; API integrations that save hours." />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="What we do"
            title="Cloud computing, cybersecurity, IoT & automation"
            sub="Start lean. Scale fast. Stay secure. Our bundles are designed for small teams up to large orgs."
          />
          <div className="grid md:grid-cols-3 gap-5">
            <Feature icon={Cloud} title="Cloud Migration & DevOps" desc="Lift‑and‑shift and modernization, CI/CD, IaC (Terraform), autoscaling, cost optimization." />
            <Feature icon={Lock} title="Security‑as‑a‑Service" desc="Zero‑trust access, WAF, endpoint protection, patching, SIEM, SOC‑light with 24/7 alerting." />
            <Feature icon={ShieldCheck} title="Pen‑Testing & Audit" desc="External & internal tests, web/API testing, hardened configs, policy frameworks & playbooks." />
            <Feature icon={Globe} title="Backups & DR" desc="Encrypted multi‑region backups, RPO/RTO planning, DR runbooks and drills." />
            <Feature icon={Cpu} title="AI‑assisted Security" desc="Anomaly detection on auth, payments & network logs; automated triage & ticketing." />
            <Feature icon={BookOpen} title="Training & Awareness" desc="Phishing simulations, admin upskilling, compliance clinics (NDPR, GDPR, HIPAA)." />
            <Feature icon={Wifi} title="IoT Security" desc="Protect sensors, cameras & wearables with cert‑based auth, network segmentation & monitoring." />
            <Feature icon={Settings} title="Automation & Smart Systems" desc="Smart office/industry workflows, rule engines, API/PLC integrations and dashboards." />
          </div>
        </div>
      </section>

      {/* IoT & AUTOMATION DEDICATED SECTION */}
      <section id="iot" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading eyebrow="Connected solutions" title="IoT & Automation" sub="Secure device fleets, stream data, and automate actions from edge to cloud." />
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl">
              <CardContent className="p-6 space-y-3">
                <h4 className="font-semibold text-lg">What we deliver</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> Device onboarding (PKI), OTA updates, fleet management</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> Protocols: MQTT/HTTPS/WebSockets, edge gateways</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> Time‑series storage, alerting, dashboards</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> Automation rules: if‑this‑then‑that across apps & devices</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> Security: cert rotation, network segmentation, SIEM feeds</li>
                </ul>
                <div className="pt-2">
                  <Button variant="outline" className="gap-2">Request IoT Demo <ArrowRight className="w-4 h-4"/></Button>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-6 space-y-3">
                <h4 className="font-semibold text-lg">Use cases</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex gap-2"><Wifi className="w-4 h-4 mt-0.5"/> Smart facilities (energy & access), CCTV health, occupancy</li>
                  <li className="flex gap-2"><Wifi className="w-4 h-4 mt-0.5"/> Industrial IoT (factories, PLC integrations, condition monitoring)</li>
                  <li className="flex gap-2"><Wifi className="w-4 h-4 mt-0.5"/> Fleet & logistics (GPS, cold‑chain, geofencing)</li>
                  <li className="flex gap-2"><Wifi className="w-4 h-4 mt-0.5"/> Healthcare (device telemetry, compliance logging)</li>
                  <li className="flex gap-2"><Wifi className="w-4 h-4 mt-0.5"/> Home & small office automation (security, sensors, climate)</li>
                </ul>
                <div className="pt-2">
                  <Button className="gap-2">Get a Solution Plan <ArrowRight className="w-4 h-4"/></Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading eyebrow="Pricing" title="Simple packages that grow with you" sub="Transparent tiers; custom quotes for enterprises and regulated sectors." />
          <div className="grid md:grid-cols-3 gap-5">
            <Tier
              name="Starter"
              price="$199"
              tagline="For small teams and startups getting cloud‑ready."
              items={[
                "Cloud assessment & onboarding",
                "Basic WAF + MFA setup",
                "Nightly encrypted backups",
                "Monthly security report",
              ]}
              cta="Get Starter"
            />
            <Tier
              name="Growth"
              price="$499"
              tagline="For SMEs needing performance, uptime, and compliance."
              items={[
                "Managed hosting & CI/CD",
                "24/7 monitoring & alerting",
                "Pen‑test (quarterly)",
                "Compliance pack (NDPR/GDPR)",
              ]}
              cta="Choose Growth"
            />
            <Tier
              name="Shield Enterprise"
              price="Custom"
              tagline="For finance, healthcare, public sector, and regional scale."
              items={[
                "Zero‑trust architecture",
                "SOC light + SIEM integration",
                "DR drills & multi‑region HA",
                "Dedicated TAM & SLAs",
              ]}
              cta="Talk to Sales"
            />
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading title="Where we make the biggest impact" sub="We focus on data‑sensitive and connected industries." />
          <div className="grid md:grid-cols-5 gap-5">
            <Feature icon={Landmark} title="Financial Services" desc="PCI‑aware cloud setups, secure payments, fraud analytics, and audit trails." />
            <Feature icon={Hospital} title="Healthcare" desc="Encrypted PHI, fine‑grained access, data retention, and DR for clinics & labs." />
            <Feature icon={GraduationCap} title="Education" desc="Secure LMS, student privacy, affordable hosting for schools and EdTech." />
            <Feature icon={Building2} title="SMEs & NGOs" desc="From websites and CRMs to secure file‑sharing and donor data protection." />
            <Feature icon={Wifi} title="IoT & Automation" desc="Factories, smart homes, logistics—secure, monitor, and optimize device fleets at scale." />
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading title="Why LewisCloud" sub="Secure by default, cost‑optimized by design, and human support when you need it." />
          <div className="grid md:grid-cols-3 gap-5">
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg">Mission</h4>
                <p className="text-gray-600 mt-2 text-sm">
                  Empower businesses and communities with secure, scalable, and affordable cloud solutions—protecting data while fueling growth.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg">Vision</h4>
                <p className="text-gray-600 mt-2 text-sm">
                  Become Africa’s most trusted cloud‑cyber partner, delivering defense‑grade security to everyday organizations.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg">Principles</h4>
                <ul className="mt-2 space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> Security by default</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> Cost transparency</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> Open standards & portability</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> People‑first support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading eyebrow="Upskill fast" title="Training & workshops" sub="From staff awareness to admin‑level cloud security clinics." />
          <div className="grid md:grid-cols-3 gap-5">
            <Feature icon={BookOpen} title="Cyber Awareness 101" desc="Phishing, passwords, device hygiene, safe browsing; includes quizzes and certificates." />
            <Feature icon={ShieldCheck} title="Admin Hardening" desc="SSO/MFA, role design, logging, SIEM basics, incident runbooks for IT teams." />
            <Feature icon={Cpu} title="AI for Security" desc="Using logs and ML to detect anomalies; hands‑on with safe, ethical practices." />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading title="About LewisCloud Innovations Limited" sub="Founded by Lewis to make modern cloud security and automation accessible to every organization, big or small." />
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg">What we believe</h4>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  Cloud should be simple, secure, and affordable. We combine best‑practice architectures with real‑world pragmatism so
                  teams can move faster without sacrificing safety or compliance.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg">How we work</h4>
                <ul className="mt-2 space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> Assess → Plan → Migrate → Secure → Automate → Support</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> Clear pricing and monthly reporting</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> Vendor‑neutral, multi‑cloud & edge‑friendly</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> Local presence, regional reach</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Card className="rounded-2xl bg-black text-white">
            <CardContent className="p-6 md:p-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold">Ready to secure, connect and automate?</h3>
              <p className="text-white/80 mt-2">Book a free discovery call. We’ll map your quick wins and a 90‑day action plan.</p>
              <div className="mt-4">
                <Button variant="secondary" className="gap-2">Book a Call <ArrowRight className="w-4 h-4"/></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading title="Contact us" sub="Tell us a little about your goals—migration, automation, cost savings, or security upgrade—and we’ll respond within 24 hours." />
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <form className="grid gap-4">
                  <input className="border rounded-xl p-3" placeholder="Name" />
                  <input className="border rounded-xl p-3" placeholder="Work email" />
                  <input className="border rounded-xl p-3" placeholder="Company" />
                  <select className="border rounded-xl p-3">
                    <option>Service of interest</option>
                    <option>Cloud migration</option>
                    <option>Managed security</option>
                    <option>Pen‑testing</option>
                    <option>Backups & DR</option>
                    <option>IoT & Automation</option>
                    <option>Training</option>
                  </select>
                  <textarea className="border rounded-xl p-3 min-h-[120px]" placeholder="What do you want to achieve in the next 90 days?" />
                  <Button className="gap-2">Send enquiry <Rocket className="w-4 h-4"/></Button>
                </form>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3"><MapPin className="w-4 h-4"/> Africa‑first, serving clients globally</div>
                  <div className="flex items-center gap-3"><Phone className="w-4 h-4"/> +234 (0) 000‑000‑0000</div>
                  <div className="flex items-center gap-3"><Mail className="w-4 h-4"/> hello@lewiscloudinnovations.com</div>
                </div>
                <div className="mt-6">
                  <p className="text-xs text-gray-500">
                    By submitting this form you agree to our privacy policy and consent to be contacted about our services.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-black text-white flex items-center justify-center"><Cloud className="w-4 h-4"/></div>
            <div className="font-semibold">LewisCloud Innovations</div>
          </div>
          <div className="text-xs text-gray-500">© {new Date().getFullYear()} LewisCloud Innovations Limited. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
