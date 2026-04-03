import{j as e}from"./markdown-nDXzyGI7.js";import{f as m,b as c,L as u}from"./vendor-C9mfkM5v.js";import{u as h}from"./index-BEEKUOUp.js";import{S as p}from"./SEOHead-DhJvCSIj.js";import"./supabase-BiHzSKx7.js";import"./pdf-ckwbz45p.js";const y={1:{id:1,category:"notice",title:"Claude Master 사이트 오픈!",titleEn:"Claude Master Site Launch!",author:"Admin",date:"2025-05-15",views:1520,body:`안녕하세요, Claude Master 사이트가 정식 오픈되었습니다!

이 사이트는 Claude를 체계적으로 학습할 수 있는 종합 플랫폼입니다.

## 주요 기능

- **Claude Code 가이드**: 설치부터 고급 활용까지
- **프롬프트 엔지니어링**: 효과적인 프롬프트 작성법
- **API 활용 가이드**: Anthropic API 개발 가이드
- **Agent SDK**: 자율 에이전트 구축 가이드
- **프롬프트 갤러리**: 바로 사용 가능한 템플릿
- **커뮤니티**: 사용자 간 정보 공유

많은 이용 부탁드립니다!`,bodyEn:`Hello, the Claude Master site is now officially open!

This site is a comprehensive platform for systematically learning Claude.

## Key Features

- **Claude Code Guide**: From installation to advanced usage
- **Prompt Engineering**: Effective prompt writing techniques
- **API Usage Guide**: Anthropic API development guide
- **Agent SDK**: Autonomous agent building guide
- **Prompt Gallery**: Ready-to-use templates
- **Community**: Information sharing among users

We look forward to your active participation!`,comments:[{id:1,author:"devkim",date:"2025-05-15",body:"드디어 오픈했군요! 기대됩니다.",bodyEn:"Finally launched! Looking forward to it."},{id:2,author:"promptmaster",date:"2025-05-15",body:"프롬프트 갤러리가 정말 유용하네요.",bodyEn:"The prompt gallery is really useful."},{id:3,author:"newbie123",date:"2025-05-16",body:"초보자도 쉽게 따라할 수 있는 가이드가 있어서 좋습니다!",bodyEn:"Great to have guides that beginners can easily follow!"}]}},b={title:"게시글 제목",titleEn:"Post Title",author:"user",date:"2025-05-10",views:100,body:"이 게시글은 샘플 데이터입니다. 실제 데이터베이스와 연결되면 실제 게시글이 표시됩니다.",bodyEn:"This is sample data. Real posts will be displayed once connected to a database.",comments:[{id:1,author:"commenter",date:"2025-05-10",body:"좋은 글이네요!",bodyEn:"Great post!"}]};function E(){const{id:o}=m(),{language:l}=h(),s=l==="ko",[i,n]=c.useState(""),t=y[o]||b,d=a=>{a.preventDefault(),i.trim()&&n("")};return e.jsxs("div",{className:"community-page",children:[e.jsx(p,{title:s?t.title:t.titleEn,description:s?t.title:t.titleEn,path:`/community/board/${o}`}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"post-detail",children:[e.jsxs("div",{className:"post-detail-header",children:[e.jsx("h1",{className:"post-detail-title",children:s?t.title:t.titleEn}),e.jsxs("div",{className:"post-detail-info",children:[e.jsx("span",{children:t.author}),e.jsx("span",{children:t.date}),e.jsxs("span",{children:[e.jsx("i",{className:"fa-solid fa-eye"})," ",t.views]})]})]}),e.jsx("div",{className:"post-detail-body",children:(s?t.body:t.bodyEn).split(`
`).map((a,r)=>e.jsxs("span",{children:[a,e.jsx("br",{})]},r))}),e.jsx("div",{className:"post-detail-actions",children:e.jsxs(u,{to:"/community/board",className:"btn btn-secondary btn-sm",children:[e.jsx("i",{className:"fa-solid fa-arrow-left"}),s?"목록으로":"Back to List"]})}),e.jsxs("div",{className:"comments-section",children:[e.jsx("h3",{className:"comments-title",children:s?`댓글 ${t.comments.length}개`:`${t.comments.length} Comments`}),t.comments.map(a=>e.jsxs("div",{className:"comment-item",children:[e.jsxs("div",{className:"comment-header",children:[e.jsx("span",{className:"comment-author",children:a.author}),e.jsx("span",{className:"comment-date",children:a.date})]}),e.jsx("div",{className:"comment-body",children:s?a.body:a.bodyEn})]},a.id)),e.jsxs("form",{className:"comment-form",onSubmit:d,children:[e.jsx("textarea",{placeholder:s?"댓글을 입력하세요...":"Write a comment...",value:i,onChange:a=>n(a.target.value)}),e.jsx("button",{type:"submit",className:"btn btn-primary btn-sm",style:{alignSelf:"flex-end"},children:s?"등록":"Post"})]})]})]})})]})}export{E as default};
