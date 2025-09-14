import { TextList, StickyBox, TextBox } from "@/components";
import BasicBox from "@/components/Box/BasicBox";
import ContentBox from "@/components/Box/ContentBox";
import ImageBox from "@/components/Box/ImageBox";
import TwoSeperatedBox from "@/components/Box/TwoSeperatedBox";
import BottomSection from "@/components/Layout/BottomSection";
import TopSection from "@/components/Layout/TopSection";
import Text from "@/components/Text";
import LinkText from "@/components/Text/LinkText";
import SubHeader from "@/components/Text/SubHeader";
import TopHeader from "@/components/Text/TopHeader";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <TopSection>
        <TopHeader>
          안녕하세요, <br /> 프론트엔드 개발자 강수정입니다 :&#41;
        </TopHeader>
      </TopSection>

      <BasicBox>
        <TextBox>
          시간과 공간의 제약 없이 사람들에게 가치를 전달할 수 있다는 점에 매력을 느껴 개발자가
          되었습니다. 현재 3년 차 프론트엔드 개발자로 일하고 있으며, 개발 이전에는 축제 및 행사
          기획·운영과 디자인 업무를 경험하며 다양한 직무의 사람들과 적극적으로 소통해왔습니다.
          이러한 다양한 협업 경험을 바탕으로 디자이너를 비롯한 팀원들과의 원활한 커뮤니케이션이
          가능하며, 사용자 경험을 고려한 UI/UX 설계와 서비스 기획에 강점이 있습니다.
        </TextBox>
        <TextBox>
          개인적으로 새로운 기술과 도전을 즐기며, 이전 프로젝트에서는 팀원들과 스터디를 운영해
          지식을 공유하고 함께 성장해왔습니다. 최근에는 ChatGPT, Cursor, Claude 등 다양한 AI 도구를
          실무에 적극적으로 활용하여 개발 생산성과 코드 품질을 향상시키는 데 집중하고 있습니다.
          빠르게 변화하는 개발 환경 속에서 새로운 기술을 능동적으로 흡수하고 적용하는 능력을
          강점으로 삼고 있습니다.
        </TextBox>
      </BasicBox>

      {/* 경력 */}
      <BasicBox>
        <SubHeader>Experience</SubHeader>
        {/* #미스터블루 */}
        <TwoSeperatedBox>
          <StickyBox
            hasTitlePoint
            title="미스터블루"
            content="Frontend Developer / 주임연구원"
            subContent="2023/04 - 재직중"
          />
          <div>
            {/* 미스터블루 1 */}
            <ContentBox>
              <TextBox title="미스터블루 서비스 유지보수 및 기능 개선">
                <p>
                  다양한 코드베이스 기반 서비스(CMS/강툰/미스터블루 등)의 UI 구조 파악 및 신규 기능
                  유지보수 수행
                </p>
              </TextBox>
              <TextBox title="Work">
                <TextList
                  list={[
                    "신규 사업건 개발(이벤트, 신규 페이지 등) 및 레거시 마이그레이션",
                    "기능 추가/변경 요청에 대한 영향 범위 분석 및 안정성 확보 중심의 개발 진행",
                    "기술 문서 작성 및 기획/디자인 팀과의 유연한 커뮤니케이션을 통한 서비스 품질 유지 기여",
                  ]}
                />
              </TextBox>
              <TextBox title="Technical">
                <p> React, Next.js, Vue, Nuxt.js, TypeScript</p>
              </TextBox>
            </ContentBox>
            {/* 미스터블루 2 */}
            <ContentBox>
              <TextBox title="작품홈 성능 개선 및 UI 구조 재설계">
                <TextList
                  list={[
                    "SSR 환경에서 레거시 코드 기반의 기기 너비 계산 로직으로 발생한 모바일 UI 깨짐 이슈의 근본 원인을 분석 및 제거",
                    "기존 스켈레톤 강제 노출 방식 대신 CSS 정적 레이아웃 구조로 재설계하여 렌더링 안정성과 유지보수성 개선",
                    "복잡한 UI 계산 구조 단순화 및 불필요 연산 제거로 Lighthouse 성능 점수 60점에서  99점 상승, 진입 속도 약 1.5초 단축",
                  ]}
                />
              </TextBox>
              <TextBox title="Technical">
                <p>Nuxt.js, Vue</p>
              </TextBox>
            </ContentBox>
            {/* 미스터블루 3 */}
            <ContentBox>
              <TextBox title="웹소설 플랫폼 CMS/CP 관리자 페이지 개발">
                <p>신규 웹소설 플랫폼의 CMS/CP 관리자 페이지를 개발했습니다.</p>
              </TextBox>
              <TextBox title="Work">
                <TextList
                  list={[
                    "Vite 기반 프로젝트에서 다양한 관리자 기능을 위한 구조 설계 및 컴포넌트 체계 구축",
                    "복잡한 폼 입력 구조에 대해 조건 기반 필드 노출, 입력값 유효성 검증, 툴팁 및 에러 피드백 등 UX 개선 로직 설계",
                    "Excel 기반 작품·볼륨 일괄 등록 기능 및 발송 대상자 정보 다운로드 기능 구현 (XLSX 포맷 처리)",
                    "즉시발송/예약발송 등 다단계 상태 기반 액션 설계 및 조건별 UI 제어 로직 구현",
                    "상태 관리 및 비동기 데이터 처리 구조 정리를 통해 유지보수성과 기능 확장성 확보",
                  ]}
                />
              </TextBox>
              <TextBox title="Technical">
                <p>React, Vite, Ant Design, Zustand, React Query, Axios</p>
              </TextBox>
            </ContentBox>
            {/* 미스터블루 4 */}
            <ContentBox>
              <TextBox title="웹소설 플랫폼 신규 개발">
                <p>신규 웹소설 플랫폼의 개발을 담당했습니다.</p>
              </TextBox>
              <TextBox title="Work">
                <TextList
                  list={[
                    "로그인/회원가입 플로우 재설계 및 react-hook-form + zod 기반으로 입력 유효성 검증 로직 및 타입 안전성 확보",
                    "캐시 충전 및 쿠폰 적용 흐름에 대한 상태 기반 UI/로직 분리 구조 설계 및 적용",
                    "사용자 서비스 전반의 컴포넌트 구조 리팩토링 및 기능 단위 분리로 유지보수성과 확장성 개선",
                    "GitHub Actions 기반 CI/CD 파이프라인 구축 및 브랜치 전략에 따른 자동 배포 환경 설계",
                    "반응형 랜딩 페이지의 퍼블리싱 및 모듈화된 스타일 시스템 구성",
                  ]}
                />
              </TextBox>
              <TextBox title="Technical">
                <p> React, Next.js, Zustand, Tailwind CSS, React Query, Axios, zod</p>
              </TextBox>
            </ContentBox>
          </div>
        </TwoSeperatedBox>
        {/* # 오라클컴퍼니 */}
        <TwoSeperatedBox>
          <StickyBox
            hasTitlePoint
            title="오라클 컴퍼니"
            content="Frontend Developer / 사원"
            subContent="2022/02 - 2023/02"
          />
          <div>
            {/* 오라클컴퍼니 1 */}
            <ContentBox>
              <ImageBox>
                <Image
                  src="/images/proposal/홈_00.png"
                  alt="베이커리 플랫폼 제안서 홈 화면"
                  width={100}
                  height={100}
                  className="flex-1 w-0 min-w-0 object-contain"
                />
                <Image
                  src="/images/proposal/제안서.png"
                  alt="베이커리 플랫폼 제안서 입점신청서 화면"
                  width={100}
                  height={100}
                  className="flex-1 w-0 min-w-0 object-contain"
                />
              </ImageBox>
              <TextBox title="베이커리 랜딩페이지 및 입점 신청 페이지 개발">
                <p>
                  베이커리 플랫폼을 홍보할 수 있는 랜딩 페이지와 입점 신청을 받을 수 있는 페이지를
                  설계 및 개발했습니다.
                </p>
              </TextBox>
              <TextBox title="Work">
                <TextList
                  list={[
                    "Firebase 기반 데이터 구조 및 Storage 설계로 입점 신청 정보 저장 및 이미지 업로드 기능 구현",
                    "신청 데이터를 Google Sheets API로 자동 변환·연동하여 비개발자의 문서화 업무 효율화",
                    "사업자 등록번호 조회(공공데이터 API), 주소 검색(다음 API) 등 외부 API 연동",
                    "styled-components 기반 공통 UI 컴포넌트 시스템 설계 및 반응형 퍼블리싱 구현",
                  ]}
                />
              </TextBox>
              <TextBox title="Technical">
                <p> React, Next.js, Firebase, styled-components, Axios</p>
              </TextBox>
            </ContentBox>

            {/* 오라클컴퍼니 2 */}
            <ContentBox>
              <ImageBox>
                <Image
                  src="/images/bbanggle/홈.png"
                  alt="베이커리 플랫폼 개발"
                  width={100}
                  height={100}
                  className="flex-1 w-0 min-w-0 object-contain"
                />
              </ImageBox>
              <TextBox title="베이커리 플랫폼 프로토타입 & 메인 프로덕트">
                <p>
                  빵 예약 및 픽업서비스를 제공하는 플랫폼의 프로토타입과 메인 프로덕트를 설계 및
                  개발 했습니다. 프로토타입은 영업 프레젠테이션 에 사용되어 베이커리 입점률 향상에
                  기여했습니다.
                </p>
              </TextBox>
              <TextBox title="Work">
                <TextList
                  list={[
                    "서비스 기획 단계부터 참여하여 전체 화면 구조 및 데이터 흐름 설계 주도",
                    "react-query 기반 무한 스크롤, 메뉴·매장 상세 페이지, 주문 내역 등 핵심 기능 개발",
                    "Geolocation API 및 Kakao 주소 검색 API 연동으로 위치 기반 주소 설정 및 즐겨찾기 기능 구현",
                    "카카오 로그인, 약관 동의, 닉네임 중복 확인 등 인증 절차 및 예외 대응 흐름 구현",
                    "주문 금액 및 포인트 계산 로직 구현, Redux 기반 상태 관리 구조 설계",
                    "Firebase Hosting으로 배포 및 접속자 수 기반 기능 개선 논의 지원",
                  ]}
                />
              </TextBox>
              <TextBox title="Technical">
                <p>React, Next.js, Redux, react-query, Firebase, styled-components</p>
              </TextBox>

              <TextBox title="Portfolio">
                해당 프로젝트는{" "}
                <LinkText href="https://www.notion.so/kangsujeong-frontend/5ce52cbbeade41688aa3b7418be6a5e7">
                  이곳
                </LinkText>
                에서 확인 가능합니다.
              </TextBox>
            </ContentBox>

            {/* 오라클컴퍼니 3 */}
            <ContentBox>
              <TextBox title="베이커리 플랫폼 백오피스">
                <p>
                  베이커리 서비스를 총 관리할 수 있는 백오피스를 개발했습니다. 기획팀과 함께 기능
                  기획에 참여하여 다양한 UC 를 고려한 기획과 구조를 설계 했습니다.
                </p>
              </TextBox>
              <TextBox title="Work">
                <TextList
                  list={[
                    "입점사 및 상품·주문·정산 관리를 위한 백오피스 시스템 구조 및 화면 흐름 설계 주도",
                    "Atomic Design 기반 UI 컴포넌트 체계 설계 및 custom hook 추상화로 재사용성과 유지보수성 개선",
                    "검색, 필터, 페이지네이션, 로그인 등 백오피스 핵심 기능 구현",
                    "기획·프론트·백엔드 협업을 통해 기능 요구사항 정립 및 개발 방향 조율",
                  ]}
                />
              </TextBox>
              <TextBox title="Technical">
                <p>React, Next.js, Redux, styled-components</p>
              </TextBox>
              <TextBox title="Portfolio">
                해당 프로젝트는{" "}
                <LinkText href="https://www.notion.so/kangsujeong-frontend/704df30513d042af836406cba20b74e7">
                  이곳
                </LinkText>
                에서 확인 가능합니다.
              </TextBox>
            </ContentBox>
          </div>
        </TwoSeperatedBox>
        {/* # 오르카소프트 */}
        <TwoSeperatedBox>
          <StickyBox
            hasTitlePoint
            title="오르카소프트"
            content="Frontend Developer / 인턴"
            subContent="2021/03 - 2021/12"
          />
          <div>
            {/* 오르카소프트 1 */}
            <ContentBox>
              <TextBox title="백오피스 템플릿 개발 ">
                <p>관리자 페이지를 개발할 때 사용하게 될 기본 템플릿 페이지 개발</p>
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
                <p>Vue.js, JavaScript, Thymeleaf, Spring</p>
              </TextBox>
            </ContentBox>

            {/* 오르카소프트 2 */}
            <ContentBox>
              <TextBox title="식수관리 시스템 리펙토링 및 마이그레이션">
                <p>
                  기존 php 로 개발된 시스템을 새롭게 리펙토링 및 마이그레이션 했습니다. 일반 사용자
                  페이지와 관리자 페이지로 권한을 구분하여 개발했습니다
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
                <p>Vue.js, Nuxt.js, JavaScript, Vuex</p>
              </TextBox>
            </ContentBox>
          </div>
        </TwoSeperatedBox>
      </BasicBox>

      {/* 개인프로젝트 및 경험 */}
      <BasicBox>
        <SubHeader>Projects & Other Experiences</SubHeader>
        {/* 나만의 포켓몬 도감 */}
        <TwoSeperatedBox>
          <StickyBox title="나만의 포켓몬 도감" subContent="2023/02" />
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
                TypeScript 와 Vite, Recoil, Tailwind 를 직접 적용해보고, 공부하기 위해 개발한
                페이지입니다.
              </p>
            </TextBox>
            <TextBox>
              <TextList
                list={[
                  "recoil 을 사용해 현재 적용된 언어의 상태 관리를 함으로써 영어와 한국어 지원",
                  "웹의 성능을 높이기 위해 react-lazy-load-image-component 라이브러리를 사용해 lazyloading 처리, 트래픽 최소화",
                  "react-query를 사용해 무한 스크롤 기능 적용",
                ]}
              />
            </TextBox>
            <TextBox>
              <Text size="sm">
                ※ 해당 프로젝트는 현재 <LinkText href="https://my-pokemon.web.app/">이곳</LinkText>
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
              <p>React, Vite, React-Query, Recoil, Tailwind, TypeScript, Firebase</p>
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
              <p>처음 React 를 공부하며 개발한 페이지입니다.</p>
              <p>
                지식은 나눌때 가장 가치 있는 것이라 믿기 때문에 많은 사람들이 함께 공부했으면
                좋겠다는 마음으로 개발하게 되었습니다.
              </p>
              <p>
                자세한 설명과 코드 예제는{" "}
                <LinkText href="https://nychicken.tistory.com/category/React?page=1">
                  블로그
                </LinkText>
                에 업로드 하였습니다.
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
              <p>React</p>
            </TextBox>
          </ContentBox>
        </TwoSeperatedBox>
        <TwoSeperatedBox>
          <StickyBox title="Custom Toast Message" subContent="2021/06" />
          <ContentBox>
            <ImageBox>
              <Image
                src="/images/projects/CustomToastMessage.png"
                alt="커스텀 토스트 메시지"
                width={100}
                height={100}
                className="flex-1 w-0 min-w-0 object-contain"
              />
            </ImageBox>

            <TextBox>
              <p>Vue.js 를 사용해 개발한 페이지 입니다.</p>
              <p>
                사용자 커스텀이 가능한 컴포넌트를 공부하고자 개발하게 되었습니다. 배경색, 노출 위치,
                시간, 애니메이션, 제목, 메시지의 커스텀이 가능합니다.
              </p>
            </TextBox>
            <TextBox>
              <Text size="sm">
                ※ 해당 프로젝트는 현재{" "}
                <LinkText href="https://mirro97.github.io/CutomToastMessage/">이곳</LinkText>
                에서 테스트 가능합니다.
              </Text>
            </TextBox>

            <TextBox title="Technical">
              <p>Vue</p>
            </TextBox>
          </ContentBox>
        </TwoSeperatedBox>
      </BasicBox>

      {/* 연락처 */}
      <BasicBox>
        <SubHeader>Contact</SubHeader>
        <TwoSeperatedBox>
          <Text size="xl" isBold>
            Github
          </Text>
          <p className="mb-7"> https://github.com/mirro97</p>
        </TwoSeperatedBox>
        <TwoSeperatedBox>
          <Text size="xl" isBold>
            Blog
          </Text>
          <p className="mb-7">https://nychicken.tistory.com/</p>
        </TwoSeperatedBox>
        <TwoSeperatedBox>
          <Text size="xl" isBold>
            Email
          </Text>
          <p className="mb-7">mirro97@naver.com</p>
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
            <p>컴퓨터 정보통신 공학과 </p>
            <Text size="sm">2016/03 - 2021/03</Text>
          </div>
        </TwoSeperatedBox>
      </BasicBox>

      {/* footer */}
      <BottomSection>
        <Text size="sm">Next.js 13.2.4 / React.js 18.2.0 / Tailwind 3.2.7</Text>
        <Text size="sm">Front-End Engineer, sujeong.k</Text>
        <LinkText href="https://github.com/mirro97/my-page">📎 Check Code</LinkText>
      </BottomSection>
    </>
  );
}
