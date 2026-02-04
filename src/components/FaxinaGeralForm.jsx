import './styles/styleFaxinaGeral.css';
export default function FaxinaGeralForm({ faxinaGeral, onChange, equipe, disabled }) {
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

  const militaresDisponiveis = [
    equipe["líderderesgate"],
    equipe["combatente1"],
    equipe["combatente2"],
    equipe["resgate1"],
    equipe["resgate2"],
    equipe["rádiooperador"],
    equipe["motoristacci"],
    equipe["motoristacrs"]
  ].filter(Boolean);

  return (
    <section className="app-faxina-geral-form">
      <h2>Faxina Geral</h2>
      {disabled && (
        <p style={{ color: "#C62828" }}>
          Preencha todos os nomes da equipe para liberar a Faxina Geral.
        </p>
      )}

      <div className="app-faxina-geral-grid">
        {areas.map((area) => (
          <div key={area.key} className="app-faxina-item">
            <label>{area.label}</label>

            <select
              value={faxinaGeral[area.key] ?? ""}
              disabled={disabled}
              onChange={(e) => onChange(area.key, e.target.value)}
            >
              <option value="" className="app-option-disable">
                Selecione o militar
              </option>

              {militaresDisponiveis.map((nome) => (
                <option key={nome} value={nome} className="app-option">
                  {nome}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </section>
  );
}