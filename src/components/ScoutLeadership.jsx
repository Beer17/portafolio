import React, { useState } from 'react';
import { Compass, Flame, Map, Users, Shield, Award, CheckCircle, Calendar, Terminal } from 'lucide-react';

export default function ScoutLeadership() {
  const [activeTab, setActiveTab] = useState('chiapas');

  const timelineEntries = [
    {
      year: '2025 - Presente',
      role: 'Jefe & Coordinador de Logística ANSI',
      title: 'Gestionar el Backend en la Vida Real',
      location: 'Cancún & Sureste de México',
      description: 'Supervisión de campamentos de alta densidad, protocolos de evacuación, seguridad médica y distribución de víveres en terreno abierto.',
      icon: <Compass size={18} color="#f59e0b" />,
    },
    {
      year: 'Expedición Chiapas',
      role: 'Director de Ruta - "Vuelo de Guacamayas"',
      title: 'Topografía & Navegación en Selva',
      location: 'Selva Lacandona, Chiapas',
      description: 'Dirección logística de 48 participantes en terreno sin cobertura telefónica. Levantamiento de mapas topográficos con brújula y altímetro.',
      icon: <Map size={18} color="#10b981" />,
    },
    {
      year: 'Capacitación Continua',
      role: 'Primeros Auxilios & Rescate Técnico',
      title: 'Resolución de Crisis Bajo Presión',
      location: 'ANSI México',
      description: 'Liderazgo orgánico y calma ejecutiva cuando las condiciones climáticas o los imprevistos en campo exigen decisiones inmediatas.',
      icon: <Flame size={18} color="#ef4444" />,
    },
  ];

  return (
    <section
      id="scout-leadership"
      style={{
        position: 'relative',
        padding: '120px 24px',
        background: 'var(--bg-dark)',
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag" style={{ background: 'rgba(245, 158, 11, 0.12)', color: '#fbbf24', borderColor: 'rgba(245, 158, 11, 0.3)' }}>
            <Compass size={14} /> 05. Liderazgo &amp; Comunidad
          </div>
          <h2 className="section-title">
            El Diferenciador: <span className="text-gradient-amber">Project Management Organico</span>
          </h2>
          <p className="section-description">
            Gestionar el backend en la vida real. Mis habilidades de dirección de equipos y resolución de crisis no nacieron frente a un monitor, sino liderando expediciones en la selva.
          </p>
        </div>

        {/* Top Feature Banner (Photo + Logbook Narrative) */}
        <div
          className="glass-card"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            borderRadius: '24px',
            overflow: 'hidden',
            marginBottom: '60px',
            border: '1px solid rgba(245, 158, 11, 0.3)',
          }}
        >
          {/* Left: Expedition Photo Mosaic */}
          <div
            style={{
              minHeight: '380px',
              backgroundImage: 'url(/images/scout_chiapas.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to top, rgba(6, 9, 17, 0.85), rgba(6, 9, 17, 0.1))',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(6, 9, 17, 0.8)',
                  backdropFilter: 'blur(8px)',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-code)',
                  color: '#fbbf24',
                  border: '1px solid rgba(245, 158, 11, 0.4)',
                  alignSelf: 'flex-start',
                }}
              >
                <Map size={14} /> Campamento "Vuelo de Guacamayas" | Chiapas
              </div>
            </div>
          </div>

          {/* Right: Field Logbook Note */}
          <div
            style={{
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              background: 'rgba(15, 23, 42, 0.8)',
            }}
          >
            {/* Engineer Field Notebook Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-code)',
                color: 'var(--text-dim)',
                marginBottom: '12px',
              }}
            >
              <Terminal size={14} color="#f59e0b" /> [BITÁCORA DE CAMPO #ANSI-048]
            </div>

            <h3
              style={{
                fontSize: '1.75rem',
                marginBottom: '16px',
                color: '#ffffff',
                lineHeight: '1.3',
              }}
            >
              Planificación Extrema y Orquestación bajo Presión
            </h3>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '1.02rem',
                lineHeight: '1.7',
                marginBottom: '24px',
              }}
            >
              Organizar un campamento scout para docenas de jóvenes implica planificar rutas topográficas, calcular raciones de supervivencia, anticipar contingencias climáticas y mantener la moral alta. <strong style={{ color: '#ffffff' }}>Esa misma capacidad de orquestación es la que aplico para dirigir sprints de software, evitar cuellos de botella y liderar equipos multidisciplinarios.</strong>
            </p>

            {/* Metric Chips */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
              }}
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  padding: '12px 16px',
                  borderRadius: '10px',
                }}
              >
                <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', display: 'block' }}>Logística Directa</span>
                <strong style={{ color: '#fbbf24', fontSize: '1rem' }}>+48 Scouts a Cargo</strong>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  padding: '12px 16px',
                  borderRadius: '10px',
                }}
              >
                <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', display: 'block' }}>Tolerancia a Crisis</span>
                <strong style={{ color: '#10b981', fontSize: '1rem' }}>Zero Incidencias</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Log Section */}
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <h3
            style={{
              fontSize: '1.5rem',
              color: '#ffffff',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            Bitácora de Liderazgo &amp; Trayectoria en Campo
          </h3>

          <div
            style={{
              position: 'relative',
              paddingLeft: '32px',
              borderLeft: '2px dashed rgba(245, 158, 11, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
            }}
          >
            {timelineEntries.map((item, idx) => (
              <div key={idx} style={{ position: 'relative' }}>
                {/* Node Bullet */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-43px',
                    top: '4px',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'var(--bg-dark)',
                    border: '2px solid #f59e0b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 10px rgba(245, 158, 11, 0.5)',
                  }}
                >
                  {item.icon}
                </div>

                <div
                  className="glass-card"
                  style={{
                    padding: '24px 28px',
                    background: 'rgba(15, 23, 42, 0.7)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px',
                      marginBottom: '8px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-code)',
                        color: '#fbbf24',
                        fontWeight: '700',
                      }}
                    >
                      {item.year}
                    </span>

                    <span
                      style={{
                        fontSize: '0.78rem',
                        color: 'var(--text-dim)',
                      }}
                    >
                      📍 {item.location}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '4px' }}>{item.title}</h4>
                  <div style={{ fontSize: '0.9rem', color: '#38bdf8', fontWeight: '600', marginBottom: '12px' }}>
                    {item.role}
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
