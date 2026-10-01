import React, { useState } from 'react';
import { ArrowRight, Code2, Compass, Cpu, Play, CheckCircle2, Copy } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('code');
  const [copied, setCopied] = useState(false);

  const codeSnippet = `// Creat mark - Ecosistema Digital & Arquitectura Algorítmica
class TechnicalArchitect {
  constructor() {
    this.name = "Miguel Casas Beer";
    this.age = 17;
    this.location = "Cancún, Q.R. 🌴";
    this.role = "Full-Stack Engineer & Tech Lead";
    this.education = "Hybridge Institute";
    this.brand = "Creat mark";
  }

  async executeStrategy(project) {
    const backend = await this.deployScalableNodes({
      databases: ['Supabase', 'MySQL', 'Prisma ORM'],
      automation: ['Make.com', 'OpenAI', 'Claude API'],
      frameworks: ['Vue.js', 'Quasar', 'PHP', 'Python']
    });
    
    return {
      status: "STABLE",
      highTrafficReady: true,
      scoutDisciplineApplied: true
    };
  }
}`;

  const scoutSnippet = `# Vida Scout ANSI - Algoritmo de Liderazgo Organico & Logistica
class ScoutLeadershipEngine:
    def __init__(self, expedition_name="Vuelo de Guacamayas"):
        self.expedition = expedition_name
        self.location = "Chiapas, México"
        self.team_size = 48
        self.offline_first_mode = True

    def calculate_kinematics_and_route(self, elevation_map, weather_conditions):
        """ Aplica cálculo vectorial y cinemática para seguridad en campo """
        route_safety_score = 0.99
        logistics_flow = "OPTIMAL"
        return {
            "route_status": "READY",
            "first_aid_nodes": 4,
            "morale_level": 100
        }
`;

  const copyCode = () => {
    navigator.clipboard.writeText(activeTab === 'code' ? codeSnippet : scoutSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--nav-height) + 40px)',
        paddingBottom: '80px',
        overflow: 'hidden',
      }}
    >
      {/* Background Image Layer with Blend Gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/images/hero_bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.35,
          filter: 'contrast(1.1) brightness(0.9)',
          zIndex: 0,
        }}
      />

      {/* Subtle Matrix / Forest Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 50% 30%, rgba(16, 185, 129, 0.12) 0%, rgba(6, 9, 17, 0.95) 75%)',
          zIndex: 1,
        }}
      />

      <div
        className="section-container"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          {/* Tagline */}
          <div
            className="section-tag"
            style={{
              margin: '0 auto 20px auto',
            }}
          >
            <Cpu size={15} /> Software Engineering × Scout Leadership
          </div>

          {/* H1 Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: '24px',
              letterSpacing: '-0.03em',
            }}
          >
            Construyo ecosistemas digitales complejos y{' '}
            <span className="text-gradient-emerald">lidero equipos</span> en el mundo real.
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              color: 'var(--text-muted)',
              marginBottom: '36px',
              fontWeight: '400',
              lineHeight: '1.6',
            }}
          >
            <strong style={{ color: '#ffffff' }}>Miguel Casas Beer</strong> | Software Engineer, Full-Stack Developer &amp; Technical Lead en{' '}
            <span style={{ color: '#10b981', fontWeight: '700' }}>Creat mark</span>.
          </p>

          {/* Call to Actions */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '60px',
            }}
          >
            <a href="#projects" className="btn-primary">
              Ver Casos de Estudio <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn-secondary">
              Iniciar un Proyecto
            </a>
          </div>
        </div>

        {/* Interactive Code & Scouting Terminal Window */}
        <div
          className="glass-card"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            width: '100%',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
          }}
        >
          {/* Terminal Window Header */}
          <div
            style={{
              background: 'rgba(11, 17, 32, 0.95)',
              padding: '12px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            {/* Window Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></span>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }}></span>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }}></span>
            </div>

            {/* Terminal Tabs */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => setActiveTab('code')}
                style={{
                  background: activeTab === 'code' ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
                  border: activeTab === 'code' ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid transparent',
                  color: activeTab === 'code' ? '#34d399' : 'var(--text-muted)',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-code)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Code2 size={14} /> CreatMarkSystem.js
              </button>

              <button
                onClick={() => setActiveTab('scout')}
                style={{
                  background: activeTab === 'scout' ? 'rgba(245, 158, 11, 0.15)' : 'transparent',
                  border: activeTab === 'scout' ? '1px solid rgba(245, 158, 11, 0.3)' : '1px solid transparent',
                  color: activeTab === 'scout' ? '#fbbf24' : 'var(--text-muted)',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-code)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Compass size={14} /> ScoutLeadership.py
              </button>
            </div>

            {/* Copy code button */}
            <button
              onClick={copyCode}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.78rem',
              }}
              title="Copiar código"
            >
              {copied ? <CheckCircle2 size={15} color="#10b981" /> : <Copy size={15} />}
              {copied ? 'Copiado' : 'Copiar'}
            </button>
          </div>

          {/* Code View Body */}
          <div
            style={{
              padding: '24px',
              background: 'rgba(6, 9, 17, 0.95)',
              maxHeight: '380px',
              overflowY: 'auto',
            }}
          >
            <pre
              style={{
                fontFamily: 'var(--font-code)',
                fontSize: '0.9rem',
                lineHeight: '1.7',
                color: '#e2e8f0',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
            >
              <code>{activeTab === 'code' ? codeSnippet : scoutSnippet}</code>
            </pre>
          </div>

          {/* Execution Status Bar */}
          <div
            style={{
              background: 'rgba(11, 17, 32, 0.8)',
              padding: '10px 20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-code)',
              color: 'var(--text-muted)',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 8px #10b981',
                }}
              ></span>
              Runtime Engine: Node v20.x | Python 3.11 | Build Clean
            </span>

            <span>Cancún, Q.R. :: Lat 21.1619° N</span>
          </div>
        </div>
      </div>
    </section>
  );
}
