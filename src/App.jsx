import { useState } from 'react';
// Importação dos componentes
import EquipeForm from './components/EquipeForm';
import QuartoHoraForm from './components/QuartoHoraForm';
import FaxinaCopaForm from './components/FaxinaCopaForm';
import FaxinaGeralForm from './components/FaxinaGeralForm';
import ChecklistOperacional from './components/ChecklistOperacional';
import OcorrenciaForm from './components/OcorrenciaForm';
import ButtomSave from './components/ButtomSave';
// Importação do styles
import './styles/app.css';
import './styles/appMobile.css';
import './styles/appDesktop.css';
export default function App() {
  // Estado centralizado no componente pai
  const [quartoHora, setQuartoHora] = useState({});
  const [formData, setFormData] = useState({
    equipe: [
      { nome: '', posto: 'Chefe de Equipe' },
      { nome: '', posto: 'Líder de Resgate' },
      { nome: '', posto: 'Combatente 1' },
      { nome: '', posto: 'Combatente 2' },
      { nome: '', posto: 'Resgate 1' },
      { nome: '', posto: 'Resgate 2' },
      { nome: '', posto: 'Rádio Operador' },
      { nome: '', posto: 'Motorista CCI' },
      { nome: '', posto: 'Motorista CRS' },
    ],

    faxinaCopa: {
      cafe: ['', ''],
      almoco: ['', ''],
      janta: ['', ''],
    },

    faxinaGeral: {
      alojamento: '',
      hallSalaChefe: '',
      auditorioSalaMotorista: '',
      copa1: '',
      copa2: '',
      banheiro1: '',
      banheiro2: '',
      banheiro3: '',
    },

    checklistOperacional: {
      equipeCompleta: false,
      faxinaAnterior: false,
      abastecimentoViaturas: false,
      conferenciaCCI: false,
      conferenciaCRS: false,
      testeSirene: false,
    },

    ocorrencias: '',
  });
  // Handlers para comunicação com os componentes filhos
  const handleEquipeChange = (index, value) => {
    const newEquipe = [...formData.equipe];
    newEquipe[index].nome = value;
    setFormData({ ...formData, equipe: newEquipe });
  };

  const handleFaxinaCopaChange = (refeicao, index, value) => {
    const newFaxinaCopa = { ...formData.faxinaCopa };
    newFaxinaCopa[refeicao][index] = value;
    setFormData({ ...formData, faxinaCopa: newFaxinaCopa });
  };

  const handleFaxinaGeralChange = (local, value) => {
    setFormData({
      ...formData,
      faxinaGeral: {
        ...formData.faxinaGeral,
        [local]: value,
      },
    });
  };

  const handleChecklistOperacionalChange = (field) => {
    setFormData({
      ...formData,
      checklistOperacional: {
        ...formData.checklistOperacional,
        [field]: !formData.checklistOperacional[field],
      },
    });
  };

  const handleOcorrenciasChange = (value) => {
    setFormData({ ...formData, ocorrencias: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      quartoHora,
    };

    console.log('Dados do registro:', payload);
    alert('Registro salvo com sucesso!');
  };


  return (
    <section className="app-container">
      <div className="app-header">
        <span className="app-logo">
          <img src="assets/logo/logo.png" alt="logo" />
        </span>
        <h1>Serviço do Dia {new Date().toLocaleDateString('pt-BR')}</h1>
      </div>

      <form onSubmit={handleSubmit} className="app-form-layout">
        {/* Componente: Equipe Fixa */}
        <EquipeForm
          equipe={formData.equipe}
          onChange={handleEquipeChange}
        />

        {/* Componente: Checklist Operacional */}
        <ChecklistOperacional
          checklist={formData.checklistOperacional}
          onChange={handleChecklistOperacionalChange}
        />

        {/* Componente: Quarto de Hora */}
        <QuartoHoraForm
          equipe={formData.equipe.reduce((acc, member) => {
            acc[member.posto.toLowerCase().replace(/ /g, '')] = member.nome;
            return acc;
          }, {})}
          quartoHora={quartoHora}
          setQuartoHora={setQuartoHora}
        />

        {/* Componente: Faxina da Copa */}
        <FaxinaCopaForm
          faxinaCopa={formData.faxinaCopa}
          onChange={handleFaxinaCopaChange}
        />

        {/* Componente: Faxina Geral */}
        <FaxinaGeralForm
          faxinaGeral={formData.faxinaGeral}
          onChange={handleFaxinaGeralChange}
        />

        {/* Componente: Ocorrências */}
        <OcorrenciaForm
          value={formData.ocorrencias}
          onChange={handleOcorrenciasChange}
        />

        {/* Componente: Botão Salvar */}
        <ButtomSave />
      </form>
      <footer className="app-footer">
        <p>Registro de Serviço Operacional - Bombeiro de Aeródromo Militar</p>
        <p>© 2026 - Célula de Contra Incêndio. Uso Interno do CCI.</p>
      </footer>
    </section>
  );
}