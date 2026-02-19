/**
 * Button — AI-generated component
 *
 * Source of truth (Figma):
 * https://www.figma.com/design/Z4MtKOfkNEzhMYJzN1q3kR/Scalar_Design_System-Components?node-id=59-21923&m=dev
 *
 * Rules: public/AI-Rules.md
 * Tokens: design-tokens.scalar.ai.json (semantic tokens only; no hardcoded values)
 */

import React from 'react';

/** Token-driven styles. All values are CSS variables from design-tokens.scalar.ai.json. */
type SemanticVar =
  | 'background-brand'
  | 'background-hover'
  | 'background-pressed'
  | 'background-disable'
  | 'background-positive'
  | 'background-positive-hover'
  | 'background-positive-pressed'
  | 'background-negative'
  | 'background-negative-hover'
  | 'background-negative-pressed'
  | 'background-warning'
  | 'background-warning-hover'
  | 'background-warning-pressed'
  | 'text-button-label'
  | 'text-button-disable-label'
  | 'icon-brand'
  | 'icon-hover'
  | 'icon-pressed'
  | 'icon-disable'
  | 'icon-positive'
  | 'icon-positive-hover'
  | 'icon-positive-pressed'
  | 'icon-negative'
  | 'icon-negative-hover'
  | 'icon-negative-pressed'
  | 'icon-warning'
  | 'icon-warning-hover'
  | 'icon-warning-pressed';

function varOf(name: SemanticVar): string {
  return `var(--${name})`;
}

/** Spacing tokens: xs, s, m, l, xl → var(--4) … var(--32) */
const spacingVar = (t: 'xs' | 's' | 'm' | 'l' | 'xl') => `var(--${t === 'xs' ? '4' : t === 's' ? '8' : t === 'm' ? '16' : t === 'l' ? '24' : '32'})`;

/** Corner radius token (e.g. rounded-m). */
const radiusVar = (t: 'xs' | 's' | 'm' | 'l' | 'xl') => `var(--${t === 'xs' ? '4' : t === 's' ? '8' : t === 'm' ? '16' : t === 'l' ? '24' : '32'})`;

/** Typography: label-s, label-m, label-l from tokens.primitiveType (size-*, line-height-*). */
const labelSizeToVars = (size: 's' | 'm' | 'l') =>
  size === 's'
    ? { fontSize: 'var(--12)', lineHeight: 'var(--16)' }
    : size === 'm'
      ? { fontSize: 'var(--14)', lineHeight: 'var(--20)' }
      : { fontSize: 'var(--16)', lineHeight: 'var(--24)' };

export type ButtonVariant = 'brand' | 'positive' | 'negative' | 'warning';
export type ButtonSize = 's' | 'm' | 'l';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  /** Material Symbol name (AI-Rules: use Material Symbols only). */
  iconLeft?: string;
  iconRight?: string;
}

/**
 * Button component. All styling comes from design-tokens.scalar.ai.json via CSS variables.
 * Theme: :root (light) and [data-theme="dark"] must define semantic variables.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'brand',
  size = 'm',
  disabled = false,
  iconLeft,
  iconRight,
  style,
  ...props
}) => {
  const semantic = (): {
    bg: SemanticVar;
    bgHover: SemanticVar;
    bgPressed: SemanticVar;
    text: SemanticVar;
    textDisabled: SemanticVar;
    icon: SemanticVar;
    iconHover: SemanticVar;
    iconPressed: SemanticVar;
    iconDisabled: SemanticVar;
  } => {
    if (disabled) {
      return {
        bg: 'background-disable',
        bgHover: 'background-disable',
        bgPressed: 'background-disable',
        text: 'text-button-disable-label',
        textDisabled: 'text-button-disable-label',
        icon: 'icon-disable',
        iconHover: 'icon-disable',
        iconPressed: 'icon-disable',
        iconDisabled: 'icon-disable',
      };
    }
    switch (variant) {
      case 'positive':
        return {
          bg: 'background-positive',
          bgHover: 'background-positive-hover',
          bgPressed: 'background-positive-pressed',
          text: 'text-button-label',
          textDisabled: 'text-button-disable-label',
          icon: 'icon-positive',
          iconHover: 'icon-positive-hover',
          iconPressed: 'icon-positive-pressed',
          iconDisabled: 'icon-disable',
        };
      case 'negative':
        return {
          bg: 'background-negative',
          bgHover: 'background-negative-hover',
          bgPressed: 'background-negative-pressed',
          text: 'text-button-label',
          textDisabled: 'text-button-disable-label',
          icon: 'icon-negative',
          iconHover: 'icon-negative-hover',
          iconPressed: 'icon-negative-pressed',
          iconDisabled: 'icon-disable',
        };
      case 'warning':
        return {
          bg: 'background-warning',
          bgHover: 'background-warning-hover',
          bgPressed: 'background-warning-pressed',
          text: 'text-button-label',
          textDisabled: 'text-button-disable-label',
          icon: 'icon-warning',
          iconHover: 'icon-warning-hover',
          iconPressed: 'icon-warning-pressed',
          iconDisabled: 'icon-disable',
        };
      default:
        return {
          bg: 'background-brand',
          bgHover: 'background-hover',
          bgPressed: 'background-pressed',
          text: 'text-button-label',
          textDisabled: 'text-button-disable-label',
          icon: 'icon-brand',
          iconHover: 'icon-hover',
          iconPressed: 'icon-pressed',
          iconDisabled: 'icon-disable',
        };
    }
  };

  const s = semantic();
  const typo = labelSizeToVars(size);
  const paddingY = size === 's' ? 'xs' : 's';
  const paddingX = size === 's' ? 's' : size === 'm' ? 'm' : 'l';

  const baseStyle: React.CSSProperties = {
    fontFamily: 'var(--family-inter)',
    fontSize: typo.fontSize,
    lineHeight: typo.lineHeight,
    fontWeight: 'var(--weight-semi-bold)',
    letterSpacing: 'var(--letter-spacing-none)',
    padding: `${spacingVar(paddingY as 'xs' | 's' | 'm' | 'l' | 'xl')} ${spacingVar(paddingX as 'xs' | 's' | 'm' | 'l' | 'xl')}`,
    borderRadius: radiusVar('m'),
    border: 'none',
    backgroundColor: varOf(s.bg),
    color: disabled ? varOf(s.textDisabled) : varOf(s.text),
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacingVar('s'),
    outline: 'none',
    transition: 'background-color 0.2s ease, color 0.2s ease',
    minHeight: size === 's' ? 'var(--24)' : size === 'm' ? 'var(--40)' : 'var(--48)',
    ...style,
  };

  const className = `ai-button ai-button--${variant} ai-button--${size} ${disabled ? 'ai-button--disabled' : ''}`;

  return (
    <>
      <style>{`
        .ai-button:hover:not(:disabled) { background-color: ${varOf(s.bgHover)} !important; color: ${varOf(s.text)} !important; }
        .ai-button:active:not(:disabled) { background-color: ${varOf(s.bgPressed)} !important; color: ${varOf(s.text)} !important; }
        .ai-button .material-symbols-outlined { color: inherit; font-size: inherit; }
      `}</style>
      <button
        type="button"
        className={className}
        disabled={disabled}
        style={baseStyle}
        aria-disabled={disabled}
        {...props}
      >
        {iconLeft && (
          <span className="material-symbols-outlined" aria-hidden style={{ fontSize: '1em' }}>
            {iconLeft}
          </span>
        )}
        {children}
        {iconRight && (
          <span className="material-symbols-outlined" aria-hidden style={{ fontSize: '1em' }}>
            {iconRight}
          </span>
        )}
      </button>
    </>
  );
};

export default Button;
