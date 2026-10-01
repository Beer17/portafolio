import React, { useState } from 'react';
import { User, GraduationCap, Compass, Code, Brain, MapPin, Zap, Layers, Sparkles } from 'lucide-react';

export default function AboutMe() {
  const [dualView, setDualView] = useState('split'); // 'split', 'tech', 'scout'
  const [activeHotspot, setActiveHotspot] = useState(null);

  const hotspots = [
    {
      id: 'calc',
      title: 'Cálculo & Cinemática',
      type: 'tech',
      description: 'Modelado matemático en Hybridge aplicado a la optimización de latencia en peticiones a bases de datos.',
      x: '25%',
      y: '30%',
    },
    {
      id: 'db',
      title: 'Arquitectura de Datos',
      type: 'tech',
      description: 'Estructuración lógica de esquemas relacionales y offline-first sync (Prisma, Supabase, MySQL).',
      x: '35%',
      y: '70%',
    },
    {
      id: 'ansi',
      title: 'Uniforme & Disciplina ANSI',
      type: 'scout',
      description: 'Liderazgo orgánico y dirección de grupos scouts bajo presión y climas extremos.',
      x: '75%',
      y: '35%',
    },
    {
      id: 'nature',
      title: 'Logística de Campo',
      type: 'scout',
      description: 'Topografía, cartografía y gestión de recursos reales en expediciones como Vuelo de Guacamayas.',
      x: '85%',
      y: '75%',
    },
  ];

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        background: 'var(--bg-surface-1)',
        padding: '120px 24px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} /> 02. Sobre Mí
          </div>
          <h2 className="section-title">
            La Dualidad: <span className="text-gradient-cyan">Lógica Matemática</span> &amp;{' '}
            <span className="text-gradient-amber">Liderazgo de Campo</span>
          </h2>
          <p className="section-description">
            La misma precisión que requiere el cálculo diferencial es la que empleo para dirigir expediciones en la selva y estructurar software de alta disponibilidad.
          </p>
        </div>

        {/* 50 / 50 Grid Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div
              className="glass-card"
              style={{
                padding: '36px',
                background: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid rgba(56, 189, 248, 0.2)',
              }}
            >
              {/* Age & Precocity Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(56, 189, 248, 0.12)',
                  color: '#38bdf8',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  marginBottom: '20px',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                }}
              >
                <Zap size={15} /> 17 Años | Empuje &amp; Precocidad Técnica
              </div>

              <h3
                style={{
                  fontSize: '1.75rem',
                  marginBottom: '16px',
                  color: '#ffffff',
                  lineHeight: '1.3',
                }}
              >
                Ingeniería de Software con Valores de Vanguardia
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '20px' }}>
                Mi nombre es <strong style={{ color: '#ffffff' }}>Miguel Casas Beer</strong>. A mis 17 años, combino la formación académica rigurosa en <strong style={{ color: '#38bdf8' }}>Hybridge</strong> con la dirección de proyectos tecnológicos reales como fundador y líder técnico de <strong style={{ color: '#10b981' }}>Creat mark</strong>.
              </p>

              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
                Para mí, resolver un problema de <strong style={{ color: '#ffffff' }}>cálculo avanzado o cinemática</strong> no difiere de diseñar un esquema de base de datos relacional o una tubería de automatización omnicanal: en ambos campos la lógica estricta, la optimización de recursos y la anticipación de fallos determinan el éxito del sistema.
              </p>

              {/* Key Pillars Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                  marginTop: '12px',
                }}
              >
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <div style={{ color: '#38bdf8', marginBottom: '6px' }}>
                    <GraduationCap size={22} />
                  </div>
                  <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '4px' }}>Hybridge High</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>Matemáticas aplicadas, física &amp; ciencias de la computación.</p>
                </div>

                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <div style={{ color: '#f59e0b', marginBottom: '6px' }}>
                    <Compass size={22} />
                  </div>
                  <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '4px' }}>Jefe Scout ANSI</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>Liderazgo de grupos juveniles, primeros auxilios y supervivencia.</p>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                textAlign: 'center',
              }}
            >
              <div
                className="glass-card"
                style={{ padding: '20px 12px', background: 'rgba(11, 17, 32, 0.8)' }}
              >
                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#10b981' }}>17</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Años de Edad</div>
              </div>

              <div
                className="glass-card"
                style={{ padding: '20px 12px', background: 'rgba(11, 17, 32, 0.8)' }}
              >
                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#38bdf8' }}>+15</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Proyectos Reales</div>
              </div>

              <div
                className="glass-card"
                style={{ padding: '20px 12px', background: 'rgba(11, 17, 32, 0.8)' }}
              >
                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#fbbf24' }}>100%</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Liderazgo en Campo</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Duality Visual */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* View Mode Controls */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: 'rgba(11, 17, 32, 0.9)',
                padding: '6px',
                borderRadius: '14px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <button
                onClick={() => setDualView('split')}
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  borderRadius: '10px',
                  border: 'none',
                  background: dualView === 'split' ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
                  color: dualView === 'split' ? '#34d399' : 'var(--text-muted)',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                }}
              >
                <Sparkles size={14} /> Dualidad 50/50
              </button>

              <button
                onClick={() => setDualView('tech')}
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  borderRadius: '10px',
                  border: 'none',
                  background: dualView === 'tech' ? 'rgba(56, 189, 248, 0.2)' : 'transparent',
                  color: dualView === 'tech' ? '#38bdf8' : 'var(--text-muted)',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                }}
              >
                <Code size={14} /> Entorno Tech
              </button>

              <button
                onClick={() => setDualView('scout')}
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  borderRadius: '10px',
                  border: 'none',
                  background: dualView === 'scout' ? 'rgba(245, 158, 11, 0.2)' : 'transparent',
                  color: dualView === 'scout' ? '#fbbf24' : 'var(--text-muted)',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                }}
              >
                <Compass size={14} /> Entorno Scout
              </button>
            </div>

            {/* Duality Card Container */}
            <div
              className="duality-box"
              style={{
                position: 'relative',
                height: '460px',
                backgroundImage: 'url(/images/duality.jpg)',
                backgroundSize: dualView === 'tech' ? '200% 100%' : dualView === 'scout' ? '200% 100%' : 'cover',
                backgroundPosition: dualView === 'tech' ? 'left center' : dualView === 'scout' ? 'right center' : 'center',
                transition: 'all 0.5s ease',
              }}
            >
              {/* Overlay Glass Diagonal Effect */}
              {dualView === 'split' && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(115deg, rgba(2, 132, 199, 0.3) 0%, rgba(2, 132, 199, 0) 48%, rgba(245, 158, 11, 0) 52%, rgba(245, 158, 11, 0.3) 100%)',
                    pointerEvents: 'none',
                  }}
                />
              )}

              {/* Floating Badges */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                }}
                className="glass-pill badge-tech"
              >
                <Code size={14} /> Software &amp; Figma
              </div>

              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                }}
                className="glass-pill badge-scout"
              >
                <Compass size={14} /> Uniforme ANSI &amp; Naturaleza
              </div>

              {/* Interactive Hotspots */}
              {hotspots.map((spot) => {
                if (dualView === 'tech' && spot.type === 'scout') return null;
                if (dualView === 'scout' && spot.type === 'tech') return null;

                return (
                  <div
                    key={spot.id}
                    style={{
                      position: 'absolute',
                      left: spot.x,
                      top: spot.y,
                      transform: 'translate(-50%, -50%)',
                      zIndex: 10,
                    }}
                  >
                    <button
                      onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: spot.type === 'tech' ? '#38bdf8' : '#f59e0b',
                        color: '#000000',
                        border: '3px solid #ffffff',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: '0.8rem',
                        boxShadow: '0 0 15px ' + (spot.type === 'tech' ? 'rgba(56, 189, 248, 0.8)' : 'rgba(245, 158, 11, 0.8)'),
                        animation: 'pulse 2s infinite',
                      }}
                      title={spot.title}
                    >
                      +
                    </button>

                    {/* Popover Card */}
                    {activeHotspot === spot.id && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '40px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '240px',
                          background: 'rgba(6, 9, 17, 0.95)',
                          border: '1px solid ' + (spot.type === 'tech' ? '#38bdf8' : '#f59e0b'),
                          borderRadius: '12px',
                          padding: '14px',
                          zIndex: 20,
                          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.8)',
                          fontSize: '0.82rem',
                        }}
                      >
                        <strong
                          style={{
                            display: 'block',
                            color: spot.type === 'tech' ? '#38bdf8' : '#fbbf24',
                            marginBottom: '4px',
                          }}
                        >
                          {spot.title}
                        </strong>
                        <p style={{ color: 'var(--text-muted)' }}>{spot.description}</p>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Bottom Caption Bar */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  padding: '16px 20px',
                  background: 'linear-gradient(to top, rgba(6, 9, 17, 0.95), rgba(6, 9, 17, 0))',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: '600' }}>
                  Haz clic en los nodos (+) para ver la sinergia
                </span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-code)',
                  }}
                >
                  ANSI ID: Miguel Casas Beer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
