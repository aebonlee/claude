# 히어로 형광펜 효과 개선

## 개요
히어로 섹션 타이틀의 하이라이트 텍스트(`마스터하세요` / `Claude AI`)에 형광펜 효과를 텍스트 영역에 딱 맞게 적용.

## 변경 파일
- `src/styles/hero.css` — `.hero-title-highlight` 클래스

## 변경 전
```css
.hero-title-highlight {
    background: linear-gradient(135deg, #FDE68A, #F59E0B);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```
- 그라데이션 텍스트 색상 효과 (텍스트 자체가 금색)

## 변경 후
```css
.hero-title-highlight {
    position: relative;
    display: inline;
    background: linear-gradient(to top, rgba(245, 158, 11, 0.35) 40%, transparent 40%);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 0 4px;
    margin: 0 -4px;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
}
```
- 실제 형광펜 스타일: 텍스트 하단 40%에 반투명 앰버 배경
- `padding: 0 4px` + `margin: 0 -4px`로 텍스트 영역에 딱 맞춤
- `box-decoration-break: clone`으로 줄바꿈 시에도 각 줄에 정확히 적용

## 적용 위치
- 한국어: "Claude AI의 모든 것을 **마스터하세요**"
- 영어: "Master Everything About **Claude AI**"
