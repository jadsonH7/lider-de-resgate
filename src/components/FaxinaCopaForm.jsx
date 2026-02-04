import './styles/styleFaxinaCopa.css';
export default function FaxinaCopaForm({ faxinaCopa, onChange, disabled, equipe }) {
   const refeicoes = [
    { key: 'cafe', label: 'Café' },
    { key: 'almoco', label: 'Almoço' },
    { key: 'janta', label: 'Janta' }
  ];

  const militaresDisponiveis = [
    equipe["líderderesgate"],
    equipe["combatente1"],
    equipe["combatente2"],
    equipe["resgate1"],
    equipe["resgate2"],
    equipe["rádiooperador"]
  ].filter(Boolean);

  return (
    <section className="app-faxina-copa-form">
      <h2>Faxina da Copa</h2>
       {disabled && (
        <p style={{ color: "#C62828" }}>
          Preencha todos os nomes da equipe para liberar a Faxina da Copa.
        </p>
      )}

      {refeicoes.map((refeicao) => (
        <div key={refeicao.key} className="app-faxina-copa-bloco">
          <h3>{refeicao.label}</h3>

          {[0, 1].map((index) => (
            <div key={index} className="app-faxina-copa-item">
              <select
                value={faxinaCopa[refeicao.key]?.[index] ?? ""}
                disabled={disabled}
                onChange={(e) =>
                  onChange(refeicao.key, index, e.target.value)
                }
              >
                <option value="">
                  Selecione o militar
                </option>

                {militaresDisponiveis.map((nome) => (
                  <option key={nome} value={nome}>
                    {nome}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}