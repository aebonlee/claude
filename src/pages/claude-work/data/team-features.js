const teamFeatures = {
  id: 'team-features',
  title: '팀 기능',
  titleEn: 'Team Features',
  icon: 'fa-users',
  sections: [
    {
      title: 'Team 요금제 개요',
      titleEn: 'Team Plan Overview',
      content: `Claude Team은 조직 내 팀원들이 함께 Claude를 활용할 수 있도록 설계된 협업 중심의 요금제입니다.

### Team 요금제 주요 기능

- **높은 사용량 제한**: 개인 Pro 대비 더 많은 메시지 허용량
- **팀 프로젝트 공유**: 프로젝트를 팀원과 공유하여 협업
- **관리자 대시보드**: 팀 사용량 모니터링, 멤버 관리
- **중앙 결제**: 팀 전체 결제를 한 곳에서 관리
- **데이터 보호**: 팀 데이터가 학습에 사용되지 않음을 보장

### 역할 및 권한

| 역할 | 설명 | 권한 |
|------|------|------|
| **소유자(Owner)** | 팀을 생성한 사용자 | 모든 권한 + 결제 관리 |
| **관리자(Admin)** | 팀 관리 담당자 | 멤버 관리, 설정 변경 |
| **멤버(Member)** | 일반 팀원 | 프로젝트 사용, 대화 생성 |`,
      contentEn: `Claude Team is a collaboration-focused plan designed to allow team members within an organization to use Claude together.

### Key Team Plan Features

- **Higher Usage Limits**: More message allowance compared to individual Pro
- **Shared Team Projects**: Share projects with team members for collaboration
- **Admin Dashboard**: Monitor team usage, manage members
- **Centralized Billing**: Manage billing for the entire team in one place
- **Data Protection**: Guarantee that team data is not used for training

### Roles and Permissions

| Role | Description | Permissions |
|------|-------------|-------------|
| **Owner** | User who created the team | All permissions + billing management |
| **Admin** | Team management personnel | Member management, settings changes |
| **Member** | Regular team member | Use projects, create conversations |`
    },
    {
      title: 'Enterprise 기능',
      titleEn: 'Enterprise Features',
      content: `### Enterprise 요금제 추가 기능

Enterprise 요금제는 Team의 모든 기능에 더해 대규모 조직을 위한 고급 기능을 제공합니다:

- **SSO(Single Sign-On)**: SAML 기반 SSO로 기업 인증 시스템 연동
- **SCIM 프로비저닝**: 자동 사용자 프로비저닝 및 디프로비저닝
- **감사 로그(Audit Logs)**: 모든 활동에 대한 상세 로그 기록
- **SLA**: 가용성 및 응답 시간에 대한 서비스 수준 계약
- **전담 지원**: 전담 고객 성공 매니저 배정
- **사용자 정의 데이터 보존**: 데이터 보존 정책 커스터마이즈

### 보안 및 규정 준수

- **SOC 2 Type II** 인증 완료
- **HIPAA** 규정 준수 옵션 제공
- **데이터 격리**: 조직 데이터의 완전한 격리 보장
- **접근 제어**: 세분화된 역할 기반 접근 제어(RBAC)

### 도입 프로세스

1. Anthropic 영업팀에 문의
2. 요구 사항 분석 및 데모
3. 보안 검토 및 계약
4. 환경 설정 및 SSO 구성
5. 팀 온보딩 및 교육`,
      contentEn: `### Enterprise Plan Additional Features

The Enterprise plan provides all Team features plus advanced capabilities for large organizations:

- **SSO (Single Sign-On)**: SAML-based SSO integration with corporate authentication systems
- **SCIM Provisioning**: Automatic user provisioning and deprovisioning
- **Audit Logs**: Detailed logging of all activities
- **SLA**: Service level agreements for availability and response times
- **Dedicated Support**: Assigned customer success manager
- **Custom Data Retention**: Customizable data retention policies

### Security and Compliance

- **SOC 2 Type II** certified
- **HIPAA** compliance options available
- **Data Isolation**: Complete isolation of organizational data guaranteed
- **Access Control**: Granular role-based access control (RBAC)

### Adoption Process

1. Contact Anthropic sales team
2. Requirements analysis and demo
3. Security review and contract
4. Environment setup and SSO configuration
5. Team onboarding and training`
    }
  ]
};

export default teamFeatures;
