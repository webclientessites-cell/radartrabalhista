import React, { useEffect } from 'react';
import { ShoppingBag, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Comercio = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="sector-page">
      <div className="sector-hero" style={{ background: 'linear-gradient(to bottom, #0a0d14, #131b2f)', padding: '120px 24px 80px', textAlign: 'center' }}>
        <ShoppingBag size={64} style={{ color: '#f59e0b', margin: '0 auto 24px' }} />
        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '24px' }}>
          Direitos no <span className="text-gradient">Comércio e Varejo</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 40px' }}>
          Orientação para vendedores, caixas, estoquistas e gerentes. Saiba mais sobre comissões "por fora", quebra de caixa e domingos trabalhados.
        </p>
      </div>

      <div className="container" style={{ padding: '60px 24px' }}>
        <div className="content-grid" style={{ display: 'grid', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
          
          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#f59e0b' }}>Comissões "Por Fora" e Metas</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
              Muitos lojistas pagam comissões de vendas de forma não registrada para evitar impostos. Isso prejudica diretamente o trabalhador na hora do cálculo de férias, 13º e rescisão.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={20} color="#f59e0b" /> Integração de prêmios e comissões ao salário base.
              </li>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={20} color="#f59e0b" /> Estorno abusivo de comissões por cancelamento de compra.
              </li>
            </ul>
          </div>

          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#f59e0b' }}>Quebra de Caixa e Acúmulo</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Vendedores que precisam fechar o caixa ou realizar limpeza da loja sem receber adicional de "quebra de caixa" ou "acúmulo de função" podem ter valores a receber referentes a essas atividades adicionais exigidas pelo empregador.
            </p>
          </div>

          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#f59e0b' }}>Banco de Horas Irregular</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
              Ficar após o fechamento da loja para organização de estoque, balanço ou troca de vitrine é tempo de trabalho que deve ser pago. Quando as empresas jogam essas horas em um "banco de horas" informal e o trabalhador nunca consegue tirar folga, essas horas devem ser pagas na justiça com acréscimo de 50%.
            </p>
          </div>

          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#f59e0b' }}>Trabalho aos Domingos Sem Folga</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              O comércio varejista exige trabalho aos finais de semana, mas a lei garante o direito de ter, pelo menos, um domingo de folga a cada 3 semanas (ou conforme a convenção coletiva). O descumprimento dessa regra gera obrigação de pagamento em dobro.
            </p>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button className="btn-primary btn-large btn-pulse" onClick={() => {
              navigate('/');
              setTimeout(() => document.getElementById('avaliacao')?.scrollIntoView({ behavior: 'smooth' }), 100);
            }}>
              Fazer Triagem Gratuita <ChevronRight />
            </button>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Comercio;
