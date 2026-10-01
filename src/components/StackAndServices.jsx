import React, { useState } from 'react';
import { Cpu, Server, Rocket, Bot, Database, Workflow, ShieldCheck, Code, Globe, Zap, ArrowUpRight } from 'lucide-react';

export default function StackAndServices() {
  const [selectedService, setSelectedService] = useState(null);

  const tools = [
    { name: 'Vue.js', icon: '⚡', category: 'Frontend' },
    { name: 'Python', icon: '🐍', category: 'Backend & ML' },
    { name: 'Prisma', icon: '💎', category: 'ORM' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'Make.com', icon: '🔄', category: 'Automation' },
    { name: 'MySQL', icon: '🐬', category: 'Database' },
    { name: 'Supabase', icon: '⚡', category: 'BaaS' },
    { name: 'Figma', icon: '🎨', category: 'UI/UX' },
    { name: 'PHP', icon: '🐘', category: 'Backend' },
    { name: 'Quasar', icon: '🚀', category: 'Cross-Platform' },
    { name: 'OpenAI API', icon: '🤖', category: 'AI Tools' },
    { name: 'Claude', icon: '🧠', category: 'AI Models' },
  ];

  const services = [
    {
      id: 'fullstack',
      icon: <Code size={32} color="#38bdf8" />,
      tag: 'Web & Mobile Apps',
      title: 'Desarrollo Full-Stack',
      accentColor: '#38bdf8',
      description: 'Construcción de aplicaciones web y móviles escalables de alto rendimiento utilizando tecnologías modernas y código mantenible.',
      features: [
        'Aplicaciones Móviles & Web con PHP, JS & Quasar Framework',
        'SPAs reactivas y SSR con Vue.js / React',
        'Bases de datos optimizadas con Prisma ORM, Supabase y MySQL',
        'Arquitectura limpia de código y APIs REST / GraphQL',
      ],
      stackPills: ['Vue.js', 'Quasar', 'PHP', 'JavaScript', 'Supabase'],
    },
    {
      id: 'automation',
      icon: <Workflow size={32} color="#10b981" />,
      tag: 'AI & Bot Workflows',
      title: 'Arquitectura & Automatización',
      accentColor: '#10b981',
      description: 'Orquestación de procesos complejos sin fricción, integrando asistentes de Inteligencia Artificial y agentes omnicanal.',
      features: [
        'Escenarios complejos de automatización en Make.com',
        'Integración avanzada de Modelos de Lenguaje (OpenAI, Claude API)',
        'Bots omnicanal inteligentes con BotSailor y Webhooks',
        'Procesamiento de datos en segundo plano y disparadores automáticos',
      ],
      stackPills: ['Make.com', 'OpenAI', 'Claude', 'BotSailor', 'Python'],
    },
    {
      id: 'launches',
      icon: <Rocket size={32} color="#f59e0b" />,
      tag: 'Creat mark Engine',
      title: 'Lanzamientos Digitales',
      accentColor: '#f59e0b',
      description: 'Infraestructura completa de captación y conversión para proyectos de alto impacto digital con capacidad de tráfico masivo.',
      features: [
        'Embudos de venta de alta conversión con UI ultra-optimizada',
        'Pasarelas de pago seguras (Stripe, MercadoPago, PayPal)',
        'Despliegues de alto tráfico con tolerancia a fallos',
        'Infraestructura probada en lanzamientos como FISIO2K y RED 4.0',
      ],
      stackPills: ['Docker', 'Payment Gateways', 'High-Traffic CDN', 'Creat mark'],
    },
  ];

  return (
    <section
      id="services"
      style={{
        position: 'relative',
        padding: '120px 24px',
        background: 'var(--bg-dark)',
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} /> 03. Stack &amp; Servicios
          </div>
          <h2 className="section-title">
            El Motor Técnico: <span className="text-gradient-emerald">Herramientas &amp; Soluciones</span>
          </h2>
          <p className="section-description">
            Combino tecnologías de vanguardia con arquitectura estructurada para ofrecer productos digitales robustos y automatizaciones inteligentes.
          </p>
        </div>

        {/* Marquee Tool Logos Banner */}
        <div
          style={{
            marginBottom: '80px',
            background: 'rgba(11, 17, 32, 0.6)',
            padding: '24px 0',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              fontSize: '0.82rem',
              color: 'var(--text-dim)',
              fontFamily: 'var(--font-code)',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            ✦ Tooling &amp; Stack de Trabajo Activo ✦
          </div>

          <div className="marquee-container">
            <div className="marquee-content">
              {tools.concat(tools).map((tool, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '10px 20px',
                    borderRadius: '12px',
                    color: '#ffffff',
                    fontWeight: '700',
                    fontSize: '0.95rem',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>{tool.icon}</span>
                  <span>{tool.name}</span>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      color: 'var(--text-dim)',
                      fontFamily: 'var(--font-code)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '2px 6px',
                      borderRadius: '4px',
                    }}
                  >
                    {tool.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3-Column Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="glass-card"
              style={{
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top Decorative Glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: service.accentColor,
                  filter: 'blur(50px)',
                  opacity: 0.2,
                }}
              />

              <div>
                {/* Icon & Tag */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '24px',
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid ' + service.accentColor + '40',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {service.icon}
                  </div>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-code)',
                      fontWeight: '700',
                      color: service.accentColor,
                      background: service.accentColor + '15',
                      border: '1px solid ' + service.accentColor + '30',
                      padding: '4px 10px',
                      borderRadius: '20px',
                    }}
                  >
                    {service.tag}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1.5rem',
                    marginBottom: '14px',
                    color: '#ffffff',
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.98rem',
                    lineHeight: '1.6',
                    marginBottom: '24px',
                  }}
                >
                  {service.description}
                </p>

                {/* Feature Bullet Points */}
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    marginBottom: '28px',
                  }}
                >
                  {service.features.map((feat, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '0.9rem',
                        color: '#cbd5e1',
                      }}
                    >
                      <Zap size={16} color={service.accentColor} style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack Pills Footer */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '20px',
                  }}
                >
                  {service.stackPills.map((pill) => (
                    <span
                      key={pill}
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-code)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: service.accentColor,
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                  }}
                >
                  Solicitar este servicio <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
