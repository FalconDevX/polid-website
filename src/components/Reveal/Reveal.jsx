export default function Reveal({ children, className = '', as: Tag = 'div', style }) {
  return (
    <Tag className={className} style={style}>
      {children}
    </Tag>
  );
}
