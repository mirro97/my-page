import { TextList, StickyBox, TextBox } from "@/components";
import BasicBox from "@/components/Box/BasicBox";
import ContentBox from "@/components/Box/ContentBox";
import ImageBox from "@/components/Box/ImageBox";
import TwoSeperatedBox from "@/components/Box/TwoSeperatedBox";
import BottomSection from "@/components/Layout/BottomSection";
import TopSection from "@/components/Layout/TopSection";
import Text from "@/components/Text";
import ChipList from "@/components/Text/Chip";
import LinkText from "@/components/Text/LinkText";
import SubHeader from "@/components/Text/SubHeader";
import TopHeader from "@/components/Text/TopHeader";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <TopSection>
        <TopHeader>
          안녕하세요, <br /> 프론트엔드 개발자 강수정입니다
          <Text size="3xl" isPoint>
            ;
          </Text>
        </TopHeader>
      </TopSection>

      {/* 소개 + Contact */}
      <BasicBox className="mx-auto max-w-[750px] w-[calc(100%-32px)] text-center">
        <TextBox>
          4년간 웹소설 플랫폼과 커머스 서비스에서 구조 설계부터 성능 최적화까지 프론트엔드 전반에
          주도적으로 기여해왔습니다. 기획 단계부터 참여하여 화면 구조와 데이터 흐름을 설계하고,
          Lighthouse 점수 65% 향상과 초기 로딩 1.5초 단축 등 눈에 보이는 개선을 만들어왔습니다.
        </TextBox>
        <TextBox>
          새로운 코드베이스를 빠르게 파악하고 문제를 명확히 정의하여 해결하는 것에 강점이 있습니다.
          체계적인 문서화와 원활한 커뮤니케이션을 기반으로, 팀과 함께 안정적인 서비스를 만들어가는
          것을 지향합니다. AI 도구를 실무에 적극 활용하여 개발 생산성과 코드 품질을 높이고 있습니다.
        </TextBox>
      </BasicBox>

      {/* 경력 */}
      <BasicBox>
        <SubHeader>Experience</SubHeader>

        {/* 미스터블루 */}
        <TwoSeperatedBox>
          <StickyBox
            hasTitlePoint
            title="미스터블루"
            content="Frontend Developer / 주임연구원"
            subContent="2023/04 - 재직중"
          />
          <div>
            {/* 미스터블루 서비스 운영 및 기능 개선 */}
            <ContentBox>
              <TextBox title="미스터블루 서비스 운영 및 기능 개선">
                <p>
                  다양한 코드베이스 기반 서비스(CMS/강툰/미스터블루 등) 유지보수 및 신규 기능 개발
                </p>
              </TextBox>
              <TextBox title="Work">
                <TextList
                  list={[
                    "Nuxt/Next 기반 미스터블루 서비스(CMS/강툰/미스터블루) 유지보수 및 신규 기능 개발",
                    ">정기배포 다수 참여 및 hotfix 이슈 대응으로 서비스 안정성 확보",
                    ">Next.js 기반 출석체크 이벤트 개발, 모바일·PC·앱 연동 이벤트 시스템 구축",
                    ">공통 컴포넌트(Checkbox, Dropdown, Pagination 등) 설계 및 Storybook 문서화",
                  ]}
                />
              </TextBox>
              <TextBox title="Technical">
                <ChipList list={["React", "Next.js", "Vue", "Nuxt.js", "TypeScript"]} />
              </TextBox>
            </ContentBox>

            {/* 회원가입/로그인 개편 */}
            <ContentBox>
              <TextBox title="회원가입/로그인 개편">
                <p>기존 회원가입·로그인 시스템 전면 개편을 통한 사용자 경험 및 보안 개선</p>
              </TextBox>
              <TextBox title="Work">
                <TextList
                  list={[
                    "react-hook-form + zod 기반 입력 검증 및 타입 안전성 확보",
                    "shadcn/ui 기반 공통 컴포넌트(Button, Drawer/Sheet 등) 도입 및 설계",
                    "이니시스 통합인증 연동 개발 및 관련 wiki 문서 작성",
                    "내정보/관리 페이지 구조 재설계 및 API 연동",
                    "충전/사용내역, 쿠폰 등록 등 마이페이지 하위 기능 개발",
                  ]}
                />
              </TextBox>
              <TextBox title="Technical">
                <ChipList
                  list={["React", "Next.js", "shadcn/ui", "react-hook-form", "zod", "Tailwind CSS"]}
                />
              </TextBox>
            </ContentBox>

            {/* 작품홈 성능 개선 */}
            <ContentBox>
              <TextBox title="작품홈 성능 개선 및 UI 구조 재설계">
                <TextList
                  list={[
                    "SSR 환경의 Skeleton 강제 노출 제거, CSS 정적 레이아웃 구조로 재설계",
                    "SafeArea 침범, padding, UI 깨짐 등 세부 안정성 이슈 개선",
                    ">Lighthouse 점수 60 → 99 (약 65%) 향상",
                    ">진입 속도 1.5초 단축으로 초기 로딩 경험 향상",
                  ]}
                />
              </TextBox>
              <TextBox title="Technical">
                <ChipList list={["Nuxt.js", "Vue"]} />
              </TextBox>
            </ContentBox>

            {/* 웹소설 플랫폼 신규 구축 */}
            <ContentBox>
              <TextBox title="웹소설 플랫폼 신규 구축">
                <p>신규 웹소설 플랫폼의 사용자 서비스 및 CMS/CP 관리자 페이지 설계·개발</p>
              </TextBox>
              <TextBox title="Work">
                <TextList
                  list={[
                    "사용자 서비스 설계 및 개발",
                    ">로그인/회원가입 플로우 재설계 및 react-hook-form + zod 기반 입력 유효성 검증 및 타입 안전성 확보",
                    ">캐시 충전 및 쿠폰 적용 흐름에 대한 상태 기반 UI/로직 분리 구조 설계 및 적용",
                    ">반응형 랜딩 페이지의 퍼블리싱 및 모듈화된 스타일 시스템 구성",
                    "CMS/CP 관리자 페이지 개발",
                    ">Vite 기반 프로젝트에서 관리자 기능을 위한 구조 설계 및 컴포넌트 체계 구축",
                    ">복잡한 폼 입력 구조에 대해 조건 기반 필드 노출, 입력값 유효성 검증, 에러 피드백 등 UX 개선 로직 설계",
                    ">Excel 기반 작품·볼륨 일괄 등록 기능 및 발송 대상자 정보 다운로드 기능 구현 (XLSX 포맷 처리)",
                    ">즉시발송/예약발송 등 다단계 상태 기반 액션 설계 및 조건별 UI 제어 로직 구현",
                    "컴포넌트 구조 리팩토링 및 기능 단위 분리로 유지보수성과 확장성 개선",
                    "GitHub Actions 기반 CI/CD 파이프라인 구축 및 브랜치 전략에 따른 자동 배포 환경 설계",
                  ]}
                />
              </TextBox>
              <TextBox title="Technical">
                <ChipList
                  list={[
                    "React",
                    "Next.js",
                    "Vite",
                    "Zustand",
                    "React Query",
                    "Ant Design",
                    "Tailwind CSS",
                    "zod",
                  ]}
                />
              </TextBox>
            </ContentBox>
          </div>
        </TwoSeperatedBox>

        {/* 오라클 컴퍼니 */}
        <TwoSeperatedBox>
          <StickyBox
            hasTitlePoint
            title="오라클 컴퍼니"
            content="Frontend Developer / 사원"
            subContent="2022/02 - 2023/02"
          />
          <div>
            <ContentBox>
              <TextBox title="베이커리 플랫폼 서비스 개발">
                <p>빵 예약·픽업 플랫폼의 랜딩페이지, 사용자 서비스, 백오피스 설계 및 개발</p>
              </TextBox>
              <TextBox title="Work">
                <TextList
                  list={[
                    "랜딩페이지 및 입점 신청 시스템 구축",
                    ">Firebase 기반 데이터 구조 및 Storage 설계로 입점 신청 정보 저장 및 이미지 업로드 기능 구현",
                    ">신청 데이터를 Google Sheets API로 자동 변환·연동하여 비개발자의 문서화 업무 효율화",
                    ">사업자 등록번호 조회(공공데이터 API), 주소 검색(다음 API) 등 외부 API 연동",
                    "사용자 서비스 설계 및 핵심 기능 개발",
                    ">서비스 기획 단계부터 참여하여 전체 화면 구조 및 데이터 흐름 설계 주도",
                    ">react-query 기반 무한 스크롤, 메뉴·매장 상세 페이지, 주문 내역 등 핵심 기능 개발",
                    ">Geolocation API 및 Kakao 주소 검색 API 연동으로 위치 기반 주소 설정 및 즐겨찾기 기능 구현",
                    ">카카오 로그인, 약관 동의, 닉네임 중복 확인 등 인증 절차 및 예외 대응 흐름 구현",
                    ">주문 금액 및 포인트 계산 로직 구현, Redux 기반 상태 관리 구조 설계",
                    ">프로토타입을 영업 프레젠테이션에 활용하여 베이커리 입점률 향상에 기여",
                    "백오피스 시스템 설계 및 개발",
                    ">입점사 및 상품·주문·정산 관리를 위한 시스템 구조 및 화면 흐름 설계 주도",
                    ">Atomic Design 기반 UI 컴포넌트 체계 설계 및 custom hook 추상화로 재사용성과 유지보수성 개선",
                    ">검색, 필터, 페이지네이션, 로그인 등 백오피스 핵심 기능 구현",
                    "styled-components 기반 공통 UI 컴포넌트 시스템 설계 및 반응형 퍼블리싱 구현",
                  ]}
                />
              </TextBox>
              <TextBox title="Technical">
                <ChipList
                  list={[
                    "React",
                    "Next.js",
                    "Redux",
                    "react-query",
                    "Firebase",
                    "styled-components",
                  ]}
                />
              </TextBox>
              <TextBox title="Portfolio">
                <LinkText href="https://www.notion.so/kangsujeong-frontend/5ce52cbbeade41688aa3b7418be6a5e7">
                  프로토타입
                </LinkText>
                {" / "}
                <LinkText href="https://www.notion.so/kangsujeong-frontend/704df30513d042af836406cba20b74e7">
                  백오피스
                </LinkText>
              </TextBox>
            </ContentBox>
          </div>
        </TwoSeperatedBox>

        {/* 오르카소프트 */}
        <TwoSeperatedBox>
          <StickyBox
            hasTitlePoint
            title="오르카소프트"
            content="Frontend Developer / 인턴"
            subContent="2021/03 - 2021/12"
          />
          <div>
            {/* 백오피스 템플릿 개발 */}
            <ContentBox>
              <TextBox title="백오피스 템플릿 개발">
                <p>관리자 페이지 개발 시 사용할 공통 백오피스 템플릿을 설계 및 개발했습니다.</p>
              </TextBox>
              <TextBox title="Work">
                <TextList
                  list={[
                    "Vue.js 및 Thymeleaf 기반의 공통 백오피스 템플릿 설계 및 개발, 다양한 기술 환경에서 재사용 가능한 구조 구현",
                    "입력 오류 방지 및 시각적 피드백 등 UX 요소를 반영한 사용자 인터랙션 설계",
                    "RESTful API 연동 기반 CRUD 기능 구성 및 반응형 레이아웃 대응",
                  ]}
                />
              </TextBox>
              <TextBox title="Technical">
                <ChipList list={["Vue.js", "JavaScript", "Thymeleaf", "Spring"]} />
              </TextBox>
            </ContentBox>

            {/* 식수관리 시스템 */}
            <ContentBox>
              <TextBox title="식수관리 시스템 리팩토링 및 마이그레이션">
                <p>
                  기존 PHP로 개발된 시스템을 리팩토링 및 마이그레이션했습니다. 일반 사용자 페이지와
                  관리자 페이지로 권한을 구분하여 개발했습니다.
                </p>
              </TextBox>
              <TextBox title="Work">
                <TextList
                  list={[
                    "PHP 기반 시스템을 Vue.js 및 Nuxt.js 기반으로 리팩토링 및 마이그레이션",
                    "식단 관리, 주간 메뉴 업로드, 통계 다운로드(xlsx) 등 주요 기능 개발",
                    "로그인 상태 및 권한 기반 화면 접근 제어 로직 구현",
                  ]}
                />
              </TextBox>
              <TextBox title="Technical">
                <ChipList list={["Vue.js", "Nuxt.js", "JavaScript", "Vuex"]} />
              </TextBox>
            </ContentBox>
          </div>
        </TwoSeperatedBox>
      </BasicBox>

      {/* 개인 프로젝트 */}
      <BasicBox>
        <SubHeader>Projects</SubHeader>
        <TwoSeperatedBox>
          <StickyBox title="나만의 포켓몬 도감" subContent="2023/02 - 2026/03" />
          <ContentBox>
            <ImageBox>
              <Image
                src="/images/projects/나만의포켓몬도감.png"
                alt="나만의 포켓몬 도감"
                width={100}
                height={100}
                className="flex-1 w-0 min-w-0 object-contain"
              />
            </ImageBox>
            <TextBox>
              <p>
                PokeAPI 기반 포켓몬 도감 웹앱. 다국어 지원, 무한 스크롤, 타입별 필터링, 검색, SEO
                최적화 등을 적용하여 지속적으로 개선 중인 사이드 프로젝트.
              </p>
            </TextBox>
            <TextBox title="Work">
              <TextList
                list={[
                  "Next.js 15 App Router + Edge Runtime 기반 Cloudflare Pages 배포",
                  "미들웨어 기반 다국어(한/영) 지원 및 React Query + Intersection Observer 무한 스크롤 구현",
                  "ISR + React Query 캐싱 전략 조합 및 이미지 Lazy Loading으로 성능 최적화",
                  "다국어 SEO 최적화 (메타데이터, 구조화된 데이터)",
                ]}
              />
            </TextBox>
            <TextBox>
              <Text size="sm">
                ※ 해당 프로젝트는 현재{" "}
                <LinkText href="https://my-pokepedia.pages.dev/en">이곳</LinkText>
                에서 테스트 가능합니다.
              </Text>
              <Text size="sm">
                ※ 코드는{" "}
                <LinkText href="https://github.com/mirro97/playground-w-ts-react-vite">
                  Github
                </LinkText>{" "}
                를 참고해주세요.
              </Text>
            </TextBox>
            <TextBox title="Technical">
              <ChipList
                list={[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "React Query",
                  "Tailwind CSS",
                  "Cloudflare Pages",
                ]}
              />
            </TextBox>
          </ContentBox>
        </TwoSeperatedBox>

        {/* React 예제 직접 테스트 해보기 */}
        <TwoSeperatedBox>
          <StickyBox title="React 예제 실습" subContent="2022/07" />
          <ContentBox>
            <ImageBox>
              <Image
                src="/images/projects/코드실습.PNG"
                alt="React 예제 실습"
                width={100}
                height={100}
                className="flex-1 w-0 min-w-0 object-contain"
              />
            </ImageBox>
            <TextBox>
              <p>
                React를 공부하며 개발한 예제 실습 페이지. 블로그와 연계하여 설명과 코드 예제를 함께
                제공.
              </p>
            </TextBox>
            <TextBox>
              <Text size="sm">
                ※ 해당 프로젝트는 현재{" "}
                <LinkText href="https://mirro97.github.io/react-playground-result/">이곳</LinkText>
                에서 테스트 가능합니다.
              </Text>
              <Text size="sm">
                ※ 코드는{" "}
                <LinkText href="https://github.com/mirro97/react-playground">Github</LinkText> 를
                참고해주세요.
              </Text>
            </TextBox>
            <TextBox title="Technical">
              <ChipList list={["React"]} />
            </TextBox>
          </ContentBox>
        </TwoSeperatedBox>
      </BasicBox>

      {/* 학력 */}
      <BasicBox>
        <SubHeader>Education</SubHeader>
        <TwoSeperatedBox>
          <Text size="2xl" isBold>
            강원대학교
          </Text>
          <div>
            <p>컴퓨터 정보통신 공학과</p>
            <Text size="sm">2016/03 - 2021/03</Text>
          </div>
        </TwoSeperatedBox>
      </BasicBox>

      {/* 연락처 */}
      <BasicBox>
        <SubHeader>Contact</SubHeader>
        <TwoSeperatedBox>
          <Text size="xl" isBold>
            Github
          </Text>
          <LinkText className="mb-7" href="https://github.com/mirro97">
            https://github.com/mirro97
          </LinkText>
        </TwoSeperatedBox>
        <TwoSeperatedBox>
          <Text size="xl" isBold>
            Blog
          </Text>
          <LinkText className="mb-7" href="https://nychicken.tistory.com/">
            https://nychicken.tistory.com/
          </LinkText>
        </TwoSeperatedBox>
        <TwoSeperatedBox>
          <Text size="xl" isBold>
            Email
          </Text>
          <p>mirro97@naver.com</p>
        </TwoSeperatedBox>
      </BasicBox>

      {/* footer */}
      <BottomSection>
        <Text size="sm">Front-End Engineer, sujeong.k</Text>
        <LinkText href="https://github.com/mirro97/my-page">📎 Check Code</LinkText>
      </BottomSection>
    </>
  );
}
