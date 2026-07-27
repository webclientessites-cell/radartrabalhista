import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Pill, AlertTriangle, ShoppingBag, Factory, Tractor, Wrench, Stethoscope } from 'lucide-react';
import './CategoryNav.css';

const categories = [
  {
    id: 'bancarios',
    title: 'Bancários',
    desc: 'Metas abusivas, cargo de confiança, 7ª e 8ª horas.',
    icon: <Building2 size={32} />,
    path: '/bancarios',
    color: '#D4AF37'
  },
  {
    id: 'farmacia',
    title: 'Farmácia',
    desc: 'Balconistas, farmacêuticos, acúmulo de função.',
    icon: <Pill size={32} />,
    path: '/farmacia',
    color: '#10b981'
  },
  {
    id: 'acidentes',
    title: 'Acidente de Trabalho',
    desc: 'Afastamento, estabilidade, sequelas.',
    icon: <AlertTriangle size={32} />,
    path: '/acidentes',
    color: '#ef4444'
  },
  {
    id: 'comercio',
    title: 'Comércio',
    desc: 'Lojas, supermercados, varejo e atacado.',
    icon: <ShoppingBag size={32} />,
    path: '/comercio',
    color: '#f59e0b'
  },
  {
    id: 'industria',
    title: 'Indústria',
    desc: 'Fábricas, produção, logística e operação.',
    icon: <Factory size={32} />,
    path: '/industria',
    color: '#64748b'
  },
  {
    id: 'agro',
    title: 'Agro',
    desc: 'Trabalhadores rurais, agrícola e pecuária.',
    icon: <Tractor size={32} />,
    path: '/agro',
    color: '#84cc16'
  },
  {
    id: 'servicos',
    title: 'Serviços',
    desc: 'Restaurantes, limpeza, segurança e transporte.',
    icon: <Wrench size={32} />,
    path: '/servicos',
    color: '#8b5cf6'
  },
  {
    id: 'saude',
    title: 'Saúde',
    desc: 'Hospitais, clínicas, enfermagem e cuidadores.',
    icon: <Stethoscope size={32} />,
    path: '/saude',
    color: '#ec4899'
  }
];

const CategoryNav = () => {
  return (
    <section className="category-nav-section">
      <div className="container">
        <div className="category-header text-center">
          <h2>Selecione o seu Setor</h2>
          <p>Temos orientações e triagens específicas para diferentes áreas de atuação.</p>
        </div>
        
        <div className="category-grid">
          {categories.map(cat => (
            cat.path === '/' ? (
              <div 
                key={cat.id} 
                className="category-card" 
                onClick={cat.action}
                style={{ '--cat-color': cat.color, cursor: 'pointer' }}
              >
                <div className="category-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
              </div>
            ) : (
              <Link 
                key={cat.id} 
                to={cat.path} 
                className="category-card"
                style={{ '--cat-color': cat.color }}
              >
                <div className="category-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
              </Link>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryNav;
