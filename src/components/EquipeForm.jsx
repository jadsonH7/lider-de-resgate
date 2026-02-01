import './styles/styleEquipe.css';
export default function EquipeForm({ equipe, onChange }) {
  return (
    <section className="app-equipe-form">
      <h2>Equipe de Serviço</h2>
      <div className="app-equipe-grid">
        {equipe.map((membro, index) => (
          <div key={index} className="app-equipe-item">
            <label>{membro.posto}</label>
            <input
              type="text"
              value={membro.nome}
              onChange={(e) => onChange(index, e.target.value)}
              placeholder={`Nome do ${membro.posto}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}