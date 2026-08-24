import { Link } from "@tanstack/react-router";

import studioInterior from "../assets/studio-interior.jpg";
import founderPortrait from "../assets/avatar-founder.jpg";
import teamLeadEngineer from "../assets/avatar-engineer.jpg";
import teamCreativeDirector from "../assets/avatar-director.jpg";
import teamArtLead from "../assets/avatar-artlead.jpg";
import gameDragonDragoon from "../assets/game-dragon-dragoon.jpg";
import gameKingdomCrash from "../assets/game-kingdom-crash.jpg";
import gameBattleStage from "../assets/game-battle-stage.jpg";
import logoAsset from "../assets/ctrl-games-logo.png";

import { COMPANY, CONTENT, LOCALES, LOCALE_LABELS, LOCALE_PATHS, type Locale } from "../i18n/content";

const GAME_IMAGES = [gameDragonDragoon, gameKingdomCrash, gameBattleStage];
const MEMBER_IMAGES = [teamLeadEngineer, teamCreativeDirector, teamArtLead];

export function SiteHome({ locale }: { locale: Locale }) {
  const t = CONTENT[locale];

  return (
    <div lang={t.htmlLang} className="min-h-screen bg-brand-ink text-zinc-100 font-sans selection:bg-brand-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-900 bg-brand-ink/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2">
            <img src={logoAsset.url} alt="CTRL Games Limited logo" width={146} height={62} className="h-7 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#studio" className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors">
              {t.nav.studio}
            </a>
            <a href="#games" className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors">
              {t.nav.games}
            </a>
            <a href="#team" className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors">
              {t.nav.team}
            </a>
            <a href="#careers" className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors">
              {t.nav.careers}
            </a>
            <a href="#contact" className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors">
              {t.nav.contact}
            </a>
            <a
              href="#careers"
              className="h-[34px] px-4 flex items-center bg-brand-primary text-zinc-950 text-sm font-semibold rounded-full ring-1 ring-brand-primary hover:bg-brand-primary/90 transition-transform active:scale-95"
            >
              {t.nav.cta}
            </a>
          </div>
          <LanguageSwitcher locale={locale} />
        </div>
      </nav>

      {/* Hero Section */}
      <header id="top" className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-medium uppercase tracking-widest text-brand-primary mb-6">
              {t.hero.badge}
            </span>
            <h1 className="font-display text-4xl md:text-7xl font-semibold leading-none text-balance mb-8 max-w-[20ch]">
              {t.hero.title}
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-[48ch] text-pretty mb-10">{t.hero.lead}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#games"
                className="h-[38px] pl-2 pr-3 flex items-center gap-2 bg-brand-primary text-zinc-950 text-sm font-semibold rounded-md ring-1 ring-brand-primary hover:bg-brand-primary/90 transition-colors"
              >
                <div className="size-4 flex-shrink-0 bg-zinc-950/20 rounded-sm" />
                {t.hero.ctaWork}
              </a>
              <a
                href="#studio"
                className="h-[38px] px-5 flex items-center border border-zinc-800 text-zinc-300 text-sm font-medium rounded-md hover:bg-zinc-900 transition-colors"
              >
                {t.hero.ctaStory}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute -top-24 -right-24 size-[600px] bg-brand-primary/10 blur-[120px] rounded-full" />
      </header>

      {/* Studio Intro */}
      <section id="studio" className="py-24 bg-zinc-900/30 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-medium text-zinc-100">{t.studio.heading}</h2>
              <p className="text-zinc-400 max-w-[48ch] text-pretty leading-relaxed">{t.studio.body}</p>
            </div>
            <img
              src={studioInterior}
              alt={t.studio.imageAlt}
              width={1200}
              height={800}
              loading="lazy"
              className="w-full aspect-video object-cover bg-zinc-900 rounded-[12px]"
            />
          </div>
        </div>
      </section>

      {/* Games in development */}
      <section id="games" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="block text-[10px] font-medium uppercase tracking-widest text-brand-primary mb-3">
              {t.games.eyebrow}
            </span>
            <h2 className="font-display text-3xl font-medium mb-4">{t.games.heading}</h2>
            <div className="h-px w-12 bg-brand-primary" />
          </div>

          <div className="space-y-16">
            {t.games.items.map((game, i) => (
              <article
                key={game.title}
                className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[&>figure]:order-2" : ""}`}
              >
                <figure className="m-0">
                  <img
                    src={GAME_IMAGES[i]}
                    alt={`Key art for ${game.title}`}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover bg-zinc-900 rounded-[12px] ring-1 ring-zinc-900"
                  />
                </figure>
                <div>
                  <span className="inline-block py-1 px-3 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-medium uppercase tracking-widest text-brand-primary mb-4">
                    {game.tag}
                  </span>
                  <h3 className="font-display text-2xl font-medium mb-4">{game.title}</h3>
                  <p className="text-zinc-400 leading-relaxed max-w-[52ch] text-pretty">{game.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Minds */}
      <section id="team" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-display text-3xl font-medium mb-4">{t.team.heading}</h2>
            <div className="h-px w-12 bg-brand-primary" />
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="relative group">
                <img
                  src={founderPortrait}
                  alt={`${t.team.founder.name} — CTRL Games`}
                  width={1200}
                  height={600}
                  loading="lazy"
                  className="w-full aspect-[2/1] object-cover object-top bg-zinc-900 rounded-[12px] mb-6"
                />
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium text-zinc-100 mb-1">{t.team.founder.name}</h3>
                    <p className="text-zinc-400 text-sm max-w-[40ch] text-pretty">{t.team.founder.bio}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {t.team.members.map((m, i) => (
                <div key={m.name} className="flex gap-4 items-center">
                  <img
                    src={MEMBER_IMAGES[i]}
                    alt={`${m.name} — CTRL Games`}
                    width={512}
                    height={512}
                    loading="lazy"
                    className="size-16 shrink-0 object-cover bg-zinc-900 rounded-full"
                  />
                  <div>
                    <h4 className="text-sm font-medium text-zinc-200">{m.name}</h4>
                    <p className="text-xs text-zinc-500">{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-24 px-6 bg-zinc-900/30 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="block text-[10px] font-medium uppercase tracking-widest text-brand-primary mb-3">
              {t.careers.eyebrow}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium mb-6 leading-tight text-balance">
              {t.careers.heading}
            </h2>
            <p className="text-zinc-400 leading-relaxed max-w-[48ch] text-pretty mb-8">{t.careers.body}</p>
            <a
              href={`mailto:${COMPANY.email}?subject=Joining%20CTRL%20Games`}
              className="h-[38px] px-5 inline-flex items-center bg-brand-primary text-zinc-950 text-sm font-semibold rounded-md ring-1 ring-brand-primary hover:bg-brand-primary/90 transition-colors"
            >
              {t.careers.cta}
            </a>
          </div>

          <ul className="grid gap-3 list-none p-0 m-0">
            {t.careers.roles.map((r) => (
              <li key={r.role}>
                <a
                  href={`mailto:${COMPANY.email}?subject=${encodeURIComponent(`Application — ${r.role}`)}`}
                  className="flex items-center justify-between gap-6 p-5 rounded-[12px] border border-zinc-800 bg-brand-ink hover:border-brand-primary/60 transition-colors"
                >
                  <span>
                    <span className="block text-zinc-100 font-medium">{r.role}</span>
                    <span className="block text-xs text-zinc-500 mt-1">{r.detail}</span>
                  </span>
                  <span className="text-brand-primary text-sm shrink-0">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="pt-24 pb-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 mb-24">
            <div>
              <h2 className="font-display text-4xl font-medium mb-8 leading-tight">{t.footer.heading}</h2>
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-xl md:text-2xl text-brand-primary font-medium hover:underline underline-offset-8"
              >
                {COMPANY.email}
              </a>
            </div>
            <div className="grid gap-12">
              <div>
                <span className="block text-[10px] font-medium uppercase tracking-widest text-zinc-500 mb-4">
                  {t.footer.hqLabel}
                </span>
                <address className="not-italic text-zinc-300 leading-relaxed max-w-[30ch]">
                  {t.footer.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
              <div>
                <span className="block text-[10px] font-medium uppercase tracking-widest text-zinc-500 mb-4">
                  {t.footer.irLabel}
                </span>
                <p className="text-zinc-300">
                  {t.footer.irText} <span className="text-zinc-100">{COMPANY.parent}</span>
                </p>
                <span className="inline-block mt-2 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400 font-mono tracking-tighter">
                  {COMPANY.ticker}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[11px] text-zinc-600 tracking-wide">{COMPANY.copyright}</p>
            <div className="flex gap-8">
              <span className="text-[11px] font-medium text-zinc-500 uppercase tracking-widest">{t.footer.privacy}</span>
              <span className="text-[11px] font-medium text-zinc-500 uppercase tracking-widest">{t.footer.terms}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LanguageSwitcher({ locale }: { locale: Locale }) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-900/60 p-1">
      {LOCALES.map((l) => (
        <Link
          key={l}
          to={LOCALE_PATHS[l]}
          hrefLang={l}
          className={`px-2.5 py-1 text-[11px] font-medium rounded-full transition-colors ${
            l === locale ? "bg-brand-primary text-zinc-950" : "text-zinc-400 hover:text-zinc-100"
          }`}
        >
          {LOCALE_LABELS[l]}
        </Link>
      ))}
    </div>
  );
}
