# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

개인 이력서/포트폴리오 페이지. Next.js 14 (App Router) + Tailwind CSS 기반 정적 사이트로, Firebase Hosting에 배포된다.

## 주요 명령어

- `npm run dev` — 개발 서버
- `npm run build` — 정적 빌드 (`output: "export"` → `out/` 디렉토리 생성)
- `npm run lint` — ESLint
- `npm run deploy` — 빌드 후 Firebase Hosting 배포

## 아키텍처

- **정적 사이트**: `next.config.js`에서 `output: "export"` 설정. 서버 사이드 기능(API Routes, SSR 등) 사용 불가
- **단일 페이지**: `src/app/page.tsx`가 전체 이력서 콘텐츠를 담고 있는 유일한 페이지
- **레이아웃**: `src/app/layout.tsx` → `Layout` 컴포넌트로 감싸는 구조
- **컴포넌트 구조**:
  - `Box/` — 레이아웃 블록 (BasicBox, ContentBox, TextBox, StickyBox, ImageBox, TwoSeperatedBox)
  - `Text/` — 텍스트 요소 (TopHeader, SubHeader, LinkText, Point, Chip)
  - `Layout/` — 페이지 레이아웃 (Layout, TopSection, BottomSection)
- **배럴 export**: `src/components/index.ts`에서 일부 컴포넌트만 re-export
- **스타일**: Tailwind CSS, `tailwind-merge` 사용. 글로벌 스타일은 `src/styles/globals.css`
- **경로 alias**: `@/` → `src/`
- **이미지**: `public/images/` 하위, `next/image`의 `unoptimized: true` 설정

## 이력서 페이지 구조 & 컴포넌트 사용 패턴

`page.tsx` 하나에 모든 섹션이 조합되며, 핵심 반복 패턴은 **`BasicBox` → `SubHeader` → `TwoSeperatedBox`(좌: 메타 / 우: 상세)**.

### 컴포넌트 계층

```
Layout (layout.tsx)
└── page.tsx
    ├── TopSection > TopHeader          ← 인트로
    ├── BasicBox > TextBox              ← 자기소개
    ├── BasicBox > SubHeader + TwoSeperatedBox > Text + LinkText  ← Contact
    ├── BasicBox > SubHeader + TwoSeperatedBox  ← Experience
    │   ├── StickyBox(hasTitlePoint)
    │   └── ContentBox > TextBox + TextList + ChipList
    ├── BasicBox > SubHeader + TwoSeperatedBox  ← Projects
    │   ├── StickyBox
    │   └── ContentBox > ImageBox + TextBox + TextList + ChipList
    ├── BasicBox > SubHeader + TwoSeperatedBox  ← Education
    └── BottomSection > Text + LinkText         ← Footer
```

### 컴포넌트 역할

- **`BasicBox`**: 각 섹션을 감싸는 `<section>`. `className` prop으로 커스텀 가능
- **`SubHeader`**: 섹션 제목. 앞에 `/` 포인트 기호를 오렌지색으로 표시
- **`TwoSeperatedBox`**: 2컬럼 그리드(`1fr 2fr`). 좌측 메타정보 + 우측 상세내용. 하단 구분선 포함
- **`StickyBox`**: 스크롤 시 따라다니는 좌측 고정 컬럼. `hasTitlePoint=true`면 회사명 옆 `*` 표시. 모바일에서 발광 테두리 효과 적용
- **`ContentBox`**: 프로젝트 단위 구분 블록. `last:border-b-0`으로 마지막 항목 구분선 제거
- **`TextBox`**: `title`(optional) + children 조합. 제목이 있으면 볼드 xl 텍스트로 렌더링
- **`ImageBox`**: 이미지를 flex 가로 배치
- **`Text`**: 범용 텍스트. `size`(sm/xl/2xl/3xl), `isBold`, `isPoint`(오렌지 강조) 조합
- **`TopHeader`**: 인사말을 `{ }` 중괄호(오렌지 포인트)로 감싸는 타이틀
- **`LinkText`**: `target="_blank"` 외부 링크. 오렌지색 밑줄
- **`TextList`**: 문자열 배열 → 리스트. prefix로 들여쓰기 레벨 구분: 없음=disc, `>`=circle(1단계), `>>`=square(2단계)
- **`ChipList`/`Chip`**: 기술 스택 태그. 회색 라운드, hover 시 오렌지색 전환
- **`Point`**: `*` 등 포인트 기호를 absolute 위치로 표시

### 미사용 컴포넌트

- **`Seo`**: Pages Router용 `next/head` 기반. App Router 전환 후 `layout.tsx`의 `metadata`로 대체되어 미사용
