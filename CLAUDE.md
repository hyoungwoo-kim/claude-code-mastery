# CLAUDE.md — 프로젝트 가이드

## 프로젝트 개요
김빅아이티(BIGIT 이사) 개인 개발자 포트폴리오 / 이력서 사이트.
순수 HTML + CSS + JavaScript로 구성된 정적 사이트이며, GitHub Pages로 배포된다.

## 배포 정보
- **GitHub 저장소**: https://github.com/hyoungwoo-kim/claude-code-mastery
- **GitHub Pages URL**: https://hyoungwoo-kim.github.io/claude-code-mastery/
- **배포 브랜치**: `main` / Folder: `/ (root)`
- 루트 `index.html`은 `resume/`로 자동 리다이렉트

## 디렉토리 구조
```
claude-code-mastery/
├── index.html          # 루트 리다이렉트 (→ resume/)
├── CLAUDE.md           # 이 파일
└── resume/
    ├── index.html      # 메인 포트폴리오 페이지
    ├── css/
    │   └── style.css   # 전체 스타일 (다크테마, 오렌지 포인트)
    └── js/
        └── main.js     # 스크롤 애니메이션, 메뉴, 폼 처리
```

## 디자인 시스템
- **테마**: 다크 배경 + 오렌지/레드 포인트 컬러
- **주요 색상**
  - 배경: `#0d0d0d`, `#141414`, `#1a1a1a`
  - 포인트: `#e8472a` (accent), `#ff6b4a` (accent2)
  - 텍스트: `#e0e0e0` / 서브: `#888`
- **폰트**: Poppins (영문), Noto Sans KR (한글)
- **외부 CDN**
  - Font Awesome 6.4.0 (아이콘)
  - Devicons (기술 스택 로고)
  - Google Fonts
  - Unsplash (프로젝트 이미지)

## 페이지 섹션 구성
| 섹션 | ID | 설명 |
|------|----|------|
| Hero | `#home` | 인트로, 이름/직함, 기술스택 티커 |
| About | `#about` | 자기소개, 서비스 항목, 통계 |
| Skills | `#skills` | 기술스택 + 숙련도 바 |
| Experience | `#experience` | 경력 타임라인 |
| Projects | `#projects` | 프로젝트 가로형 카드 (이미지 포함) |
| Contact | `#contact` | 연락처 + 문의 폼 |

## 인물 정보
- **이름**: 김빅아이티
- **직함**: 이사 / 풀스택 개발자
- **회사**: BIGIT (2019.01 ~ 현재)
- **담당**: PM, 영업(SALES), 풀스택 개발
- **기술스택**: React, Java, Python, Oracle, MariaDB, PostgreSQL
- **이메일**: hwkim00@gmail.com
- **GitHub**: hwkim

## 주요 프로젝트
1. 출입국외국인청 ETA(전자여행허가)시스템 구축 — Java, Oracle, 공공 SI
2. KODATA SOHO시스템 구축 — Python, MariaDB, 데이터 분석
3. 아파트테크 세무서비스 구축 — React, PostgreSQL, 핀테크

## 언어 및 커뮤니케이션 규칙
- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

## 작업 규칙
- 파일 수정 후 반드시 `git add → git commit → git push origin main` 수행
- 커밋 메시지는 한글로 작성
- 새 파일 생성은 최소화, 기존 파일 수정 우선
- 반응형(모바일) 항상 함께 적용
- 외부 이미지는 Unsplash 무료 이미지 사용
