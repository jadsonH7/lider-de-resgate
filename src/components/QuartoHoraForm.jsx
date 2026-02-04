import { quartoHoraSchema } from "../utils/validator";
import './styles/styleQuartoHora.css';
export default function QuartoHoraForm({ equipe, quartoHora, setQuartoHora, disabled }) {

  // Quem pode tirar Quarto de Hora (regra operacional)
  const militaresDisponiveis = [
    equipe["líderderesgate"],
    equipe["combatente1"],
    equipe["combatente2"],
    equipe["resgate1"],
    equipe["resgate2"],
    equipe["rádiooperador"]
  ].filter(Boolean);

  return (
    <section className="app-quarto-hora-form">
      <h2>Quarto de Hora</h2>
      {disabled && (
        <p style={{ color: "#C62828" }}>
          Preencha todos os nomes da equipe para liberar o Quarto de Hora.
        </p>
      )}
      <div className="app-quarto-hora-grid">
        {quartoHoraSchema.map((qh) => (
          <div key={qh.id} className="app-quarto-hora-item">
            <strong>
              {qh.id}º QH — {qh.periodos.join(" / ")}
            </strong>

            <div className="app-quarto-hora-select">
              <select
                value={quartoHora[qh.id] ?? ""}
                onChange={(e) =>
                  setQuartoHora({
                    ...quartoHora,
                    [qh.id]: e.target.value
                  })
                }
              >
                <option value="" className="app-option-disable">Selecione o militar</option>

                {militaresDisponiveis.map((nome) => (
                  <option key={nome} value={nome} className="app-option">
                    {nome}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
