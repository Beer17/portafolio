import React, { useState } from 'react';
import { Mail, Send, Globe, MapPin, CheckCircle2, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web & App Full-Stack',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger Confetti effect
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10b981', '#38bdf8', '#fbbf24'],
      });
    }, 1000);
  };

  return (
    <footer
      id="contact"
      style={{
        position: 'relative',
        background: 'var(--bg-surface-2)',
        paddingTop: '120px',
        paddingBottom: '40px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="section-container" style={{ paddingBottom: '60px' }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} /> 06. Contacto &amp; Conversión
          </div>
          <h2 className="section-title">
            ¿Listo para construir un <span className="text-gradient-emerald">ecosistema digital</span>?
          </h2>
          <p className="section-description">
            Ya sea que necesites captar clientes para tu negocio con Creat mark, integrar automatización con IA o reclutar liderazgo técnico de primer nivel.
          </p>
        </div>

        {/* Contact Form Card */}
        <div
          className="glass-card"
          style={{
            maxWidth: '680px',
            margin: '0 auto 80px auto',
            padding: '40px',
            background: 'rgba(11, 17, 32, 0.9)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
          }}
        >
          {submitted ? (
            <div
              style={{
                textAlign: 'center',
                padding: '40px 20px',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.2)',
                  border: '2px solid #10b981',
                  color: '#10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                }}
              >
                <CheckCircle2 size={36} />
              </div>
              <h3 style={{ fontSize: '1.75rem', color: '#ffffff', marginBottom: '12px' }}>
                ¡Mensaje Recibido!
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '24px' }}>
                Gracias por comunicarte, <strong style={{ color: '#ffffff' }}>{formData.name}</strong>. Miguel Casas Beer responderá tu consulta a la brevedad.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', projectType: 'Web & App Full-Stack', message: '' });
                }}
                className="btn-secondary"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Name Input */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.88rem',
                    fontWeight: '600',
                    color: '#e2e8f0',
                    marginBottom: '8px',
                  }}
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre o empresa"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '10px',
                    color: '#ffffff',
                    fontSize: '0.98rem',
                    fontFamily: 'var(--font-main)',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#10b981')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.88rem',
                    fontWeight: '600',
                    color: '#e2e8f0',
                    marginBottom: '8px',
                  }}
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  required
                  placeholder="ejemplo@empresa.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '10px',
                    color: '#ffffff',
                    fontSize: '0.98rem',
                    fontFamily: 'var(--font-main)',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#10b981')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                />
              </div>

              {/* Project Type Select Dropdown */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.88rem',
                    fontWeight: '600',
                    color: '#e2e8f0',
                    marginBottom: '8px',
                  }}
                >
                  Tipo de Proyecto / Consulta
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    background: 'rgba(15, 23, 42, 0.95)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '10px',
                    color: '#ffffff',
                    fontSize: '0.98rem',
                    fontFamily: 'var(--font-main)',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option value="Web & App Full-Stack">Desarrollo Web &amp; Móvil Full-Stack</option>
                  <option value="Arquitectura & Automatización IA">Arquitectura &amp; Automatización (Make / IA)</option>
                  <option value="Lanzamientos Digitales (Creat mark)">Lanzamiento Digital (Creat mark Engine)</option>
                  <option value="Reclutamiento Técnico / Leadership">Reclutamiento Técnico / Technical Lead</option>
                  <option value="Otro">Otro Asunto</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.88rem',
                    fontWeight: '600',
                    color: '#e2e8f0',
                    marginBottom: '8px',
                  }}
                >
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe los objetivos de tu proyecto o consulta..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '10px',
                    color: '#ffffff',
                    fontSize: '0.98rem',
                    fontFamily: 'var(--font-main)',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#10b981')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '16px',
                  fontSize: '1rem',
                  marginTop: '8px',
                }}
              >
                {loading ? (
                  <span>Enviando mensaje...</span>
                ) : (
                  <>
                    Enviar Propuesta <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Social Links & Creat mark Branding */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            textAlign: 'center',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          {/* Social Buttons Row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill"
              style={{ color: '#ffffff', gap: '8px' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill"
              style={{ color: '#38bdf8', gap: '8px' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>

            <a
              href="mailto:miguelcasasbeer@gmail.com"
              className="glass-pill"
              style={{ color: '#10b981', gap: '8px' }}
            >
              <Mail size={16} /> Correo Directo
            </a>

            <a
              href="https://creatmark.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill"
              style={{ color: '#fbbf24', gap: '8px' }}
            >
              <Globe size={16} /> Web de Creat mark <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Location & Copyright Line */}
          <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            <p style={{ marginBottom: '6px' }}>
              © {new Date().getFullYear()} <strong style={{ color: '#ffffff' }}>Miguel Casas Beer</strong>. Todos los derechos reservados.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-code)',
                fontSize: '0.8rem',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              <MapPin size={14} /> Operando globalmente desde Cancún, Q.R.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
