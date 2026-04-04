const modelComparison = {
  id: 'model-comparison',
  title: '모델 비교',
  titleEn: 'Model Comparison',
  icon: 'fa-chart-bar',
  sections: [
    {
      title: 'Claude 모델 패밀리',
      titleEn: 'Claude Model Family',
      content: `Claude는 용도와 성능에 따라 여러 모델을 제공합니다. 각 모델의 특징을 이해하고 상황에 맞게 선택하세요.

### 모델 비교 요약

| 모델 | 특징 | 적합한 용도 | 상대 가격 |
|------|------|------------|----------|
| **Opus 4.6** | 최고 성능, 깊은 추론 | 복잡한 코딩, 연구, 전략 분석 | ★★★★★ |
| **Sonnet 4.6** | 균형 잡힌 성능과 속도 | 일반 업무, 코딩, 문서 작성 | ★★★ |
| **Haiku 4.5** | 가장 빠르고 저렴 | 간단한 질문, 분류, 요약 | ★ |

### 모델 선택 가이드

**Opus를 선택해야 할 때:**
- 복잡한 멀티스텝 코딩 작업
- 깊은 분석과 전략적 사고가 필요한 경우
- 최고 품질의 결과물이 필요한 경우

**Sonnet을 선택해야 할 때:**
- 대부분의 일상적인 업무
- 빠른 응답이 필요하면서도 품질을 유지해야 할 때
- 비용 효율성이 중요한 경우

**Haiku를 선택해야 할 때:**
- 간단한 텍스트 분류나 추출
- 대량 처리가 필요한 경우
- 실시간 응답이 중요한 챗봇

> 더 자세한 모델별 벤치마크와 가격 비교는 [모델 비교 페이지](/model-comparison)에서 확인할 수 있습니다.`,
      contentEn: `Claude offers multiple models depending on purpose and performance. Understand each model's characteristics and choose the right one for your situation.

### Model Comparison Summary

| Model | Characteristics | Best For | Relative Price |
|-------|----------------|----------|---------------|
| **Opus 4.6** | Highest performance, deep reasoning | Complex coding, research, strategic analysis | ★★★★★ |
| **Sonnet 4.6** | Balanced performance and speed | General tasks, coding, writing | ★★★ |
| **Haiku 4.5** | Fastest and most affordable | Simple questions, classification, summaries | ★ |

### Model Selection Guide

**Choose Opus when:**
- Complex multi-step coding tasks
- Deep analysis and strategic thinking required
- Highest quality output needed

**Choose Sonnet when:**
- Most everyday tasks
- Quick responses needed while maintaining quality
- Cost efficiency is important

**Choose Haiku when:**
- Simple text classification or extraction
- High-volume processing needed
- Real-time responses for chatbots

> For detailed benchmarks and pricing comparisons, visit the [Model Comparison page](/model-comparison).`
    }
  ]
};

export default modelComparison;
