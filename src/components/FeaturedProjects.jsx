import React, { useState } from 'react';
import { Layers, ArrowUpRight, Cpu, HardDrive, ShieldCheck, MapPin, Eye } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 'hormiruta',
      title: 'HormiRuta',
      category: 'Logística / Quasar / Algoritmia',
      image: '/images/project_hormiruta.jpg',
      shortDescription: 'Plataforma avanzada para renderizado de mapas interactivos, cálculo eficiente de rutas óptimas y persistencia de datos local.',
      longDescription: 'HormiRuta es un sistema integral de optimización logística desarrollado con Quasar Framework. Diseñado para resolver el problema del viajante y navegación en entornos de baja conectividad mediante grafos ponderados, renderizado matricial de mapas y caching en IndexedDB.',
      specs: [
        { label: 'Renderizado de Mapas', value: 'Leaflet / Custom Canvas' },
        { label: 'Algoritmia de Rutas', value: 'Dijkstra & A* Graph Optimization' },
        { label: 'Persistencia Local', value: 'IndexedDB & LocalStorage' },
        { label: 'Frontend Framework', value: 'Quasar (Vue 3)' },
      ],
      technologies: ['Quasar', 'Vue.js', 'Leaflet', 'JavaScript ES6+', 'IndexedDB', 'Graph Algorithms'],
    },
    {
      id: 'scout-ecosystem',
      title: 'Ecosistema Scout (Scout Wiki & SISAS ANSI)',
      category: 'App Móvil / Base de Datos / Offline-First',
      image: '/images/project_scout.jpg',
      shortDescription: 'Arquitectura offline-first para Android orientada a la gestión de datos scout a nivel nacional e insignia de progresión juvenil.',
      longDescription: 'Sistema centralizado de expedición y gestión administrativa para tropas y jefaturas scout en la ANSI. Funciona de manera fully offline en zonas selváticas o de montaña con sincronización delta bidireccional inmediata al recuperar la red.',
      specs: [
        { label: 'Arquitectura', value: 'Offline-First Bidireccional' },
        { label: 'Persistencia Android', value: 'SQLite / Supabase Sync' },
        { label: 'Cobertura', value: 'Roster Nacional & Badging System' },
        { label: 'Seguridad', value: 'JWT & Local Encrypted Cache' },
      ],
      technologies: ['Vue.js', 'Supabase', 'SQLite', 'IndexedDB', 'PWA / Android Build'],
    },
    {
      id: 'creatmark-launches',
      title: 'Creat mark (Infraestructura de Lanzamientos)',
      category: 'Arquitectura Web / E-Commerce / Escalabilidad',
      image: '/images/project_creatmark.jpg',
      shortDescription: 'Infraestructura de alta velocidad y conversión para lanzamientos digitales masivos como FISIO2K y RED 4.0.',
      longDescription: 'Plataformas e-commerce diseñadas para soportar picos simultáneos de miles de usuarios durante aperturas de venta. Integración de pasarelas Stripe y MercadoPago, embudos de captación automatizados con Make.com y notificaciones de compra en tiempo real.',
      specs: [
        { label: 'Clientes Insignia', value: 'FISIO2K & RED 4.0' },
        { label: 'Pasarelas de Pago', value: 'Stripe, MercadoPago, PayPal' },
        { label: 'Automatizaciones', value: 'Make.com & Webhooks OpenAI' },
        { label: 'Disponibilidad', value: '99.99% Uptime under Traffic Peaks' },
      ],
      technologies: ['Python', 'Make.com', 'Stripe API', 'Supabase', 'Docker', 'Vanilla CSS'],
    },
  ];

  return (
    <section
      id="projects"
      style={{
        position: 'relative',
        padding: '120px 24px',
        background: 'var(--bg-surface-1)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} /> 04. Proyectos Destacados
          </div>
          <h2 className="section-title">
            La Prueba Social: <span className="text-gradient-emerald">Casos de Estudio</span>
          </h2>
          <p className="section-description">
            Soluciones reales construidas bajo exigentes estándares de rendimiento, resiliencia offline y conversión. Pasa el cursor para ver detalles técnicos.
          </p>
        </div>

        {/* Horizontal Large Cards Layout */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
          }}
        >
          {projects.map((proj) => {
            const isHovered = hoveredId === proj.id;
            return (
              <div
                key={proj.id}
                onMouseEnter={() => setHoveredId(proj.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedProject(proj)}
                className="glass-card"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: isHovered
                    ? '1px solid rgba(16, 185, 129, 0.5)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isHovered
                    ? '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(16, 185, 129, 0.25)'
                    : 'none',
                  transition: 'all 0.4s ease',
                }}
              >
                {/* Image Container with Hover Overlay */}
                <div
                  style={{
                    position: 'relative',
                    minHeight: '320px',
                    backgroundImage: `url(${proj.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    overflow: 'hidden',
                  }}
                >
                  {/* Hover Darkening Overlay showing technical specs */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: isHovered
                        ? 'rgba(6, 9, 17, 0.92)'
                        : 'linear-gradient(to right, rgba(6, 9, 17, 0.1), rgba(6, 9, 17, 0.7))',
                      backdropFilter: isHovered ? 'blur(8px)' : 'none',
                      transition: 'all 0.4s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      padding: '32px',
                    }}
                  >
                    {isHovered ? (
                      <div style={{ color: '#ffffff' }}>
                        <div
                          style={{
                            fontSize: '0.8rem',
                            fontFamily: 'var(--font-code)',
                            color: '#10b981',
                            marginBottom: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                          }}
                        >
                          <Cpu size={14} /> ESPECIFICACIONES TÉCNICAS
                        </div>

                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '12px',
                            marginBottom: '20px',
                          }}
                        >
                          {proj.specs.map((s, idx) => (
                            <div key={idx} style={{ fontSize: '0.82rem' }}>
                              <span style={{ color: 'var(--text-dim)', display: 'block' }}>{s.label}</span>
                              <strong style={{ color: '#38bdf8' }}>{s.value}</strong>
                            </div>
                          ))}
                        </div>

                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(16, 185, 129, 0.2)',
                            color: '#34d399',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            fontSize: '0.85rem',
                            fontWeight: '700',
                          }}
                        >
                          <Eye size={16} /> Click para abrir caso completo
                        </div>
                      </div>
                    ) : (
                      <span
                        style={{
                          fontSize: '0.8rem',
                          fontFamily: 'var(--font-code)',
                          color: '#ffffff',
                          background: 'rgba(6, 9, 17, 0.6)',
                          backdropFilter: 'blur(4px)',
                          padding: '6px 14px',
                          borderRadius: '20px',
                          alignSelf: 'flex-start',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                        }}
                      >
                        Pasa el cursor para ver especificaciones
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Side */}
                <div
                  style={{
                    padding: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    {/* Category Tag */}
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-code)',
                        fontWeight: '700',
                        color: '#10b981',
                        background: 'rgba(16, 185, 129, 0.12)',
                        border: '1px solid rgba(16, 185, 129, 0.25)',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        display: 'inline-block',
                        marginBottom: '16px',
                      }}
                    >
                      {proj.category}
                    </span>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: '1.85rem',
                        marginBottom: '14px',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      {proj.title}
                      <ArrowUpRight size={22} color={isHovered ? '#10b981' : 'var(--text-muted)'} />
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        color: 'var(--text-muted)',
                        fontSize: '1.02rem',
                        lineHeight: '1.6',
                        marginBottom: '24px',
                      }}
                    >
                      {proj.shortDescription}
                    </p>
                  </div>

                  {/* Stack Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {proj.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-code)',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          color: '#cbd5e1',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
