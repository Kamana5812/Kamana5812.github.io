import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Button.css';

export function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'pill' | 'text'
  href,
  onClick,
  disabled = false,
  download = false,
  target,
  rel,
  icon: Icon,
  externalIcon = false,
  className = '',
  type = 'button',
  ...props
}) {
  const classNames = `btn btn--${variant} ${disabled ? 'btn--disabled' : ''} ${className}`.trim();

  const content = (
    <>
      {Icon && <Icon className="btn-icon" size={16} aria-hidden="true" />}
      <span className="btn-text">{children}</span>
      {externalIcon && <ArrowUpRight className="btn-external-icon" size={16} aria-hidden="true" />}
    </>
  );

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={classNames}
        download={download}
        target={target || (externalIcon ? '_blank' : undefined)}
        rel={rel || (externalIcon ? 'noopener noreferrer' : undefined)}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
