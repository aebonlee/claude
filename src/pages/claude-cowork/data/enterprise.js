const enterprise = {
  id: 'enterprise',
  title: '엔터프라이즈 코워크',
  titleEn: 'Enterprise Co-work',
  icon: 'fa-building',
  sections: [
    {
      title: 'Enterprise 도입 가이드',
      titleEn: 'Enterprise Adoption Guide',
      content: `### Claude Enterprise 코워크

대규모 조직에서 Claude를 도입하여 전사적 코워크를 구축하는 방법을 안내합니다.

### 요금제별 코워크 기능 비교

| 기능 | Pro | Team | Enterprise |
|------|-----|------|-----------|
| 기본 대화 | ✓ | ✓ | ✓ |
| Projects | ✓ | ✓ | ✓ |
| 팀 공유 프로젝트 | - | ✓ | ✓ |
| 관리자 대시보드 | - | ✓ | ✓ |
| SSO/SAML | - | - | ✓ |
| 감사 로그 | - | - | ✓ |
| 사용량 분석 | - | 기본 | 상세 |
| API 연동 | 별도 | 별도 | 통합 |
| SLA | - | - | ✓ |
| 전담 지원 | - | - | ✓ |

### 도입 단계

\`\`\`
Phase 1 (1-2주): 파일럿
├── 핵심 팀(3-5명) 선정
├── Team 플랜 시작
├── 사용 사례 테스트
└── ROI 측정 기준 수립

Phase 2 (3-4주): 확대
├── 부서별 확장 (10-20명)
├── Custom Instructions 표준화
├── 워크플로우 가이드 작성
└── 보안 정책 수립

Phase 3 (5-8주): 전사 도입
├── Enterprise 플랜 전환
├── SSO 연동
├── 전사 교육 프로그램
└── 사용량 모니터링 체계 구축
\`\`\`

### 보안 고려사항

- **데이터 처리**: Claude는 대화 내용을 모델 학습에 사용하지 않음 (Enterprise)
- **접근 제어**: SSO/SAML을 통한 중앙화된 인증 관리
- **감사 로그**: 모든 사용 이력 추적 가능
- **데이터 보존**: 대화 보존 기간 정책 설정 가능
- **IP 제한**: 특정 IP 범위에서만 접근 허용 설정`,
      contentEn: `### Claude Enterprise Co-work

Guide for implementing Claude across large organizations to build company-wide co-work.

### Co-work Feature Comparison by Plan

| Feature | Pro | Team | Enterprise |
|---------|-----|------|-----------|
| Basic Chat | ✓ | ✓ | ✓ |
| Projects | ✓ | ✓ | ✓ |
| Shared Team Projects | - | ✓ | ✓ |
| Admin Dashboard | - | ✓ | ✓ |
| SSO/SAML | - | - | ✓ |
| Audit Logs | - | - | ✓ |
| Usage Analytics | - | Basic | Detailed |
| API Integration | Separate | Separate | Unified |
| SLA | - | - | ✓ |
| Dedicated Support | - | - | ✓ |

### Adoption Phases

\`\`\`
Phase 1 (Weeks 1-2): Pilot
├── Select core team (3-5 people)
├── Start Team plan
├── Test use cases
└── Establish ROI measurement criteria

Phase 2 (Weeks 3-4): Expansion
├── Expand by department (10-20 people)
├── Standardize Custom Instructions
├── Write workflow guides
└── Establish security policies

Phase 3 (Weeks 5-8): Company-wide Rollout
├── Upgrade to Enterprise plan
├── SSO integration
├── Company-wide training program
└── Build usage monitoring infrastructure
\`\`\`

### Security Considerations

- **Data Processing**: Claude does not use conversation data for model training (Enterprise)
- **Access Control**: Centralized authentication via SSO/SAML
- **Audit Logs**: Full usage history tracking
- **Data Retention**: Configurable conversation retention policies
- **IP Restrictions**: Restrict access to specific IP ranges`
    },
    {
      title: 'ROI 측정 및 사례',
      titleEn: 'ROI Measurement & Case Studies',
      content: `### 코워크 ROI 측정 프레임워크

#### 정량적 지표

| 지표 | 측정 방법 | 기대 효과 |
|------|----------|----------|
| 개발 속도 | 기능 구현 소요 시간 | 30-50% 단축 |
| 코드 품질 | 버그 발생률, 리뷰 수정 횟수 | 20-40% 감소 |
| 문서 작성 | 문서 작성 소요 시간 | 60-80% 단축 |
| 온보딩 | 신규 인원 적응 기간 | 40-60% 단축 |
| 미팅 효율 | 미팅 준비/정리 시간 | 50-70% 단축 |

#### 정성적 지표

- **팀 만족도**: 반복 작업 감소로 인한 업무 만족도 향상
- **지식 공유**: 프로젝트 기반 지식의 체계적 축적
- **의사결정 품질**: 데이터 기반 인사이트를 통한 의사결정 향상
- **혁신**: 루틴 업무 자동화로 창의적 업무에 집중

### 활용 사례

#### 스타트업 A사 (개발팀 8명)
- **도입 전**: 스프린트당 평균 15개 태스크 완료
- **도입 후**: 스프린트당 평균 24개 태스크 완료 (+60%)
- **핵심 활용**: Claude Code 페어 프로그래밍, PR 자동 리뷰

#### 중견기업 B사 (마케팅팀 12명)
- **도입 전**: 콘텐츠 제작에 주 40시간 소요
- **도입 후**: 동일 품질 콘텐츠 주 15시간으로 단축 (-62%)
- **핵심 활용**: 콘텐츠 초안 생성, 다국어 번역, SEO 최적화

#### 대기업 C사 (전사 200명)
- **도입 전**: 보고서 작성에 인당 주 8시간 소요
- **도입 후**: 인당 주 2시간으로 단축 (-75%)
- **핵심 활용**: 데이터 분석, 자동 보고서 생성, 미팅 요약`,
      contentEn: `### Co-work ROI Measurement Framework

#### Quantitative Metrics

| Metric | Measurement Method | Expected Impact |
|--------|-------------------|-----------------|
| Dev Speed | Feature implementation time | 30-50% reduction |
| Code Quality | Bug rate, review revision count | 20-40% decrease |
| Documentation | Doc writing time | 60-80% reduction |
| Onboarding | New member adaptation period | 40-60% reduction |
| Meeting Efficiency | Meeting prep/summary time | 50-70% reduction |

#### Qualitative Metrics

- **Team Satisfaction**: Improved satisfaction from reduced repetitive work
- **Knowledge Sharing**: Systematic accumulation of project-based knowledge
- **Decision Quality**: Better decisions through data-driven insights
- **Innovation**: Focus on creative work by automating routine tasks

### Case Studies

#### Startup A (8-person dev team)
- **Before**: Average 15 tasks completed per sprint
- **After**: Average 24 tasks completed per sprint (+60%)
- **Key Usage**: Claude Code pair programming, automated PR reviews

#### Mid-size Company B (12-person marketing team)
- **Before**: 40 hours/week on content production
- **After**: Same quality content in 15 hours/week (-62%)
- **Key Usage**: Content draft generation, multilingual translation, SEO optimization

#### Enterprise C (200 employees company-wide)
- **Before**: 8 hours/person/week on report writing
- **After**: 2 hours/person/week (-75%)
- **Key Usage**: Data analysis, automated report generation, meeting summaries`
    }
  ]
};

export default enterprise;
