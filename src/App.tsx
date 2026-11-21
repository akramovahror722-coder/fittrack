import { Activity, BarChart3, Dumbbell, ListChecks, Timer, Volume2 } from 'lucide-react'
import { SiteHeader } from './components/SiteHeader'
import { SiteFooter } from './components/SiteFooter'
import { FitnessTracker } from './components/FitnessTracker'
import { useLang } from './lib/lang'
import { localize } from './lib/locale'
import type { Localized } from './lib/types'

const hero = {
  kicker: { uz: 'Mashq rejalari', en: 'Workout plans', ru: 'Планы тренировок' },
  title: { uz: 'FitTrack', en: 'FitTrack', ru: 'FitTrack' },
  subtitle: {
    uz: 'Uchta dastur, taymer, kundalik jurnal va haftalik natija grafigi — mashqni boshlash uchun ham yetarli.',
    en: 'Three programs, a timer, a daily journal and a weekly progress chart — enough to start training.',
    ru: 'Три программы, таймер, дневник и график недельного прогресса — чтобы начать тренироваться.',
  },
} satisfies Record<string, Localized>

const features: { icon: typeof Dumbbell; title: Localized; text: Localized }[] = [
  {
    icon: ListChecks,
    title: { uz: '3 ta mashq dasturi', en: '3 workout programs', ru: '3 программы тренировок' },
    text: {
      uz: 'Yengil, muvozanatli va intensiv dasturlar — darajangizga mosini tanlang.',
      en: 'Light, balanced and intense programs — pick the one that fits your level.',
      ru: 'Лёгкая, сбалансированная и интенсивная программы — выберите под свой уровень.',
    },
  },
  {
    icon: Volume2,
    title: { uz: 'Taymer va ovoz', en: 'Timer and sound', ru: 'Таймер и звук' },
    text: {
      uz: 'Ish va dam olish taymeri ovozli signal bilan avtomatik keyingi bosqichga o‘tadi.',
      en: 'The work/rest timer beeps and automatically moves to the next stage.',
      ru: 'Таймер работы и отдыха подаёт сигнал и сам переходит к следующему этапу.',
    },
  },
  {
    icon: Activity,
    title: { uz: 'Jurnal va statistika', en: 'Journal and stats', ru: 'Дневник и статистика' },
    text: {
      uz: 'Har bir mashq jurnalga yoziladi: daqiqa, kaloriya va sana.',
      en: 'Every workout is logged: minutes, calories and date.',
      ru: 'Каждая тренировка записывается: минуты, калории и дата.',
    },
  },
  {
    icon: BarChart3,
    title: { uz: 'Natija grafigi', en: 'Progress chart', ru: 'График прогресса' },
    text: {
      uz: 'Haftalik faollik grafigi orqali natijangizni kuzatib boring.',
      en: 'Track your results with a weekly activity chart.',
      ru: 'Следите за результатами по графику недельной активности.',
    },
  },
]

const stats = [
  { value: '3', label: { uz: 'Dasturlar', en: 'Programs', ru: 'Программ' } },
  { value: '30+', label: { uz: 'Harakatlar', en: 'Exercises', ru: 'Упражнений' } },
  { value: '40–60 s', label: { uz: 'Taymer', en: 'Timer', ru: 'Таймер' } },
] satisfies { value: string; label: Localized }[]

function DumbbellGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-6">
      <path
        d="M6.5 8.5v7M3.5 10v4M17.5 8.5v7M20.5 10v4M6.5 12h11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function App() {
  const { lang } = useLang()

  return (
    <div id="top" className="min-h-screen">
      <SiteHeader
        brand="FitTrack"
        tagline={hero.kicker}
        accent="from-lime-500 to-emerald-400"
        icon={<DumbbellGlyph />}
      />

      <main>
        <section className="relative overflow-hidden pt-16 pb-14 sm:pt-20 sm:pb-16">
          <div
            className="pointer-events-none absolute -top-32 right-1/4 size-[28rem] rounded-full bg-lime-500/15 blur-3xl dark:bg-lime-500/10"
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" aria-hidden="true" />
          <div className="container-page relative">
            <div className="max-w-3xl page-enter">
              <span className="inline-flex items-center gap-2 rounded-full border border-lime-500/25 bg-lime-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-lime-600 uppercase dark:border-lime-400/20 dark:text-lime-300">
                <span className="size-1.5 rounded-full bg-lime-500" />
                {localize(hero.kicker, lang)}
              </span>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl">
                {localize(hero.title, lang)}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
                {localize(hero.subtitle, lang)}
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {[
                  { uz: '3 ta mashq dasturi', en: '3 workout programs', ru: '3 программы тренировок' },
                  { uz: 'Taymer va ovoz', en: 'Timer and sound', ru: 'Таймер и звук' },
                  { uz: 'Jurnal va statistika', en: 'Journal and stats', ru: 'Дневник и статистика' },
                  { uz: 'Natija grafigi', en: 'Progress chart', ru: 'График прогресса' },
                ].map((item) => (
                  <span
                    key={item.en}
                    className="chip bg-white/70 text-slate-600 ring-slate-200 dark:bg-white/5 dark:text-slate-300 dark:ring-white/10"
                  >
                    <Timer className="size-3 text-lime-500" />
                    {localize(item, lang)}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid max-w-md grid-cols-3 gap-3">
                {stats.map((item) => (
                  <div key={item.label.en} className="card-surface px-4 py-3">
                    <p className="font-mono text-2xl font-extrabold text-lime-600 dark:text-lime-300">
                      {item.value}
                    </p>
                    <p className="mt-0.5 text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                      {localize(item.label, lang)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container-page">
            <FitnessTracker />
          </div>
        </section>

        <section className="section-alt py-16 sm:py-20">
          <div className="container-page">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.title.en} className="card-surface card-hover p-6">
                  <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-lime-500 to-emerald-400 text-white shadow-md">
                    <feature.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold">{localize(feature.title, lang)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {localize(feature.text, lang)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        brand="FitTrack"
        note={{
          uz: 'Boshlovchilar uchun mashq dasturlari, taymer va haftalik natija grafigi.',
          en: 'Workout programs for beginners, a timer and a weekly progress chart.',
          ru: 'Программы тренировок для начинающих, таймер и недельный график прогресса.',
        }}
        tech={['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'localStorage', 'SVG']}
        repoUrl="https://github.com/akramovahror722-coder/fittrack"
        accentText="text-lime-600 dark:text-lime-300"
      />
    </div>
  )
}
