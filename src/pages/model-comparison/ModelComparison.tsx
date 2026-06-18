import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import models from './data/models';

export default function ModelComparison() {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  return (
    <div className="content-page model-comparison-page">
      <SEOHead
        title={isKo ? '모델 비교' : 'Model Comparison'}
        description={isKo ? 'Claude 모델별 성능, 가격, 용도를 비교합니다.' : 'Compare Claude models by performance, pricing, and use cases.'}
        path="/model-comparison"
      />
      <div className="container">
        <div className="page-header" style={{ paddingTop: 0, borderBottom: 'none' }}>
          <h1>{isKo ? 'Claude 모델 비교' : 'Claude Model Comparison'}</h1>
          <p className="page-desc">
            {isKo
              ? '용도와 예산에 맞는 최적의 Claude 모델을 선택하세요.'
              : 'Choose the best Claude model for your use case and budget.'}
          </p>
        </div>

        {/* Model Cards */}
        <div className="model-cards">
          {models.map((model) => (
            <div key={model.name} className={`model-card${model.tier === 'Sonnet' ? ' featured' : ''}`}>
              <span className={`model-badge ${model.badge}`}>{model.tier}</span>
              <h3 className="model-card-name">{model.name}</h3>
              <p className="model-card-tagline">
                {isKo ? model.description : model.descriptionEn}
              </p>
              <ul className="model-specs">
                <li>
                  <span className="model-spec-label">{isKo ? '컨텍스트 윈도우' : 'Context Window'}</span>
                  <span className="model-spec-value">{model.contextWindow}</span>
                </li>
                <li>
                  <span className="model-spec-label">{isKo ? '최대 출력' : 'Max Output'}</span>
                  <span className="model-spec-value">{model.maxOutput}</span>
                </li>
                <li>
                  <span className="model-spec-label">{isKo ? '입력 가격' : 'Input Price'}</span>
                  <span className="model-spec-value">{model.inputPrice}</span>
                </li>
                <li>
                  <span className="model-spec-label">{isKo ? '출력 가격' : 'Output Price'}</span>
                  <span className="model-spec-value">{model.outputPrice}</span>
                </li>
              </ul>
              <p style={{ fontSize: '13px', color: 'var(--text-light)', textAlign: 'left' }}>
                <strong>{isKo ? '추천 용도: ' : 'Best for: '}</strong>
                {isKo ? model.bestFor : model.bestForEn}
              </p>
            </div>
          ))}

          {/* Fable 5 이용 불가 안내 (2칸 차지) */}
          <div className="model-card model-card-note">
            <div className="model-note-icon">
              <i className="fa-solid fa-triangle-exclamation" />
            </div>
            <h3 className="model-note-title">
              {isKo ? 'Claude Fable 5는 현재 이용 불가' : 'Claude Fable 5 is currently unavailable'}
            </h3>
            <p className="model-note-text">
              {isKo
                ? '미국 정부의 수출통제로 Fable 5·Mythos 5 접근이 중단되었습니다. 한국 등 해당 지역에서는 사용할 수 없으며, 가용 모델 중 가장 강력한 Opus 4.8을 권장합니다.'
                : 'US export controls suspended access to Fable 5 & Mythos 5. It cannot be used in affected regions (e.g. Korea) — use Opus 4.8, the most capable available model, instead.'}
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '24px' }}>
          {isKo ? '상세 비교표' : 'Detailed Comparison'}
        </h2>
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>{isKo ? '항목' : 'Feature'}</th>
                {models.map((m) => (
                  <th key={m.name}>
                    <span className={`model-badge ${m.badge}`}>{m.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? '컨텍스트 윈도우' : 'Context Window'}</td>
                {models.map((m) => <td key={m.name}>{m.contextWindow}</td>)}
              </tr>
              <tr>
                <td>{isKo ? '최대 출력' : 'Max Output'}</td>
                {models.map((m) => <td key={m.name}>{m.maxOutput}</td>)}
              </tr>
              <tr>
                <td>{isKo ? '입력 가격' : 'Input Price'}</td>
                {models.map((m) => <td key={m.name}>{m.inputPrice}</td>)}
              </tr>
              <tr>
                <td>{isKo ? '출력 가격' : 'Output Price'}</td>
                {models.map((m) => <td key={m.name}>{m.outputPrice}</td>)}
              </tr>
              <tr>
                <td>{isKo ? '추천 용도' : 'Best For'}</td>
                {models.map((m) => <td key={m.name}>{isKo ? m.bestFor : m.bestForEn}</td>)}
              </tr>
              <tr>
                <td>{isKo ? '비전 (이미지)' : 'Vision (Images)'}</td>
                {models.map((m) => <td key={m.name}>✓</td>)}
              </tr>
              <tr>
                <td>{isKo ? 'Tool Use' : 'Tool Use'}</td>
                {models.map((m) => <td key={m.name}>✓</td>)}
              </tr>
              <tr>
                <td>{isKo ? '스트리밍' : 'Streaming'}</td>
                {models.map((m) => <td key={m.name}>✓</td>)}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
