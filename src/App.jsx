import { useState, useEffect, useRef } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, AreaChart, Area
} from 'recharts'
import { stats, buildAgeDistribution, buildYearDistribution, buildNodesDistribution } from './data/habermann'
import './index.css'

const COLORS = { survived: '#34d399', died: '#fb7185' }

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background: '#0f172a', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 10, padding: '10px 14px' }}>
      <p style={{ color: '#94a3b8', fontSize: 12, marginBottom: 4 }}>{label}</p>
      {payload.map(p => (
        <p key={p.dataKey} style={{ color: p.color, fontSize: 13, margin: '2px 0' }}>
          {p.name === 'survived' ? 'Survived' : 'Died'}: <strong>{p.value}</strong>
        </p>
      ))}
    </div>
  )
}

function useIntersection(ref) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [ref])
  return visible
}

function Section({ id, children, className = '' }) {
  const ref = useRef(null)
  const visible = useIntersection(ref)
  return (
    <section id={id} ref={ref} className={`${className} ${visible ? 'fade-in' : 'opacity-0'}`}>
      {children}
    </section>
  )
}

function StatCard({ value, label, sub, color }) {
  return (
    <div className="stat-card glass p-6 flex flex-col gap-1">
      <span style={{ color, fontSize: 36, fontWeight: 800, lineHeight: 1 }}>{value}</span>
      <span style={{ color: '#e2e8f0', fontWeight: 600, fontSize: 15 }}>{label}</span>
      {sub && <span style={{ color: '#64748b', fontSize: 12 }}>{sub}</span>}
    </div>
  )
}

function Insight({ icon, title, body, color }) {
  return (
    <div className="insight-card py-3 mb-4" style={{ borderColor: color }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
        <span style={{ fontSize: 18 }}>{icon}</span>
        <span style={{ fontWeight: 700, color: '#e2e8f0', fontSize: 15 }}>{title}</span>
      </div>
      <p style={{ color: '#94a3b8', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{body}</p>
    </div>
  )
}

export default function App() {
  const [activeChart, setActiveChart] = useState('age')
  const ageData = buildAgeDistribution()
  const yearData = buildYearDistribution()
  const nodesData = buildNodesDistribution()

  const pieData = [
    { name: 'Survived 5+ Years', value: stats.survived },
    { name: 'Died within 5 Years', value: stats.died },
  ]

  const chartMap = {
    age: { data: ageData, xKey: 'age', label: 'Age Group' },
    year: { data: yearData, xKey: 'year', label: 'Operation Year' },
    nodes: { data: nodesData, xKey: 'group', label: 'Axillary Nodes' },
  }

  const current = chartMap[activeChart]

  return (
    <div style={{ background: '#020617', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(2,6,23,0.85)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(99,102,241,0.1)',
        padding: '0 5%',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 60,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="pulse" style={{ width: 8, height: 8, borderRadius: '50%', background: '#34d399' }} />
          <span style={{ fontWeight: 800, fontSize: 16, letterSpacing: '-0.02em', color: '#f1f5f9' }}>
            Habermann <span style={{ color: '#818cf8' }}>EDA</span>
          </span>
        </div>
        <div style={{ display: 'flex', gap: 28 }}>
          {['overview', 'visualizations', 'insights', 'about'].map(s => (
            <a key={s} className="nav-link" onClick={() => document.getElementById(s)?.scrollIntoView({ behavior: 'smooth' })}
              style={{ color: '#94a3b8', fontSize: 14, fontWeight: 500, textTransform: 'capitalize', textDecoration: 'none' }}>
              {s}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <div className="hero-bg" style={{ paddingTop: 120, paddingBottom: 80, paddingLeft: '10%', paddingRight: '10%' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)',
            borderRadius: 999, padding: '6px 16px', marginBottom: 24,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#818cf8', display: 'inline-block' }} />
            <span style={{ color: '#a5b4fc', fontSize: 13, fontWeight: 600 }}>
              ML Summer Project · Habermann Dataset
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 900, lineHeight: 1.1, margin: '0 0 20px' }}>
            <span className="gradient-text">Cancer Survival</span>
            <br />
            <span style={{ color: '#f1f5f9' }}>Analysis Dashboard</span>
          </h1>

          <p style={{ color: '#94a3b8', fontSize: 18, lineHeight: 1.7, maxWidth: 600, margin: '0 auto 40px' }}>
            Exploratory data analysis of post-operative survival outcomes for breast cancer patients,
            using the <strong style={{ color: '#c7d2fe' }}>Habermann Dataset</strong> (Kaggle).
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => document.getElementById('visualizations')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: '#fff', border: 'none', padding: '14px 28px',
                borderRadius: 12, fontWeight: 700, fontSize: 15, cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(99,102,241,0.4)',
              }}>
              Explore Charts
            </button>
            <button
              onClick={() => document.getElementById('insights')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'transparent',
                color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.3)',
                padding: '14px 28px', borderRadius: 12, fontWeight: 700, fontSize: 15, cursor: 'pointer',
              }}>
              Key Findings
            </button>
          </div>
        </div>
      </div>

      {/* STATS OVERVIEW */}
      <Section id="overview" style={{ padding: '60px 10%' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: '#f1f5f9', margin: '0 0 8px' }}>Dataset Overview</h2>
            <p style={{ color: '#64748b', fontSize: 15 }}>
              306 patient records · 4 features · Binary survival classification
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 48 }}>
            <StatCard value={stats.total} label="Total Patients" sub="Surgical records 1958–1969" color="#818cf8" />
            <StatCard value={stats.survived} label="Survived 5+ Years" sub={`${stats.survivalRate}% survival rate`} color="#34d399" />
            <StatCard value={stats.died} label="Died within 5 Years" sub="26.5% mortality rate" color="#fb7185" />
            <StatCard value={`${stats.avgAgeSurvived}`} label="Avg Age (Survived)" sub="years old" color="#34d399" />
            <StatCard value={`${stats.avgAgeDied}`} label="Avg Age (Died)" sub="years old" color="#fb7185" />
            <StatCard value={`${stats.zeroNodesSurvivalRate}%`} label="Zero Nodes Survival" sub="Most predictive factor" color="#fbbf24" />
          </div>

          {/* Survival donut + feature table */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div className="chart-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: 17, marginBottom: 20 }}>Survival Distribution</h3>
              <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={65} outerRadius={100}
                    paddingAngle={4} dataKey="value" strokeWidth={0}>
                    {pieData.map((_, i) => (
                      <Cell key={i} fill={i === 0 ? '#34d399' : '#fb7185'} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ background: '#0f172a', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 10 }}
                    itemStyle={{ color: '#e2e8f0' }}
                  />
                  <Legend formatter={v => <span style={{ color: '#94a3b8', fontSize: 13 }}>{v}</span>} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-container">
              <h3 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: 17, marginBottom: 20 }}>Dataset Features</h3>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    {['Feature', 'Description', 'Range'].map(h => (
                      <th key={h} style={{ textAlign: 'left', color: '#64748b', fontSize: 12, fontWeight: 600, paddingBottom: 10,
                        textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(99,102,241,0.1)' }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Age', 'Patient age at time of surgery', '30 – 83'],
                    ['Year', 'Year of operation', '1958 – 1969'],
                    ['Nodes', 'Positive axillary lymph nodes', '0 – 52'],
                    ['Survival', 'Survived ≥5 years post-op', '1 or 2'],
                  ].map(([f, d, r]) => (
                    <tr key={f}>
                      <td style={{ padding: '10px 0', color: '#818cf8', fontWeight: 600, fontSize: 13 }}>{f}</td>
                      <td style={{ padding: '10px 8px', color: '#94a3b8', fontSize: 13 }}>{d}</td>
                      <td style={{ padding: '10px 0', color: '#64748b', fontSize: 12, fontFamily: 'monospace' }}>{r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      {/* VISUALIZATIONS */}
      <Section id="visualizations" style={{ padding: '60px 10%', background: 'rgba(99,102,241,0.02)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: '#f1f5f9', margin: '0 0 8px' }}>
              Interactive Visualizations
            </h2>
            <p style={{ color: '#64748b', fontSize: 15 }}>
              Compare survival outcomes across age, surgery year, and lymph node involvement
            </p>
          </div>

          {/* Chart selector */}
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 32, flexWrap: 'wrap' }}>
            {[
              { key: 'age', label: 'Age Distribution', icon: '👤' },
              { key: 'year', label: 'Operation Year', icon: '📅' },
              { key: 'nodes', label: 'Lymph Nodes', icon: '🔬' },
            ].map(({ key, label, icon }) => (
              <button key={key} onClick={() => setActiveChart(key)} style={{
                padding: '10px 20px', borderRadius: 10, cursor: 'pointer', fontWeight: 600, fontSize: 14,
                background: activeChart === key ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'rgba(15,23,42,0.8)',
                color: activeChart === key ? '#fff' : '#94a3b8',
                border: activeChart === key ? 'none' : '1px solid rgba(99,102,241,0.2)',
                transition: 'all 0.2s',
              }}>
                {icon} {label}
              </button>
            ))}
          </div>

          {/* Main chart */}
          <div className="chart-container" style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div>
                <h3 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: 18, margin: '0 0 4px' }}>
                  {activeChart === 'age' && 'Survival by Age Group'}
                  {activeChart === 'year' && 'Survival by Operation Year'}
                  {activeChart === 'nodes' && 'Survival by Axillary Node Count'}
                </h3>
                <p style={{ color: '#64748b', fontSize: 13, margin: 0 }}>
                  {activeChart === 'age' && 'Patient counts per 5-year age bracket'}
                  {activeChart === 'year' && 'Annual breakdown of surgical outcomes'}
                  {activeChart === 'nodes' && 'Grouped by number of positive lymph nodes'}
                </p>
              </div>
              <div style={{ display: 'flex', gap: 16 }}>
                {[['#34d399', 'Survived'], ['#fb7185', 'Died']].map(([c, l]) => (
                  <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 10, height: 10, borderRadius: 2, background: c }} />
                    <span style={{ color: '#94a3b8', fontSize: 13 }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
            <ResponsiveContainer width="100%" height={360}>
              <BarChart data={current.data} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(99,102,241,0.08)" />
                <XAxis dataKey={current.xKey} tick={{ fill: '#64748b', fontSize: 12 }} axisLine={{ stroke: 'rgba(99,102,241,0.15)' }} tickLine={false} />
                <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="survived" name="survived" fill="#34d399" radius={[4, 4, 0, 0]} maxBarSize={40} />
                <Bar dataKey="died" name="died" fill="#fb7185" radius={[4, 4, 0, 0]} maxBarSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Survival rate area chart */}
          <div className="chart-container">
            <h3 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: 18, margin: '0 0 4px' }}>
              Survival Rate by Age
            </h3>
            <p style={{ color: '#64748b', fontSize: 13, marginBottom: 20 }}>
              Percentage of patients who survived 5+ years, across age groups
            </p>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={ageData.map(d => ({
                age: d.age,
                rate: d.total > 0 ? +((d.survived / d.total) * 100).toFixed(1) : 0
              }))} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                <defs>
                  <linearGradient id="rateGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(99,102,241,0.08)" />
                <XAxis dataKey="age" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={{ stroke: 'rgba(99,102,241,0.15)' }} tickLine={false} />
                <YAxis domain={[0, 100]} tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} unit="%" />
                <Tooltip
                  contentStyle={{ background: '#0f172a', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 10 }}
                  itemStyle={{ color: '#818cf8' }}
                  formatter={v => [`${v}%`, 'Survival Rate']}
                />
                <Area type="monotone" dataKey="rate" stroke="#6366f1" strokeWidth={2.5}
                  fill="url(#rateGrad)" dot={{ fill: '#6366f1', strokeWidth: 0, r: 4 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Section>

      {/* INSIGHTS */}
      <Section id="insights" style={{ padding: '60px 10%' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: '#f1f5f9', margin: '0 0 8px' }}>Key Findings</h2>
            <p style={{ color: '#64748b', fontSize: 15 }}>
              What the data tells us about cancer survival predictors
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <div>
              <h3 style={{ color: '#94a3b8', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20 }}>
                Positive Indicators
              </h3>
              <Insight icon="🟢" color="#34d399" title="Zero Lymph Nodes = High Survival"
                body={`${stats.zeroNodesSurvivalRate}% of patients with 0 positive axillary nodes survived. This is the single strongest predictor of positive outcomes in the dataset.`} />
              <Insight icon="🟢" color="#34d399" title="Younger Patients Fare Better"
                body={`Patients under 40 have near-universal survival rates. The data shows a clear age gradient — younger patients benefit from earlier detection and stronger physiological resilience.`} />
              <Insight icon="🟢" color="#34d399" title="Improving Over Time"
                body="Post-1965 operations show a modest improvement in survival rates, likely reflecting advances in surgical technique and post-operative care during the 1960s." />
            </div>
            <div>
              <h3 style={{ color: '#94a3b8', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20 }}>
                Risk Factors
              </h3>
              <Insight icon="🔴" color="#fb7185" title="High Node Count = High Risk"
                body="Patients with 10+ positive axillary lymph nodes have dramatically lower survival rates. Node involvement indicates disease spread beyond the primary tumor site." />
              <Insight icon="🔴" color="#fb7185" title="Age 40–60 Critical Window"
                body="Counterintuitively, middle-aged patients (40–60) account for most deaths in the dataset — partly due to higher total patient volume in this cohort and diagnosis timing." />
              <Insight icon="🟡" color="#fbbf24" title="Class Imbalance Caveat"
                body="The dataset has a 73.5% / 26.5% split. Any predictive model must account for this imbalance to avoid a bias toward predicting survival by default." />
            </div>
          </div>

          {/* Key numbers */}
          <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            {[
              { val: '73.5%', desc: 'Overall 5-year survival rate', col: '#34d399' },
              { val: `${stats.zeroNodesSurvivalRate}%`, desc: 'Survival with 0 lymph nodes', col: '#818cf8' },
              { val: `~${(+stats.avgAgeSurvived).toFixed(0)} yrs`, desc: 'Average age of survivors', col: '#fbbf24' },
              { val: '1958–69', desc: 'Data collection period', col: '#64748b' },
            ].map(({ val, desc, col }) => (
              <div key={val} className="glass" style={{ padding: '20px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: col, marginBottom: 6 }}>{val}</div>
                <div style={{ color: '#94a3b8', fontSize: 13 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" style={{ padding: '60px 10%', background: 'rgba(99,102,241,0.02)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: '#f1f5f9', margin: '0 0 16px' }}>About This Project</h2>
          <p style={{ color: '#94a3b8', fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>
            This dashboard is an interactive redesign of an ML Summer Project notebook that performed
            exploratory data analysis on the <strong style={{ color: '#c7d2fe' }}>Habermann Cancer Survival Dataset</strong>.
            The original analysis explored probability density functions and cumulative distributions
            to identify key predictors of 5-year post-operative survival in breast cancer patients.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['React', 'Recharts', 'Vite', 'Tailwind CSS', 'Habermann Dataset'].map(t => (
              <span key={t} style={{
                padding: '6px 14px', borderRadius: 999, fontSize: 13, fontWeight: 600,
                background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', color: '#a5b4fc',
              }}>{t}</span>
            ))}
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer style={{
        borderTop: '1px solid rgba(99,102,241,0.1)',
        padding: '24px 10%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#475569',
        fontSize: 13,
        flexWrap: 'wrap',
        gap: 8,
      }}>
        <span>Habermann EDA · Built with React + Recharts</span>
        <a href="https://github.com/DoomDust7/Exploratory-Data-Analysis" target="_blank" rel="noreferrer"
          style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 600 }}>
          View Source on GitHub →
        </a>
      </footer>

    </div>
  )
}
