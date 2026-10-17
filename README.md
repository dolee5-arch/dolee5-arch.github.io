# Green Energy & Catalysis Lab 홈페이지

서울시립대학교 화학공학과 그린에너지 및 촉매 연구실(지도교수 이두환) 홈페이지입니다.
GitHub Pages로 공개됩니다: https://dolee5-arch.github.io

## 파일 구성

| 파일 | 내용 |
|---|---|
| `index.html` | 첫 화면 (소개, 연구 요약, 최근 논문, 모집 안내) |
| `research.html` | 연구 분야 상세 |
| `publications.html` | 전체 논문 및 특허 |
| `members.html` | 교수, 학생, 졸업생 |
| `contact.html` | Join us: 모집 안내, 연락처, 지도 |
| `assets/style.css` | 공통 디자인 (색상, 글꼴, 배치) |
| `assets/img/` | 로고, 사진, 그림 |

## 자주 하는 수정

- **새 논문 추가**: `publications.html`에서 해당 연도 아래 `<a class="pub" ...>` 블록 하나를 복사해 제목, 저자, 학술지, 링크를 바꿉니다. 첫 화면의 "Recent papers"(`index.html`)도 함께 바꿉니다.
- **구성원 추가/졸업**: `members.html`에서 `<article class="person">` 블록을 복사하거나 지우고, 졸업생은 Alumni 목록에 `<li>` 한 줄을 추가합니다.
- **사진 넣기**: 사진을 `assets/img/`에 올리고 각 파일의 안내 주석대로 바꿉니다.

GitHub 웹 화면에서 파일을 열고 연필(Edit) 아이콘을 누르면 바로 수정할 수 있고, **Commit changes**를 누르면 1~2분 뒤 사이트에 반영됩니다.

## 디자인(style.css)을 바꾼 뒤에는

모든 HTML 파일의 `assets/style.css?v=날짜` 숫자를 새 날짜로 바꿔 주세요. 그래야 방문자 브라우저가 예전 디자인을 쓰지 않고 새 디자인을 불러옵니다.
