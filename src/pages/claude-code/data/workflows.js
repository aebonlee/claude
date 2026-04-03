export default {
  id: 'workflows',
  title: '실전 워크플로우',
  titleEn: 'Practical Workflows',
  icon: 'fa-diagram-project',
  sections: [
    {
      title: '코드 리뷰 워크플로우',
      titleEn: 'Code Review Workflow',
      content: `Claude Code를 사용하여 체계적인 코드 리뷰를 수행할 수 있습니다.

### 기본 코드 리뷰

\`\`\`bash
# 현재 변경사항 리뷰
claude -p "현재 git diff를 리뷰해줘. 버그, 보안 이슈, 코드 품질을 확인해줘"

# 특정 PR 리뷰
claude -p "PR #42의 변경사항을 리뷰해줘"

# 대화형 모드에서
> /review
\`\`\`

### 체계적 리뷰 프로세스

1. **변경사항 파악**: 전체 변경 범위와 목적 이해
2. **보안 검토**: 취약점, 인증/인가 이슈 확인
3. **버그 탐지**: 엣지 케이스, null 체크, 에러 처리 확인
4. **코드 품질**: 네이밍, 구조, 중복 코드 확인
5. **테스트 확인**: 테스트 커버리지와 테스트 품질 검토

### 자동화된 리뷰 스크립트

\`\`\`bash
#!/bin/bash
# review.sh - PR 자동 리뷰 스크립트
PR_NUMBER=$1
claude -p "
GitHub PR #$PR_NUMBER을 리뷰해줘.
다음 기준으로 분석해줘:
1. 보안 취약점
2. 성능 이슈
3. 코드 스타일 일관성
4. 테스트 커버리지
5. 문서화 상태
" --allowedTools "Bash(gh *)" --output-format json
\`\`\``,
      contentEn: `You can perform systematic code reviews using Claude Code.

### Basic Code Review

\`\`\`bash
# Review current changes
claude -p "Review the current git diff. Check for bugs, security issues, and code quality"

# Review a specific PR
claude -p "Review the changes in PR #42"

# In interactive mode
> /review
\`\`\`

### Systematic Review Process

1. **Identify Changes**: Understand the scope and purpose of all changes
2. **Security Review**: Check for vulnerabilities, auth issues
3. **Bug Detection**: Check edge cases, null checks, error handling
4. **Code Quality**: Review naming, structure, duplicate code
5. **Test Verification**: Review test coverage and test quality

### Automated Review Script

\`\`\`bash
#!/bin/bash
# review.sh - Automated PR review script
PR_NUMBER=$1
claude -p "
Review GitHub PR #$PR_NUMBER.
Analyze based on these criteria:
1. Security vulnerabilities
2. Performance issues
3. Code style consistency
4. Test coverage
5. Documentation status
" --allowedTools "Bash(gh *)" --output-format json
\`\`\``,
    },
    {
      title: '디버깅 워크플로우',
      titleEn: 'Debugging Workflow',
      content: `Claude Code는 강력한 디버깅 도우미 역할을 합니다.

### 에러 분석

\`\`\`bash
# 에러 로그 분석
npm test 2>&1 | claude -p "이 테스트 실패 원인을 분석하고 수정해줘"

# 런타임 에러 분석
> 다음 에러가 발생합니다: TypeError: Cannot read property 'map' of undefined
> 원인을 찾고 수정해줘
\`\`\`

### 디버깅 전략

1. **에러 메시지 분석**: 에러 메시지와 스택 트레이스 전달
2. **코드 추적**: 관련 코드를 함께 분석 요청
3. **재현 확인**: 수정 후 테스트 실행으로 검증
4. **근본 원인 분석**: 표면적 수정이 아닌 근본 원인 해결

### 실전 예시

\`\`\`
> npm run build에서 에러가 발생해. 로그를 분석하고 수정해줘

[Claude가 빌드 실행, 에러 분석, 코드 수정, 빌드 재시도를 자동으로 수행]

> 데이터베이스 쿼리가 느려. 성능 문제를 분석해줘

[Claude가 쿼리 분석, 인덱스 확인, 최적화 제안]
\`\`\`

### 로그 분석 파이프라인

\`\`\`bash
# 서버 로그 분석
tail -n 1000 server.log | claude -p "에러 패턴을 분석하고 원인을 진단해줘"

# 크래시 리포트 분석
cat crash-report.txt | claude -p "이 크래시의 원인과 해결 방법을 알려줘"
\`\`\``,
      contentEn: `Claude Code serves as a powerful debugging assistant.

### Error Analysis

\`\`\`bash
# Analyze error logs
npm test 2>&1 | claude -p "Analyze the cause of these test failures and fix them"

# Analyze runtime errors
> I'm getting this error: TypeError: Cannot read property 'map' of undefined
> Find the cause and fix it
\`\`\`

### Debugging Strategy

1. **Error Message Analysis**: Pass error messages and stack traces
2. **Code Tracing**: Request analysis along with related code
3. **Reproduction Verification**: Verify with test execution after fixes
4. **Root Cause Analysis**: Resolve root causes, not just surface symptoms

### Practical Examples

\`\`\`
> I'm getting an error from npm run build. Analyze the log and fix it

[Claude automatically runs the build, analyzes errors, fixes code, retries the build]

> Database queries are slow. Analyze the performance issue

[Claude analyzes queries, checks indexes, suggests optimizations]
\`\`\`

### Log Analysis Pipeline

\`\`\`bash
# Server log analysis
tail -n 1000 server.log | claude -p "Analyze error patterns and diagnose the cause"

# Crash report analysis
cat crash-report.txt | claude -p "Tell me the cause of this crash and how to resolve it"
\`\`\``,
    },
    {
      title: '리팩토링 워크플로우',
      titleEn: 'Refactoring Workflow',
      content: `Claude Code로 안전하고 체계적인 리팩토링을 수행합니다.

### 코드 리팩토링 전략

\`\`\`
> UserController 클래스가 너무 큽니다. 책임 분리 원칙에 따라 리팩토링해줘
> 이 함수의 중첩 조건문을 early return 패턴으로 개선해줘
> 중복 코드를 유틸리티 함수로 추출해줘
\`\`\`

### 대규모 리팩토링

\`\`\`
> 프로젝트 전체에서 callback 패턴을 async/await로 변환해줘
> 모든 API 핸들러에 일관된 에러 처리를 적용해줘
> JavaScript 파일을 TypeScript로 마이그레이션해줘
\`\`\`

### 안전한 리팩토링 워크플로우

1. **현재 테스트 실행**: 리팩토링 전 모든 테스트가 통과하는지 확인
2. **리팩토링 수행**: Claude에게 리팩토링 요청
3. **테스트 재실행**: 리팩토링 후 테스트가 여전히 통과하는지 확인
4. **변경사항 검토**: diff를 확인하고 의도치 않은 변경이 없는지 확인

\`\`\`
> 먼저 테스트를 실행하고, utils.js를 리팩토링한 후, 다시 테스트를 실행해줘
\`\`\``,
      contentEn: `Perform safe and systematic refactoring with Claude Code.

### Code Refactoring Strategy

\`\`\`
> The UserController class is too large. Refactor it following the single responsibility principle
> Improve the nested conditionals in this function to early return pattern
> Extract duplicate code into utility functions
\`\`\`

### Large-scale Refactoring

\`\`\`
> Convert callback patterns to async/await across the entire project
> Apply consistent error handling to all API handlers
> Migrate JavaScript files to TypeScript
\`\`\`

### Safe Refactoring Workflow

1. **Run Current Tests**: Verify all tests pass before refactoring
2. **Perform Refactoring**: Request refactoring from Claude
3. **Re-run Tests**: Verify tests still pass after refactoring
4. **Review Changes**: Check the diff for unintended changes

\`\`\`
> First run the tests, refactor utils.js, then run the tests again
\`\`\``,
    },
    {
      title: '테스트 및 문서화 워크플로우',
      titleEn: 'Testing & Documentation Workflow',
      content: `### 테스트 작성

\`\`\`
> UserService 클래스에 대한 단위 테스트를 작성해줘
> 이 API 엔드포인트의 통합 테스트를 만들어줘
> 현재 테스트 커버리지를 확인하고 누락된 테스트를 추가해줘
\`\`\`

### 테스트 실행 및 수정

\`\`\`bash
# 테스트 실행 후 실패한 것을 자동 수정
> npm test를 실행하고 실패한 테스트를 수정해줘

# 특정 테스트 파일만 실행
> jest user.test.js를 실행해줘
\`\`\`

### 테스트 커버리지 개선

\`\`\`
> 현재 테스트 커버리지가 낮은 파일을 찾고 테스트를 추가해줘
> 엣지 케이스에 대한 테스트를 추가해줘:
> - 빈 입력
> - null/undefined
> - 매우 큰 데이터
> - 네트워크 오류 시나리오
\`\`\`

### 문서화

\`\`\`
> 이 API의 JSDoc 주석을 작성해줘
> README.md에 프로젝트 설치 및 사용 방법을 추가해줘
> API 엔드포인트 문서를 생성해줘
> CHANGELOG.md를 최신 변경사항으로 업데이트해줘
\`\`\`

### CI/CD 파이프라인에서 활용

\`\`\`yaml
# GitHub Actions 예시
- name: Auto-fix failing tests
  run: |
    npm test 2>&1 | claude -p "Fix failing tests" \\
      --allowedTools "Write" "Edit" "Bash(npm test)"
\`\`\``,
      contentEn: `### Writing Tests

\`\`\`
> Write unit tests for the UserService class
> Create integration tests for this API endpoint
> Check current test coverage and add missing tests
\`\`\`

### Running and Fixing Tests

\`\`\`bash
# Auto-fix failed tests after running them
> Run npm test and fix any failing tests

# Run specific test files only
> Run jest user.test.js
\`\`\`

### Improving Test Coverage

\`\`\`
> Find files with low test coverage and add tests
> Add tests for edge cases:
> - Empty input
> - null/undefined
> - Very large data
> - Network error scenarios
\`\`\`

### Documentation

\`\`\`
> Write JSDoc comments for this API
> Add project installation and usage instructions to README.md
> Generate API endpoint documentation
> Update CHANGELOG.md with latest changes
\`\`\`

### Usage in CI/CD Pipelines

\`\`\`yaml
# GitHub Actions example
- name: Auto-fix failing tests
  run: |
    npm test 2>&1 | claude -p "Fix failing tests" \\
      --allowedTools "Write" "Edit" "Bash(npm test)"
\`\`\``,
    },
  ],
};
