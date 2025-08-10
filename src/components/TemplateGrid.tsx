export default function TemplateGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="template-grid">
      {children}
    </div>
  );
}

export function TemplateCard({ title, children }: { 
  title: string; 
  children: React.ReactNode; 
}) {
  return (
    <div className="template-card">
      <h3 className="template-card-title">{title}</h3>
      <div className="template-card-content">
        {children}
      </div>
    </div>
  );
}