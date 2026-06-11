import { motion } from 'motion/react';
import { IdCard, Star, Eye, Award, Trophy, Brain, Share2, Unlock } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const features = [
  {
    icon: <IdCard className="w-5 h-5" />,
    title: 'Trader Passport',
    desc: 'Your public trading identity. Shareable, verifiable, and built from live Hyperliquid activity — not screenshots.',
    color: 'text-blue',
    accent: 'border-blue/20 group-hover:border-blue/50',
    glow: 'group-hover:shadow-[0_0_40px_rgba(47,128,237,0.08)]',
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: 'Fundoria Score',
    desc: 'A risk-adjusted reputation signal from 0 to 1000. Grades: Elite, Verified, Strong, Developing, High Variance, Unstable.',
    color: 'text-green',
    accent: 'border-green/20 group-hover:border-green/50',
    glow: 'group-hover:shadow-[0_0_40px_rgba(0,200,150,0.08)]',
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: 'Watchlists',
    desc: 'Capital providers and users follow high-signal traders. Get watched before you become obvious.',
    color: 'text-blue',
    accent: 'border-blue/20 group-hover:border-blue/50',
    glow: 'group-hover:shadow-[0_0_40px_rgba(47,128,237,0.08)]',
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: 'Badges',
    desc: 'Achievements based on real trading behavior. Low Drawdown Trader, Consistency Streak, Risk Controlled, Comeback Trader, and more.',
    color: 'text-green',
    accent: 'border-green/20 group-hover:border-green/50',
    glow: 'group-hover:shadow-[0_0_40px_rgba(0,200,150,0.08)]',
  },
  {
    icon: <Trophy className="w-5 h-5" />,
    title: 'Tournaments',
    desc: 'Compete through risk-adjusted challenges. 30-day drawdown challenges, consistency events, and seasonal sponsored competitions.',
    color: 'text-blue',
    accent: 'border-blue/20 group-hover:border-blue/50',
    glow: 'group-hover:shadow-[0_0_40px_rgba(47,128,237,0.08)]',
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: 'AI Journal',
    desc: 'Daily AI-generated performance reviews that surface patterns, flag risk behavior, and improve discipline over time.',
    color: 'text-green',
    accent: 'border-green/20 group-hover:border-green/50',
    glow: 'group-hover:shadow-[0_0_40px_rgba(0,200,150,0.08)]',
  },
  {
    icon: <Share2 className="w-5 h-5" />,
    title: 'Social Share Cards',
    desc: 'Auto-generated cards for score updates, new ranks, tournament results, and badge unlocks. Turn progress into public proof.',
    color: 'text-blue',
    accent: 'border-blue/20 group-hover:border-blue/50',
    glow: 'group-hover:shadow-[0_0_40px_rgba(47,128,237,0.08)]',
  },
  {
    icon: <Unlock className="w-5 h-5" />,
    title: 'Capital Eligibility',
    desc: 'Future access to capital programs based on verified behavior, Score thresholds, and consistent risk-adjusted performance.',
    color: 'text-green',
    accent: 'border-green/20 group-hover:border-green/50',
    glow: 'group-hover:shadow-[0_0_40px_rgba(0,200,150,0.08)]',
  },
];

export default function SocialFeatures() {
  return (
    <section id="social" className="py-28 md:py-36 border-t border-protocol-border bg-protocol-bg px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Social Features"
          centered
          title={
            <>
              A Trading Network<br />
              <span className="bg-linear-to-r from-blue to-green bg-clip-text text-transparent">Built Around Reputation.</span>
            </>
          }
          subtitle="Traders do not only use Fundoria to analyze performance. They use Fundoria to build status."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`group relative border ${f.accent} bg-protocol-accent-bg p-6 transition-all duration-300 ${f.glow} overflow-hidden`}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-protocol-border to-transparent group-hover:opacity-0 transition-opacity" />
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className={`${f.color} mb-4 opacity-60 group-hover:opacity-100 transition-opacity`}>{f.icon}</div>
              <h3 className="font-mono text-[12px] font-black uppercase tracking-wide text-protocol-text mb-2 group-hover:text-blue transition-colors">{f.title}</h3>
              <p className="text-[12px] text-protocol-text-dim leading-relaxed">{f.desc}</p>

              <div className="absolute bottom-3 right-4 font-mono text-[44px] font-black opacity-[0.04] leading-none select-none pointer-events-none text-protocol-text">
                {String(i + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Score grades visual */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 border border-protocol-border bg-protocol-accent-bg p-6 sm:p-8"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-blue mb-6 flex items-center gap-2">
            <span className="w-3 h-px bg-blue/40" />
            Fundoria Score Grades
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { range: '900–1000', grade: 'Elite', color: 'text-green border-green/30 bg-green/5' },
              { range: '800–899', grade: 'Verified', color: 'text-blue border-blue/30 bg-blue/5' },
              { range: '700–799', grade: 'Strong', color: 'text-protocol-text border-protocol-border' },
              { range: '600–699', grade: 'Developing', color: 'text-protocol-text-dim border-protocol-border' },
              { range: '500–599', grade: 'High Variance', color: 'text-protocol-text-dim/60 border-protocol-border/60' },
              { range: 'Below 500', grade: 'Unstable', color: 'text-protocol-text-dim/40 border-protocol-border/40' },
            ].map((g, i) => (
              <div key={i} className={`border ${g.color} px-3 py-3 text-center`}>
                <div className={`font-mono text-[11px] font-black uppercase tracking-wide mb-1 ${g.color.split(' ')[0]}`}>{g.grade}</div>
                <div className="font-mono text-[9px] text-protocol-text-dim/50 uppercase tracking-wider">{g.range}</div>
              </div>
            ))}
          </div>
          <p className="font-mono text-[9px] text-protocol-text-dim/40 mt-4 uppercase tracking-wider">
            The Fundoria Score is a reputation signal, not an investment recommendation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
