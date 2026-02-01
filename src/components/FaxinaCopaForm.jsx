import './styles/styleFaxinaCopa.css';
export default function FaxinaCopaForm({ faxinaCopa, onChange }) {
  return (
    <section className="app-faxina-copa-form">
      <h2>Faxina da Copa</h2>
      <div className="app-faxina-copa-grid">
        <div className="app-refeicao-group">
          <h3>Café (2 pessoas)</h3>
          <input
            type="text"
            value={faxinaCopa.cafe[0]}
            onChange={(e) => onChange('cafe', 0, e.target.value)}
            placeholder="Pessoa 1"
          />
          <input
            type="text"
            value={faxinaCopa.cafe[1]}
            onChange={(e) => onChange('cafe', 1, e.target.value)}
            placeholder="Pessoa 2"
          />
        </div>
        
        <div className="refeicao-group">
          <h3>Almoço (2 pessoas)</h3>
          <input
            type="text"
            value={faxinaCopa.almoco[0]}
            onChange={(e) => onChange('almoco', 0, e.target.value)}
            placeholder="Pessoa 1"
          />
          <input
            type="text"
            value={faxinaCopa.almoco[1]}
            onChange={(e) => onChange('almoco', 1, e.target.value)}
            placeholder="Pessoa 2"
          />
        </div>
        
        <div className="refeicao-group">
          <h3>Janta (2 pessoas)</h3>
          <input
            type="text"
            value={faxinaCopa.janta[0]}
            onChange={(e) => onChange('janta', 0, e.target.value)}
            placeholder="Pessoa 1"
          />
          <input
            type="text"
            value={faxinaCopa.janta[1]}
            onChange={(e) => onChange('janta', 1, e.target.value)}
            placeholder="Pessoa 2"
          />
        </div>
      </div>
    </section>
  );
}