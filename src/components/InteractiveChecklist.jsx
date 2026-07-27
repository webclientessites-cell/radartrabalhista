import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, MessageCircle, Clock, ShieldCheck, Lock, FileText } from 'lucide-react';
import './InteractiveChecklist.css';

const questions = [
  {
    id: 1,
    type: 'radio',
    text: "Qual é/foi a sua situação com a empresa?",
    options: [
      "Fui demitido sem justa causa",
      "Pedi demissão",
      "Ainda trabalho na empresa",
      "Fui mandado embora por justa causa (e não concordei)"
    ]
  },
  {
    id: 2,
    type: 'radio',
    text: "Você costumava fazer horas extras?",
    options: [
      "Sim, frequentemente",
      "Às vezes",
      "Nunca"
    ]
  },
  {
    id: 3,
    type: 'time',
    text: "Como era o seu horário de trabalho na prática?",
    fields: [
      { name: 'entrada', label: 'Horário de Entrada' },
      { name: 'saida', label: 'Horário de Saída' },
      { name: 'intervalo', label: 'Tempo de Intervalo (Almoço)' }
    ]
  },
  {
    id: 4,
    type: 'radio',
    text: "Você recebia alguma parte do seu salário 'por fora' (que não estava no holerite/contracheque)?",
    options: [
      "Sim, recebia pagamentos por fora",
      "Não, era tudo registrado no contracheque",
      "Trabalhava sem carteira assinada"
    ]
  },
  {
    id: 5,
    type: 'radio',
    text: "Como você descreveria o ambiente em que trabalhava?",
    options: [
      "Ambiente normal (escritório, loja, etc)",
      "Ambiente de risco (calor intenso, barulho forte, frio)",
      "Contato com produtos químicos, limpeza ou lixo",
      "Sofria muita pressão, xingamentos ou humilhação"
    ]
  }
];

const InteractiveChecklist = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [lgpdAccepted, setLgpdAccepted] = useState(false);
  
  // State for time inputs
  const [timeData, setTimeData] = useState({ entrada: '', saida: '', intervalo: '' });

  const handleRadioAnswer = (answer) => {
    setAnswers({ ...answers, [currentStep]: answer });
    goToNextStep();
  };

  const handleTimeSubmit = () => {
    if (!timeData.entrada || !timeData.saida) return;
    setAnswers({ ...answers, [currentStep]: timeData });
    goToNextStep();
  };

  const goToNextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResult(true);
    }, 2500);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setTimeData({ entrada: '', saida: '', intervalo: '' });
    setShowResult(false);
    setLgpdAccepted(false);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent("Olá, fiz a análise no Radar Trabalhista. Meu resultado indicou que posso ter direitos a verificar. Gostaria de uma avaliação do meu caso.");
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
  };

  const progressPercentage = ((currentStep) / questions.length) * 100;

  // Lógica de diagnóstico inteligente
  const calculateWorkedHours = () => {
    const timeData = answers[2];
    if (!timeData || !timeData.entrada || !timeData.saida) return 0;
    
    const [eH, eM] = timeData.entrada.split(':').map(Number);
    const [sH, sM] = timeData.saida.split(':').map(Number);
    let totalMinutes = (sH * 60 + sM) - (eH * 60 + eM);
    if (totalMinutes < 0) totalMinutes += 24 * 60; // virou a noite
    
    let intervaloMinutes = 60;
    if (timeData.intervalo === 'Menos de 30 min') intervaloMinutes = 20;
    else if (timeData.intervalo === '30 a 50 min') intervaloMinutes = 40;
    else if (timeData.intervalo === 'Não tinha') intervaloMinutes = 0;
    else if (timeData.intervalo === 'Mais de 1 hora') intervaloMinutes = 90;

    return (totalMinutes - intervaloMinutes) / 60;
  };

  const workedHours = calculateWorkedHours();
  const explicitOvertime = answers[1] === "Sim, frequentemente" || answers[1] === "Às vezes";
  const hiddenOvertime = workedHours > 8.5; // Mais de 8.5 horas por dia indica hora extra oculta
  const intervaloViolated = answers[2]?.intervalo === 'Menos de 30 min' || answers[2]?.intervalo === '30 a 50 min' || answers[2]?.intervalo === 'Não tinha';
  const informalPay = answers[3] === "Sim, recebia pagamentos por fora" || answers[3] === "Trabalhava sem carteira assinada";
  const riskEnvironment = answers[4] === "Ambiente de risco (calor intenso, barulho forte, frio)" || answers[4] === "Contato com produtos químicos, limpeza ou lixo";
  const harassment = answers[4] === "Sofria muita pressão, xingamentos ou humilhação";
  const isTerminated = answers[0] !== "Ainda trabalho na empresa";

  const flagsCount = (explicitOvertime ? 1 : 0) + (hiddenOvertime ? 1 : 0) + (intervaloViolated ? 1 : 0) + (informalPay ? 1 : 0) + (riskEnvironment ? 1 : 0) + (harassment ? 1 : 0);
  
  let profileLabel = "Informações Regulares";
  if (flagsCount > 0) profileLabel = "Identificados pontos que merecem avaliação";

  return (
    <section id="avaliacao" className="checklist-section">
      <div className="container">
        
        {/* Confiança Badge - Header */}
        <div className="trust-badges-header">
          <span><Lock size={14} /> Sistema Seguro</span>
          <span><ShieldCheck size={14} /> 100% Sigiloso</span>
        </div>

        <div className="checklist-wrapper glass-panel">
          
          {!showResult && !isAnalyzing && (
            <div className="quiz-container animate-fade-in">
              <div className="quiz-header">
                <h2 className="quiz-title">Descubra se você pode ter valores esquecidos</h2>
                
                <div className="progress-bar-container">
                  <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
                </div>
                <span className="progress-text">Pergunta {currentStep + 1} de {questions.length}</span>
              </div>

              <div className="quiz-body">
                <h3 className="question-text">{questions[currentStep].text}</h3>
                
                {questions[currentStep].type === 'radio' && (
                  <div className="options-container">
                    {questions[currentStep].options.map((opt, idx) => (
                      <button 
                        key={idx} 
                        className="btn-option" 
                        onClick={() => handleRadioAnswer(opt)}
                      >
                        <div className="radio-circle"></div>
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                {questions[currentStep].type === 'time' && (
                  <div className="time-inputs-container">
                    <div className="input-group">
                      <label>Qual era o horário de entrada?</label>
                      <input 
                        type="time" 
                        className="time-input"
                        value={timeData.entrada}
                        onChange={(e) => setTimeData({...timeData, entrada: e.target.value})}
                      />
                    </div>
                    <div className="input-group">
                      <label>Qual era o horário de saída?</label>
                      <input 
                        type="time" 
                        className="time-input"
                        value={timeData.saida}
                        onChange={(e) => setTimeData({...timeData, saida: e.target.value})}
                      />
                    </div>
                    <div className="input-group">
                      <label>Quanto tempo de intervalo para almoço?</label>
                      <select 
                        className="time-select"
                        value={timeData.intervalo}
                        onChange={(e) => setTimeData({...timeData, intervalo: e.target.value})}
                      >
                        <option value="">Selecione...</option>
                        <option value="Menos de 30 min">Menos de 30 minutos</option>
                        <option value="30 a 50 min">30 a 50 minutos</option>
                        <option value="1 hora">1 hora</option>
                        <option value="Mais de 1 hora">Mais de 1 hora</option>
                        <option value="Não tinha">Não tinha intervalo</option>
                      </select>
                    </div>
                    
                    <button 
                      className="btn-primary w-full mt-4" 
                      onClick={handleTimeSubmit}
                      disabled={!timeData.entrada || !timeData.saida || !timeData.intervalo}
                    >
                      Avançar <ChevronRight size={20} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {isAnalyzing && (
            <div className="analyzing-container animate-fade-in">
              <div className="loader-tech"></div>
              <h3 className="analyzing-text">Gerando Diagnóstico...</h3>
              <p>Cruzando sua jornada de {workedHours.toFixed(1).replace('.0', '')} horas com a base da CLT...</p>
              <div className="scanning-bar"></div>
            </div>
          )}

          {showResult && !isAnalyzing && (
            <div className="result-container animate-fade-in">
              
              <div className="diagnostic-header">
                <FileText size={48} className={flagsCount > 0 ? "text-gradient" : "text-secondary"} />
                <h2 className="result-title">Análise Concluída</h2>
              </div>
              
              <div className="diagnostic-panel">
                <div className="profile-found" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '16px', marginBottom: '16px' }}>
                  <span className="profile-label">Resultado da Triagem:</span>
                  <h3 className="profile-value" style={{ color: flagsCount === 0 ? '#10b981' : 'var(--text-primary)', fontSize: '1.2rem' }}>
                    {profileLabel}
                  </h3>
                </div>

                <div className="findings-box">
                  {flagsCount > 0 ? (
                    <>
                      <h4>Baseado nas suas respostas, encontramos os seguintes alertas:</h4>
                      <ul className="findings-list">
                        {isTerminated && <li><CheckCircle2 size={18} className="text-gold" /> <strong>Rescisão:</strong> Possível revisão nos cálculos da sua saída.</li>}
                        
                        {!explicitOvertime && hiddenOvertime && (
                          <li><CheckCircle2 size={18} className="text-gold" /> <strong>Horas Ocultas:</strong> Você informou que não fazia horas extras, mas sua jornada era de {workedHours.toFixed(1)} horas diárias. A lei exige pagamento do que passar de 8h/dia.</li>
                        )}
                        
                        {explicitOvertime && (
                          <li><CheckCircle2 size={18} className="text-gold" /> <strong>Horas Extras:</strong> Necessidade de auditar os pagamentos e verificar fraudes de "banco de horas".</li>
                        )}
                        
                        {intervaloViolated && (
                          <li><CheckCircle2 size={18} className="text-gold" /> <strong>Intervalo Suprimido:</strong> O tempo de almoço menor que 1 hora deve ser indenizado com acréscimo de 50%.</li>
                        )}

                        {informalPay && <li><CheckCircle2 size={18} className="text-gold" /> <strong>Pagamento por fora:</strong> Verbas proporcionais (Férias, 13º, FGTS) não foram recolhidas sobre o valor pago sem registro.</li>}
                        
                        {riskEnvironment && <li><CheckCircle2 size={18} className="text-gold" /> <strong>Insalubridade/Periculosidade:</strong> Reflexos de adicional de risco não recebido corretamente.</li>}
                        
                        {harassment && <li><CheckCircle2 size={18} className="text-gold" /> <strong>Danos Morais:</strong> Fortes indícios de Assédio Moral (pressão/humilhação) passível de indenização.</li>}
                      </ul>
                      <p className="disclaimer">
                        *Importante: Este é um cálculo lógico estimado. A confirmação exata depende da análise dos seus contracheques.
                      </p>
                    </>
                  ) : (
                    <>
                      <h4>Nenhuma irregularidade aparente foi identificada.</h4>
                      <ul className="findings-list">
                        <li><CheckCircle2 size={18} style={{ color: '#10b981' }} /> Sua jornada calculada ({workedHours.toFixed(1)} horas) está dentro do limite legal.</li>
                        <li><CheckCircle2 size={18} style={{ color: '#10b981' }} /> Você informou que não recebe salários "por fora".</li>
                        <li><CheckCircle2 size={18} style={{ color: '#10b981' }} /> Seu ambiente de trabalho parece ser regular e seguro.</li>
                      </ul>
                      <p className="disclaimer">
                        *Dica: Mesmo que tudo pareça correto, é sempre recomendável monitorar o aplicativo oficial do FGTS para garantir que a empresa está depositando os 8% mensalmente.
                      </p>
                    </>
                  )}
                </div>
              </div>
              
              <div className="trust-bar">
                <span>🔒 Sigiloso</span>
                <span>✓ Sem compromisso</span>
                <span>✓ Gratuito</span>
                <span>✓ Atendimento humano</span>
              </div>

              <div className="result-cta">
                <div className="lgpd-consent" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '24px', textAlign: 'left', background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '8px' }}>
                  <input 
                    type="checkbox" 
                    id="lgpd" 
                    checked={lgpdAccepted}
                    onChange={(e) => setLgpdAccepted(e.target.checked)}
                    style={{ marginTop: '4px', cursor: 'pointer' }}
                  />
                  <label htmlFor="lgpd" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', cursor: 'pointer', lineHeight: '1.4' }}>
                    Autorizo, de maneira transparente e específica, o tratamento e eventual compartilhamento de meus dados com profissionais especializados para análise inicial do meu caso, conforme a LGPD.
                  </label>
                </div>

                {flagsCount > 0 ? (
                  <>
                    <p>Próximo passo: <strong>Falar com especialista para conferência.</strong></p>
                    <button 
                      className={`btn-whatsapp ${lgpdAccepted ? 'btn-pulse' : ''}`} 
                      onClick={openWhatsApp}
                      disabled={!lgpdAccepted}
                      style={{ opacity: lgpdAccepted ? 1 : 0.5, cursor: lgpdAccepted ? 'pointer' : 'not-allowed' }}
                    >
                      <MessageCircle size={24} />
                      Solicitar Contato
                    </button>
                  </>
                ) : (
                  <>
                    <p>Tem alguma dúvida que a triagem não cobriu?</p>
                    <button 
                      className="btn-whatsapp" 
                      onClick={openWhatsApp}
                      disabled={!lgpdAccepted}
                      style={{ opacity: lgpdAccepted ? 1 : 0.5, cursor: lgpdAccepted ? 'pointer' : 'not-allowed' }}
                    >
                      <MessageCircle size={24} />
                      Falar com Especialista
                    </button>
                  </>
                )}
                
                <button className="btn-reset" onClick={resetQuiz}>Refazer Triagem</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default InteractiveChecklist;
