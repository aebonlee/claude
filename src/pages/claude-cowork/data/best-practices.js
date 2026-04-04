const bestPractices = {
  id: 'best-practices',
  title: '코워크 베스트 프랙티스',
  titleEn: 'Co-work Best Practices',
  icon: 'fa-star',
  sections: [
    {
      title: '효과적인 코워크 원칙',
      titleEn: 'Effective Co-work Principles',
      content: `### 1. 명확한 역할 분담

Claude와의 코워크에서 가장 중요한 것은 **사람과 AI의 역할을 명확히 구분**하는 것입니다.

| 사람의 역할 | Claude의 역할 |
|------------|--------------|
| 목표 설정 & 방향 결정 | 실행 & 구현 |
| 품질 검증 & 의사결정 | 초안 작성 & 옵션 제시 |
| 도메인 전문 지식 제공 | 데이터 분석 & 패턴 발견 |
| 최종 승인 | 반복 작업 자동화 |

### 2. 컨텍스트 최적화

\`\`\`markdown
# 좋은 예 ✓
"첨부한 API 스펙(api-spec.yaml)을 기반으로 Express 라우터를 구현해줘.
기존 라우터 패턴은 src/routes/users.js를 참고해."

# 나쁜 예 ✗
"API를 만들어줘."
\`\`\`

### 3. 점진적 작업 분할

큰 작업을 한 번에 요청하지 말고, 단계별로 나누어 진행합니다:

1. **계획 단계**: "이 기능의 구현 계획을 세워줘"
2. **구조 단계**: "데이터 모델과 API 구조를 설계해줘"
3. **구현 단계**: "계획대로 하나씩 구현해줘"
4. **검증 단계**: "테스트와 리뷰를 진행해줘"

### 4. 피드백 루프 활용

\`\`\`
요청 → Claude 응답 → 검토 → 구체적 피드백 → 개선 → 반복
\`\`\`

효과적인 피드백 예시:
- "함수명을 더 직관적으로 변경해줘 (예: getData → fetchUserProfile)"
- "에러 처리가 부족해. try-catch를 추가하고 사용자 친화적 에러 메시지를 반환해"
- "이 부분의 성능이 우려돼. N+1 쿼리를 join으로 최적화해줘"`,
      contentEn: `### 1. Clear Role Division

The most important aspect of co-work with Claude is **clearly distinguishing roles between human and AI**.

| Human's Role | Claude's Role |
|-------------|--------------|
| Goal setting & direction | Execution & implementation |
| Quality verification & decisions | Draft creation & option presentation |
| Domain expertise | Data analysis & pattern discovery |
| Final approval | Repetitive task automation |

### 2. Context Optimization

\`\`\`markdown
# Good Example ✓
"Implement an Express router based on the attached API spec (api-spec.yaml).
Reference the existing router pattern in src/routes/users.js."

# Bad Example ✗
"Make an API."
\`\`\`

### 3. Incremental Task Division

Don't request everything at once — break it into steps:

1. **Planning Phase**: "Create an implementation plan for this feature"
2. **Structure Phase**: "Design the data model and API structure"
3. **Implementation Phase**: "Implement each part according to the plan"
4. **Verification Phase**: "Run tests and review"

### 4. Leverage Feedback Loops

\`\`\`
Request → Claude Response → Review → Specific Feedback → Improvement → Repeat
\`\`\`

Effective feedback examples:
- "Rename functions to be more intuitive (e.g., getData → fetchUserProfile)"
- "Error handling is insufficient. Add try-catch and return user-friendly error messages"
- "Performance concern here. Optimize N+1 queries with joins"`
    },
    {
      title: '코워크 안티패턴',
      titleEn: 'Co-work Anti-patterns',
      content: `### 피해야 할 패턴

#### 1. 블랙박스 위임
\`\`\`markdown
# 안티패턴 ✗
"전체 프로젝트를 완성해줘"

# 올바른 접근 ✓
"먼저 프로젝트 구조를 설계하고, 핵심 모듈부터 하나씩 구현하자"
\`\`\`

#### 2. 검증 없는 수용
Claude의 결과물을 검증 없이 그대로 사용하는 것은 위험합니다.

**반드시 확인할 사항:**
- 코드: 로직 정확성, 보안 취약점, 성능
- 문서: 팩트 정확성, 최신 정보 반영 여부
- 분석: 데이터 해석의 타당성, 결론의 논리성

#### 3. 컨텍스트 과부하
\`\`\`markdown
# 안티패턴 ✗
한 대화에 너무 많은 파일과 요청을 동시에 전달

# 올바른 접근 ✓
관련된 파일만 선택적으로 공유하고, 명확한 범위의 작업을 요청
\`\`\`

#### 4. 재시작 반복
\`\`\`markdown
# 안티패턴 ✗
매번 새 대화를 시작하여 같은 컨텍스트를 반복 설명

# 올바른 접근 ✓
프로젝트 기능을 활용하여 컨텍스트를 유지
\`\`\`

### 코워크 체크리스트

- [ ] 작업 목표와 기대 결과물을 명확히 정의했는가?
- [ ] 필요한 컨텍스트(파일, 배경 정보)를 제공했는가?
- [ ] 작업을 적절한 크기로 분할했는가?
- [ ] 결과물을 검증하고 피드백을 제공했는가?
- [ ] Custom Instructions를 활용하고 있는가?
- [ ] 팀과 결과물을 공유하고 있는가?`,
      contentEn: `### Patterns to Avoid

#### 1. Black Box Delegation
\`\`\`markdown
# Anti-pattern ✗
"Complete the entire project"

# Correct Approach ✓
"Let's design the project structure first, then implement core modules one by one"
\`\`\`

#### 2. Accepting Without Verification
Using Claude's output without verification is risky.

**Always verify:**
- Code: Logic correctness, security vulnerabilities, performance
- Documents: Fact accuracy, whether latest info is reflected
- Analysis: Validity of data interpretation, logic of conclusions

#### 3. Context Overload
\`\`\`markdown
# Anti-pattern ✗
Sending too many files and requests simultaneously in one conversation

# Correct Approach ✓
Selectively share relevant files and request clearly scoped tasks
\`\`\`

#### 4. Restart Loop
\`\`\`markdown
# Anti-pattern ✗
Starting new conversations each time, re-explaining the same context

# Correct Approach ✓
Use the Projects feature to maintain context
\`\`\`

### Co-work Checklist

- [ ] Are work goals and expected outputs clearly defined?
- [ ] Is necessary context (files, background) provided?
- [ ] Is the work divided into appropriate sizes?
- [ ] Are outputs verified with feedback provided?
- [ ] Are Custom Instructions being utilized?
- [ ] Are outputs being shared with the team?`
    }
  ]
};

export default bestPractices;
