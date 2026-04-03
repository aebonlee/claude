const ICONS = {
  tip: 'fa-lightbulb',
  warning: 'fa-triangle-exclamation',
  important: 'fa-circle-info',
  danger: 'fa-circle-xmark',
};

const LABELS = {
  tip: 'Tip',
  warning: 'Warning',
  important: 'Important',
  danger: 'Danger',
};

export default function TipBox({ type = 'tip', title, children }) {
  return (
    <div className={`tip-box ${type}`}>
      <span className="tip-box-icon">
        <i className={`fa-solid ${ICONS[type]}`} />
      </span>
      <div className="tip-box-content">
        {title && <strong>{title}</strong>}
        {!title && <strong>{LABELS[type]}</strong>}
        <div>{children}</div>
      </div>
    </div>
  );
}
