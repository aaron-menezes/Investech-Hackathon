import React from 'react';
import { useProgress } from '@react-three/drei';

const STEPS = [
  { n: 1, label: 'Research', text: "Analysts read the company's filings and rank it against peers." },
  { n: 2, label: 'Debate', text: 'A Bull and a Bear argue for and against adding it.' },
  { n: 3, label: 'Fact-check', text: "A Skeptic throws out any claim that isn't backed by the filings, and the score comes from what survives." },
];

export default function LandingScreen({ phase, universe, onStart }) {
  const { progress, active } = useProgress();
  const loaded = !active && progress >= 100 && universe !== null;
  const exiting = phase === 'flying';

  return (
    <div className={`landing${exiting ? ' landing-exit' : ''}`}>
      <div className="landing-inner">
        <div className="landing-brand">
          <svg width="52" height="56" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="8" y1="2" x2="8" y2="8" stroke="#2ecc71" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="4" y="8" width="8" height="14" rx="1.2" fill="#2ecc71" />
            <line x1="8" y1="22" x2="8" y2="30" stroke="#2ecc71" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="22" y1="4" x2="22" y2="10" stroke="#e74c3c" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="18" y="10" width="8" height="16" rx="1.2" fill="#e74c3c" />
            <line x1="22" y1="26" x2="22" y2="30" stroke="#e74c3c" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <h1 className="landing-title">Highrise</h1>
        </div>

        <p className="landing-tagline">
          An AI research team that decides which Canadian stocks belong in an index, and proves every number.
        </p>

        <div className="landing-steps">
          {STEPS.map(({ n, label, text }) => (
            <div key={n} className="landing-step">
              <span className="landing-step-n">{n}</span>
              <div><b>{label}:</b> {text}</div>
            </div>
          ))}
        </div>

        <div className="landing-foot">
          <div className="landing-bar-wrap">
            <div className="landing-bar">
              <div className="landing-bar-fill" style={{ width: `${Math.round(progress)}%` }} />
            </div>
            <span className="landing-pct">{Math.round(progress)}%</span>
          </div>
          <button className="btn go landing-start" disabled={!loaded} onClick={onStart}>
            {loaded ? 'Start' : 'Loading…'}
          </button>
        </div>
      </div>
    </div>
  );
}
