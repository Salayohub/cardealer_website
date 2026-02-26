'use client';

import { useState, ReactNode } from 'react';
import { CheckCircle, AlertCircle, Loader2, X } from 'lucide-react';
import { FormField } from '@/types/interfaces'; 
import { LuxuryFormProps } from '@/types/interfaces';

// ============================================
// TYPES
// ============================================





// ============================================
// LUXURY FORM COMPONENT
// ============================================

export default function LuxuryForm({
  title,
  description,
  fields,
  onSubmit,
  submitLabel = 'Submit Request',
  icon,
  accentColor = '#dc2626'
}: LuxuryFormProps) {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Validate single field
  const validateField = (field: FormField, value: any): string | null => {
    if (field.required && (!value || value.toString().trim() === '')) {
      return `${field.label} is required`;
    }

    if (field.validation) {
      return field.validation(value);
    }

    // Built-in validations
    if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Please enter a valid email address';
      }
    }

    if (field.type === 'tel' && value) {
      const phoneRegex = /^(\+?234|0)[0-9]{10}$/;
      if (!phoneRegex.test(value.replace(/[\s-]/g, ''))) {
        return 'Please enter a valid Nigerian phone number';
      }
    }

    return null;
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    fields.forEach(field => {
      const error = validateField(field, formData[field.name]);
      if (error) {
        newErrors[field.name] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle field change
  const handleChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle field blur
  const handleBlur = (field: FormField) => {
    setTouched(prev => ({ ...prev, [field.name]: true }));
    
    const error = validateField(field, formData[field.name]);
    if (error) {
      setErrors(prev => ({ ...prev, [field.name]: error }));
    }
  };

  // Handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all as touched
    const allTouched: Record<string, boolean> = {};
    fields.forEach(field => {
      allTouched[field.name] = true;
    });
    setTouched(allTouched);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await onSubmit(formData);
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({});
        setTouched({});
        setErrors({});
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset success/error
  const resetStatus = () => {
    setSubmitStatus('idle');
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Work+Sans:wght@400;500;600;700&display=swap');

        .lf-wrapper {
          font-family: 'Work Sans', sans-serif;
          min-height: 100vh;
          background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
          position: relative;
          overflow: hidden;
        }

        .lf-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, ${accentColor}15 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
        }

        .lf-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: clamp(40px, 6vw, 80px) clamp(20px, 4vw, 40px);
        }

        .lf-header {
          text-align: center;
          margin-bottom: clamp(40px, 6vw, 60px);
        }

        .lf-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%);
          border-radius: 20px;
          margin-bottom: 24px;
          box-shadow: 0 12px 40px ${accentColor}30;
          animation: lf-float 3s ease-in-out infinite;
        }

        @keyframes lf-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .lf-icon svg {
          width: 40px;
          height: 40px;
          color: #fff;
        }

        .lf-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          line-height: 1.2;
          color: #0a0a0a;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
        }

        .lf-description {
          font-size: 17px;
          line-height: 1.7;
          color: #737373;
          max-width: 600px;
          margin: 0 auto;
        }

        .lf-form {
          background: #fff;
          border-radius: 24px;
          padding: clamp(32px, 5vw, 48px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
          border: 1px solid #e5e5e5;
        }

        .lf-field-group {
          margin-bottom: 28px;
        }

        .lf-field-group:last-child {
          margin-bottom: 0;
        }

        .lf-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #0a0a0a;
          margin-bottom: 8px;
          letter-spacing: 0.01em;
        }

        .lf-required {
          color: ${accentColor};
          margin-left: 4px;
        }

        .lf-input-wrapper {
          position: relative;
        }

        .lf-input,
        .lf-textarea,
        .lf-select {
          width: 100%;
          padding: 14px 16px;
          font-size: 15px;
          font-family: 'Work Sans', sans-serif;
          color: #0a0a0a;
          background: #fafafa;
          border: 2px solid #e5e5e5;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          outline: none;
        }

        .lf-input:focus,
        .lf-textarea:focus,
        .lf-select:focus {
          background: #fff;
          border-color: ${accentColor};
          box-shadow: 0 0 0 4px ${accentColor}15;
        }

        .lf-input.lf-error,
        .lf-textarea.lf-error,
        .lf-select.lf-error {
          border-color: #ef4444;
          background: #fef2f2;
        }

        .lf-input-prefix,
        .lf-input-suffix {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: 15px;
          font-weight: 600;
          color: #737373;
          pointer-events: none;
        }

        .lf-input-prefix {
          left: 16px;
        }

        .lf-input-suffix {
          right: 16px;
        }

        .lf-input-with-prefix {
          padding-left: 40px;
        }

        .lf-input-with-suffix {
          padding-right: 80px;
        }

        .lf-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .lf-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23737373' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 20px;
          padding-right: 40px;
        }

        .lf-file-input {
          display: none;
        }

        .lf-file-label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 16px;
          background: #fafafa;
          border: 2px dashed #e5e5e5;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 15px;
          font-weight: 500;
          color: #737373;
        }

        .lf-file-label:hover {
          background: #fff;
          border-color: ${accentColor};
          color: ${accentColor};
        }

        .lf-file-name {
          font-size: 14px;
          color: #0a0a0a;
          margin-top: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .lf-file-remove {
          background: none;
          border: none;
          color: #ef4444;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lf-error-message {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 8px;
          font-size: 13px;
          color: #ef4444;
        }

        .lf-error-message svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
        }

        .lf-submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%);
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          padding: 16px 32px;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          margin-top: 32px;
          box-shadow: 0 8px 24px ${accentColor}30;
        }

        .lf-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px ${accentColor}40;
        }

        .lf-submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .lf-success-modal,
        .lf-error-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: lf-fadein 0.3s ease-out;
          padding: 20px;
        }

        @keyframes lf-fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .lf-modal-content {
          background: #fff;
          border-radius: 24px;
          padding: 48px;
          max-width: 500px;
          width: 100%;
          text-align: center;
          animation: lf-slideup 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        @keyframes lf-slideup {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .lf-modal-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin-bottom: 24px;
        }

        .lf-modal-icon.success {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          animation: lf-success-pulse 0.6s ease-out;
        }

        .lf-modal-icon.error {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
        }

        @keyframes lf-success-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .lf-modal-icon svg {
          width: 40px;
          height: 40px;
          color: #fff;
        }

        .lf-modal-title {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 700;
          color: #0a0a0a;
          margin: 0 0 12px 0;
        }

        .lf-modal-message {
          font-size: 16px;
          line-height: 1.7;
          color: #737373;
          margin: 0 0 32px 0;
        }

        .lf-modal-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #0a0a0a;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          padding: 14px 32px;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .lf-modal-btn:hover {
          background: #262626;
          transform: translateY(-2px);
        }

        @media (max-width: 640px) {
          .lf-modal-content {
            padding: 32px 24px;
          }
        }
      `}</style>

      <div className="lf-wrapper">
        <div className="lf-container">
          {/* Header */}
          <div className="lf-header">
            {icon && (
              <div className="lf-icon">
                {icon}
              </div>
            )}
            <h1 className="lf-title">{title}</h1>
            <p className="lf-description">{description}</p>
          </div>

          {/* Form */}
          <form className="lf-form" onSubmit={handleSubmit}>
            {fields.map(field => (
              <div key={field.name} className="lf-field-group">
                <label htmlFor={field.name} className="lf-label">
                  {field.label}
                  {field.required && <span className="lf-required">*</span>}
                </label>

                <div className="lf-input-wrapper">
                  {field.prefix && (
                    <span className="lf-input-prefix">{field.prefix}</span>
                  )}

                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      onBlur={() => handleBlur(field)}
                      placeholder={field.placeholder}
                      rows={field.rows || 5}
                      className={`lf-textarea ${touched[field.name] && errors[field.name] ? 'lf-error' : ''}`}
                    />
                  ) : field.type === 'select' ? (
                    <select
                      id={field.name}
                      name={field.name}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      onBlur={() => handleBlur(field)}
                      className={`lf-select ${touched[field.name] && errors[field.name] ? 'lf-error' : ''}`}
                    >
                      <option value="">Select {field.label}</option>
                      {field.options?.map(opt => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  ) : field.type === 'file' ? (
                    <>
                      <input
                        type="file"
                        id={field.name}
                        name={field.name}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          handleChange(field.name, file);
                        }}
                        onBlur={() => handleBlur(field)}
                        accept={field.accept}
                        className="lf-file-input"
                      />
                      <label htmlFor={field.name} className="lf-file-label">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                        </svg>
                        {formData[field.name] ? 'Change File' : 'Upload File'}
                      </label>
                      {formData[field.name] && (
                        <div className="lf-file-name">
                          <span>{formData[field.name].name}</span>
                          <button
                            type="button"
                            onClick={() => handleChange(field.name, null)}
                            className="lf-file-remove"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      )}
                    </>
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      onBlur={() => handleBlur(field)}
                      placeholder={field.placeholder}
                      className={`lf-input ${field.prefix ? 'lf-input-with-prefix' : ''} ${field.suffix ? 'lf-input-with-suffix' : ''} ${touched[field.name] && errors[field.name] ? 'lf-error' : ''}`}
                    />
                  )}

                  {field.suffix && (
                    <span className="lf-input-suffix">{field.suffix}</span>
                  )}
                </div>

                {touched[field.name] && errors[field.name] && (
                  <div className="lf-error-message">
                    <AlertCircle />
                    <span>{errors[field.name]}</span>
                  </div>
                )}
              </div>
            ))}

            <button
              type="submit"
              disabled={isSubmitting}
              className="lf-submit-btn"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>{submitLabel}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Success Modal */}
        {submitStatus === 'success' && (
          <div className="lf-success-modal" onClick={resetStatus}>
            <div className="lf-modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="lf-modal-icon success">
                <CheckCircle />
              </div>
              <h2 className="lf-modal-title">Request Submitted!</h2>
              <p className="lf-modal-message">
                Thank you for your interest. Our team will review your request and get back to you within 24 hours.
              </p>
              <button onClick={resetStatus} className="lf-modal-btn">
                Close
              </button>
            </div>
          </div>
        )}

        {/* Error Modal */}
        {submitStatus === 'error' && (
          <div className="lf-error-modal" onClick={resetStatus}>
            <div className="lf-modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="lf-modal-icon error">
                <AlertCircle />
              </div>
              <h2 className="lf-modal-title">Something Went Wrong</h2>
              <p className="lf-modal-message">
                We couldn't process your request. Please try again or contact us directly.
              </p>
              <button onClick={resetStatus} className="lf-modal-btn">
                Try Again
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}