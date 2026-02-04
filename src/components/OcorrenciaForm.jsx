import './styles/styleOcorrencia.css';
export default function OcorrenciaForm({ value, onChange }) {
  return (
    <section className="app-ocorrencia-form">
      <h2>Ocorrências</h2>
      <textarea
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Descreva as ocorrências do serviço..."
        rows="6"
      />
    </section>
  );
}