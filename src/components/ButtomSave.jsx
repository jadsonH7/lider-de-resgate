import './styles/styleButtom.css';
export default function ButtomSave({ onClick, texto = 'Salvar Registro', disabled = false }) {
  return (
    <section className="app-buttom">
      <button 
        type="submit" 
        className="btn-saved"
        onClick={onClick}
        disabled={disabled}
      >
        {texto}
      </button>
    </section>
  );
}