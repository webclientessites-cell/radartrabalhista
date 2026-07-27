import React, { useState } from 'react';
import { Briefcase, Clock, FileWarning, PiggyBank, Flame, ShieldAlert, X, ArrowRight } from 'lucide-react';
import './CuriosityGrid.css';

const curiosityItems = [
  {
    icon: <Briefcase size={24} />,
    title: 'Demissão',
    phrase: 'Foi demitido? A primeira proposta da empresa raramente é a correta. Veja o que você pode estar perdendo.',
    bgImage: '/images/demissao_bg.png',
    details: 'Quando você é demitido, a empresa tem pressa em fazer você assinar o termo de rescisão. O que eles não contam é que descontos indevidos, cálculos baseados em salários defasados e a omissão de verbas proporcionais são práticas comuns.\n\nMuitos trabalhadores perdem milhares de reais por assinarem documentos sem a revisão de um especialista. Você tem certeza absoluta de que a sua rescisão está 100% correta?'
  },
  {
    icon: <Clock size={24} />,
    title: 'Horas Extras',
    phrase: 'O seu almoço reduzido e aquelas horas a mais no fim do dia valem dinheiro. Você recebeu por tudo isso?',
    bgImage: '/images/horas_extras_bg.png',
    details: 'Chegar mais cedo, sair mais tarde, responder mensagens de trabalho pelo WhatsApp fora do expediente ou ter apenas 20 minutos de almoço. Tudo isso é tempo da sua vida dedicado à empresa, e a lei exige que seja pago com acréscimo.\n\nMuitas empresas mascaram isso com "bancos de horas" irregulares para evitar o pagamento. Não trabalhe de graça. Descubra o quanto você realmente deveria ter recebido.'
  },
  {
    icon: <PiggyBank size={24} />,
    title: 'FGTS',
    phrase: 'Muitas empresas usam o dinheiro do seu FGTS sem você perceber. Saiba como descobrir fraudes em poucos cliques.',
    bgImage: '/images/fgts_bg.png',
    details: 'O seu FGTS é o seu patrimônio, mas é extremamente comum que as empresas "esqueçam" de depositar meses a fio, ou depositem valores menores. O pior: a maioria só descobre o rombo na hora em que mais precisa do dinheiro.\n\nSe a empresa não depositou seu FGTS corretamente, você pode, inclusive, pedir a "rescisão indireta" (dar uma justa causa na empresa) e sair com todos os direitos.'
  },
  {
    icon: <Flame size={24} />,
    title: 'Insalubridade',
    phrase: 'Trabalhar no limite tem um preço. Descubra se o seu ambiente de trabalho te dá direito a uma compensação extra.',
    bgImage: '/images/insalubridade_bg.png',
    details: 'Lidar com produtos químicos, ruído extremo, frio, calor excessivo ou agentes biológicos destrói a sua saúde aos poucos. A legislação garante um adicional mensal no seu salário para compensar esses riscos.\n\nO detalhe é que esse adicional reflete e aumenta o valor das suas férias, 13º e FGTS. Muitas empresas se recusam a pagar. A sua saúde tem preço?'
  },
  {
    icon: <FileWarning size={24} />,
    title: 'Sem Registro',
    phrase: 'Trabalhou sem carteira assinada? A lei te protege mesmo assim. Descubra como cobrar seus direitos.',
    bgImage: '/images/sem_registro_bg.png',
    details: 'Estar "sem carteira assinada", atuar como "PJ" ou "Freelancer" fixo não elimina seus direitos se você cumpre horários, recebe ordens e tem salário mensal. Perante a lei, você é um funcionário.\n\nIsso significa que você tem direito a receber FGTS, Férias, 13º e horas extras de todo o período trabalhado. Não aceite abrir mão de anos de trabalho por imposição da empresa.'
  },
  {
    icon: <ShieldAlert size={24} />,
    title: 'Acidente de Trabalho',
    phrase: 'Se machucou na empresa ou desenvolveu doença ocupacional? A empresa pode ter que indenizá-lo.',
    bgImage: '/images/acidente_bg.png',
    details: 'Um acidente dentro da empresa ou uma doença causada pelo trabalho (como lesões por esforço repetitivo ou síndrome de Burnout) não é apenas "azar". A empresa é legalmente responsável por garantir a sua segurança e saúde.\n\nVocê pode ter direito à estabilidade no emprego (não pode ser demitido), custeio de tratamentos e pesadas indenizações por danos morais e estéticos.'
  }
];

const CuriosityGrid = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  const scrollToAvaliacao = () => {
    closeModal();
    document.getElementById('avaliacao').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="direitos" className="curiosity-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">O que eles <span className="text-gradient">escondem</span> de você?</h2>
          <p className="section-subtitle">
            Selecione a situação que mais se parece com a sua e entenda como os seus direitos podem estar sendo violados neste momento.
          </p>
        </div>

        <div className="curiosity-grid">
          {curiosityItems.map((item, index) => (
            <div key={index} className="curiosity-card glass-panel" style={{ backgroundImage: `linear-gradient(to bottom, rgba(11, 17, 32, 0.4), rgba(11, 17, 32, 0.85)), url(${item.bgImage})` }}>
              <div className="card-icon">{item.icon}</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-phrase">{item.phrase}</p>
              <button className="card-btn" onClick={() => openModal(item)}>
                Saiba Mais
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Detalhes */}
      {selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content glass-panel animate-fade-in" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            
            <div className="modal-header">
              <div className="modal-icon">{selectedItem.icon}</div>
              <h3 className="modal-title">{selectedItem.title}</h3>
            </div>
            
            <div className="modal-body">
              {selectedItem.details.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            
            <div className="modal-footer">
              <button className="btn-primary btn-pulse w-full" onClick={scrollToAvaliacao}>
                Analisar Meu Caso Agora
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CuriosityGrid;
