# 디자인 시스템

## 기본 컬러
- **Primary Blue**: #1B3A6B (다크 블루)
- **Text Primary**: #1E293B
- **Text Secondary**: #475569
- **Background**: #FFFFFF (라이트) / #0F172A (다크)

## 5가지 컬러 테마
| 테마 | 컬러 | CSS 선택자 |
|------|------|-----------|
| Blue (기본) | #1B3A6B | `[data-color="blue"]` |
| Claude (앰버) | #D97706 | `[data-color="claude"]` |
| Green | #059669 | `[data-color="green"]` |
| Purple | #7C3AED | `[data-color="purple"]` |
| Red | #DC2626 | `[data-color="red"]` |

## 다크 모드
- `[data-theme="dark"]`를 `<html>` 요소에 적용
- 자동(auto) 모드: 시스템 설정 따름 (prefers-color-scheme)
- 쿠키 `theme_mode`에 저장 (light/dark/auto)

## 타이포그래피
- 폰트: system-ui, -apple-system, sans-serif
- Hero 제목: 48px, weight 900
- 섹션 제목: 32px, weight 800
- 본문: 15px, line-height 1.8

## 레이아웃
- 최대 너비: 1200px (container)
- 가이드 페이지: 280px 사이드바 + 나머지 콘텐츠
- 그리드 시스템: CSS Grid 활용

## 반응형 브레이크포인트
| 브레이크포인트 | 용도 |
|---------------|------|
| 1280px | 대형 데스크톱 |
| 1024px | 태블릿 가로 |
| 768px | 태블릿 세로 |
| 480px | 모바일 |
| 360px | 소형 모바일 |

## 컴포넌트
- **Glassmorphism Navbar**: backdrop-filter blur(12px), 드롭다운 없이 플랫 직접 링크
- **CodeBlock**: 다크 배경(#1E293B), 복사 버튼 포함
- **TipBox**: tip(파랑), warning(노랑), important(보라), danger(빨강)
- **FeatureCard**: 아이콘 + 제목 + 설명
- **HeroCarousel**: 5초 자동 회전

## About 페이지 전용 컴포넌트
- **Vision Card**: 미션/비전/가치 3열 카드 (gradient 아이콘)
- **Team Card**: 아바타 + 이름 + 역할 배지 + 설명
- **Timeline**: 세로 타임라인 (dot + 카드)
- **FAQ Accordion**: `<details>` 기반 접기/펼치기
- **Tech Stack Card**: 아이콘 + 이름 + 설명

## 애니메이션
- fadeIn, fadeInUp, slideIn, scaleIn (CSS @keyframes)
- pulse, float (반복 애니메이션)
- transition: 0.3s ease 기본
