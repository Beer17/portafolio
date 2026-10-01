import React from 'react';
import { X, ExternalLink, ShieldCheck, Cpu, Database, Server, Smartphone, Globe } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(6, 9, 17, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: '840px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'rgba(15, 23, 42, 0.95)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          padding: '0',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Banner Image */}
        <div
          style={{
            height: '260px',
            width: '100%',
            backgroundImage: `url(${project.image})`,
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
              background: 'linear-gradient(to bottom, rgba(6, 9, 17, 0.2), rgba(15, 23, 42, 0.98))',
            }}
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(6, 9, 17, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
            }}
          >
            <X size={20} />
          </button>

          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '24px',
              right: '24px',
            }}
          >
            <span
              style={{
                fontSize: '0.8rem',
                fontFamily: 'var(--font-code)',
                fontWeight: '700',
                color: '#10b981',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                padding: '4px 10px',
                borderRadius: '20px',
                marginBottom: '8px',
                display: 'inline-block',
              }}
            >
              {project.category}
            </span>
            <h2 style={{ fontSize: '2rem', color: '#ffffff' }}>{project.title}</h2>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '32px' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '28px' }}>
            {project.longDescription}
          </p>

          {/* Tech Architecture Highlights */}
          <div style={{ marginBottom: '28px' }}>
            <h4
              style={{
                fontSize: '1.1rem',
                color: '#ffffff',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Cpu size={18} color="#10b981" /> Desglose de Arquitectura Técnica
            </h4>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '16px',
              }}
            >
              {project.specs.map((spec, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    padding: '16px',
                    borderRadius: '12px',
                  }}
                >
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-code)' }}>
                    {spec.label}
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#ffffff', marginTop: '4px' }}>
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stack Used */}
          <div style={{ marginBottom: '32px' }}>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '12px' }}>Tech Stack &amp; Dependencias</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-code)',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    color: '#34d399',
                    padding: '6px 12px',
                    borderRadius: '8px',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end' }}>
            <button
              onClick={onClose}
              className="btn-secondary"
              style={{ padding: '10px 20px', fontSize: '0.9rem' }}
            >
              Cerrar
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '0.9rem' }}
            >
              Consultar Proyecto Similares
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
