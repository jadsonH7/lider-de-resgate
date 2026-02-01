import './styles/styleFaxinaGeral.css';
export default function FaxinaGeralForm({ faxinaGeral, onChange }) {
  const areas = [
    { key: 'alojamento', label: 'Alojamento' },
    { key: 'hallSalaChefe', label: 'Hall + Sala do Chefe' },
    { key: 'auditorioSalaMotorista', label: 'Auditório + Sala do Motorista' },
    { key: 'copa1', label: 'Copa 1' },
    { key: 'copa2', label: 'Copa 2' },
    { key: 'banheiro1', label: 'Banheiro 1' },
    { key: 'banheiro2', label: 'Banheiro 2' },
    { key: 'banheiro3', label: 'Banheiro 3' },
  ];

  return (
    <section className="app-faxina-geral-form">
      <h2>Faxina Geral</h2>
      <div className="app-faxina-geral-grid">
        {areas.map((area) => (
          <div key={area.key} className="app-faxina-item">
            <label>{area.label}</label>
            <input
              type="text"
              value={faxinaGeral[area.key]}
              onChange={(e) => onChange(area.key, e.target.value)}
              placeholder="Nome do responsável"
            />
          </div>
        ))}
      </div>
    </section>
  );
}