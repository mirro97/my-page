import BodySection from "@/components/Layout/BodySection";
import TopSection from "@/components/Layout/TopSection";
import TwoSeperatedBox from "@/components/Box/TwoSeperatedBox";
import TopHeader from "@/components/Text/TopHeader";
import BasicBox from "@/components/Box/BasicBox";
import TextBox from "@/components/Box/TextBox";
import SubHeader from "@/components/Text/SubHeader";
import BigBoldText from "@/components/Text/BigBoldText";
import BigText from "@/components/Text/BigText";
import BottomSection from "@/components/Layout/BottomSection";
import SmallText from "@/components/Text/SmallText";
import ContentBox from "@/components/Box/ContentBox";
import Point from "@/components/Text/Point";
import ImageBox from "@/components/Box/ImageBox";
import LinkText from "@/components/Text/LinkText";
import StickyBox from "@/components/Box/StickyBox";

export default function Home() {
  return (
    <>
      <TopSection>
        <TopHeader>
          <Point>&#123;</Point> <br />
          &nbsp;&nbsp; 안녕하세요, <br /> &nbsp;&nbsp; 프론트엔드 개발자
          강수정입니다 :&#41; <br />
          <Point>&#125;</Point>
        </TopHeader>
      </TopSection>

      <BodySection>
        <BasicBox>
          <TextBox>
            시간/공간에 구애 받지 않고 사람들에게 다가갈 수 있는 웹에 매력을
            느껴 개발에 푹 빠지게 되었습니다. 이전에는 축제 및 행사 기획 업무를
            담당하며 기획, 디자인의 경험을 쌓았습니다. 이러한 경험은 디자이너와
            협업을 할 때 적극적인 커뮤니케이션을 가능하게 하여 사용자 경험
            최적화에 도움을 주었습니다. 사용성을 고려한 UI/UX 설계와 기획을 위해
            항상 고민하고 있습니다.
          </TextBox>
          <TextBox>
            함께 성장하는 것에 관심이 많습니다. 개인 블로그를 운영하고 있으며,
            React.js 를 공부하며 개발한 예제를 직접 테스트해 볼 수 있는 웹
            페이지를 호스팅 하기도 했습니다. 현재는 매일 40명씩은 꾸준히
            방문하는 블로그가 되었습니다.
          </TextBox>
          <TextBox>
            개인적으로 새로운 기술과 도전을 좋아합니다. 이전 프로젝트에서 팀원과
            스터디를 운영하며 지식을 공유하며 서로의 역량을 향상시켰습니다.
            현재는 Typescript 와 Clean Code 를 공부하고 있으며 협력하기 좋은
            팀원이자, 한사람 이상의 몫을 해낼 수 있는 개발자가 목표입니다.
          </TextBox>
        </BasicBox>

        {/* 경력 */}
        <BasicBox>
          <SubHeader>
            <Point>/</Point> Experience
          </SubHeader>
          {/* # 오라클컴퍼니 */}
          <TwoSeperatedBox>
            <StickyBox>
              <BigBoldText size="2xl">
                오라클 컴퍼니<Point>*</Point>
              </BigBoldText>
              <BigText>Frontend Developer / 사원</BigText>
              <SmallText>2022/02 - 2023/02</SmallText>
            </StickyBox>
            <div>
              {/* 오라클컴퍼니 1 */}
              <ContentBox>
                <ImageBox>
                  <div>
                    <img
                      src="/images/proposal/홈_00.png"
                      alt="베이커리 플랫폼 제안서 홈 화면"
                    />
                  </div>
                  <div>
                    <img
                      src="/images/proposal/제안서.png"
                      alt="베이커리 플랫폼 제안서 입점신청서 화면"
                    />
                  </div>
                </ImageBox>
                <TextBox>
                  <BigBoldText size="xl">
                    베이커리 제안서/입점 신청 페이지
                  </BigBoldText>
                  <p>
                    베이커리 플랫폼을 홍보할 수 있는 랜딩 페이지와 입점 신청을
                    받을 수 있는 페이지를 설계 및 개발했습니다.
                  </p>
                </TextBox>
                <TextBox>
                  <BigBoldText size="xl">Work</BigBoldText>
                  <div className="space-y-2">
                    <p>- 페이지 기획 및 기능 정의</p>
                    <p>
                      - firebase 에 업로드 된 입점 데이터를 가공 및 추출하여
                      구글 spread sheets에 연결시킴으로 비개발자 직원의
                      문서작업의 효율을 높임
                    </p>
                    <p>- Styled-components 를 사용한 공통 컴포넌트 구축 </p>
                    <p>
                      - 미디어 쿼리를 활용하여 모든 기기에 최적화된 반응형
                      페이지 개발
                    </p>
                  </div>
                </TextBox>
                <TextBox>
                  <BigBoldText size="xl">Technical</BigBoldText>
                  <p>React, Nextjs, firebase, styled-components</p>
                </TextBox>
              </ContentBox>

              {/* 오라클컴퍼니 2 */}
              <ContentBox>
                <ImageBox>
                  <div>
                    <img
                      src="/images/bbanggle/홈.png"
                      alt="베이커리 플랫폼 메인 프로덕트"
                    />
                  </div>
                </ImageBox>
                <TextBox>
                  <BigBoldText size="xl">
                    베이커리 플랫폼 프로토타입 & 메인 프로덕트
                  </BigBoldText>
                  <p>
                    빵 예약 및 픽업서비스를 제공하는 플랫폼의 프로토타입과 메인
                    프로덕트를 설계 및 개발 했습니다. 프로토타입은 영업
                    프레젠테이션 에 사용되어 베이커리 입점률 향상에
                    기여했습니다.
                  </p>
                </TextBox>
                <TextBox>
                  <BigBoldText size="xl">Work</BigBoldText>
                  <div className="space-y-2">
                    <p>- 전반적인 컴포넌트 작성 및 프로젝트 셋팅</p>
                    <p>
                      - react-query 를 사용한 무한 스크롤 적용을 통해 사용자
                      경험 향상
                    </p>
                    <p>
                      - Redux + 카카오 api 를 사용해 현재 위치에 대한 주소 정보
                      저장 및 위치 데이터 관리
                    </p>
                    <p>
                      - Git branch 를 통해 프로토 타입과 메인 프로덕트를
                      분리시켜 버전 관리 수행
                    </p>
                    <p>
                      - 서비스 기획 및 기능 정의에 함께 참여하여 사용자 UX/UI
                      개선
                    </p>
                  </div>
                </TextBox>
                <TextBox>
                  <BigBoldText size="xl">Technical</BigBoldText>
                  <p>React, Redux, Nextjs, firebase, styled-components</p>
                </TextBox>

                <TextBox>
                  <BigBoldText size="xl">Portfolio</BigBoldText>
                  해당 프로젝트는{" "}
                  <LinkText href="https://www.notion.so/kangsujeong-frontend/5ce52cbbeade41688aa3b7418be6a5e7">
                    이곳
                  </LinkText>
                  에서 확인 가능합니다.
                </TextBox>
              </ContentBox>

              {/* 오라클컴퍼니 3 */}
              <ContentBox>
                <TextBox>
                  <BigBoldText size="xl">베이커리 플랫폼 백오피스</BigBoldText>
                  <p>
                    베이커리 서비스를 총 관리할 수 있는 백오피스를 개발했습니다.
                    기획팀과 함께 기능 기획에 참여하여 다양한 UC 를 고려한
                    기획과 구조를 설계 했습니다.
                  </p>
                </TextBox>
                <TextBox>
                  <BigBoldText size="xl">Work</BigBoldText>
                  <div className="space-y-2">
                    <p>
                      - 기획팀과 백엔드, 프론트 팀의 주기적인 회의 진행을 통해
                      기획, 개발의 방향성 제시 및 의견 조율
                    </p>
                    <p>
                      - 화면 설계 및 라우팅 구축. 전체적인 프로젝트의 구조를
                      잡음
                    </p>
                    <p>
                      - custom hook 공통 모듈을 활용해 효율적인 코드관리를
                      하고자 함
                    </p>
                    <p>- 검색, 필터링, 페이지 네비게이션, 로그인 구현</p>
                  </div>
                </TextBox>
                <TextBox>
                  <BigBoldText size="xl">Technical</BigBoldText>
                  <p>React, Redux, Nextjs, styled-components</p>
                </TextBox>
                <TextBox>
                  <BigBoldText size="xl">Portfolio</BigBoldText>
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
            <StickyBox>
              <BigBoldText size="2xl">
                오르카소프트<Point>*</Point>
              </BigBoldText>
              <BigText>Frontend Developer / 인턴</BigText>
              <SmallText>2021/03 - 2021/12</SmallText>
            </StickyBox>
            <div>
              {/* 오르카소프트 1 */}
              <ContentBox>
                <TextBox>
                  <BigBoldText size="xl">
                    백오피스를 개발할 때 사용하게 될 기본 템플릿 페이지 개발
                  </BigBoldText>
                  <p>
                    관리자 페이지를 개발할 때 사용하게 될 기본 템플릿 페이지
                    개발
                  </p>
                </TextBox>
                <TextBox>
                  <BigBoldText size="xl">Work</BigBoldText>
                  <div className="space-y-2">
                    <p>
                      - Vue.js 와 thymeleaf 로 각각 2가지 버전의 관리자 페이지
                      개발
                    </p>
                    <p>- 미디어 쿼리를 사용하여 반응형 웹으로 제작</p>
                    <p>- UX를 고려한 다양한 사용자 편의 제공</p>
                    <p>- 관리자 페이지 thymeleaf와 spring으로 마이그레이션</p>
                  </div>
                </TextBox>
                <TextBox>
                  <BigBoldText size="xl">Technical</BigBoldText>
                  <p>HTML5, Css, Javascript, Vue.js, thymeleaf, spring</p>
                </TextBox>
              </ContentBox>

              {/* 오르카소프트 2 */}
              <ContentBox>
                <TextBox>
                  <BigBoldText size="xl">
                    식수관리 시스템 리펙토링 및 마이그레이션
                  </BigBoldText>
                  <p>
                    기존 php 로 개발된 시스템을 새롭게 리펙토링 및 마이그레이션
                    했습니다. 일반 사용자 페이지와 관리자 페이지로 권한을
                    구분하여 개발했습니다
                  </p>
                </TextBox>
                <TextBox>
                  <BigBoldText size="xl">Work</BigBoldText>
                  <div className="space-y-2">
                    <p>
                      - 식수관리 및 통계 .xlsx 다운로드, 주간 메뉴 업로드 기능
                      개발
                    </p>
                    <p>- 화면 깜빡임을 최소화하며, UX 개선</p>
                    <p>- restful api 를 통해 서버와 통신하며 CRUD 구현</p>
                    <p>- Vuex를 사용하여 로그인 상태 관리</p>
                  </div>
                </TextBox>
                <TextBox>
                  <BigBoldText size="xl">Technical</BigBoldText>
                  <p>HTML5, Css, Javascript, Vue.js, Nuxt.js</p>
                </TextBox>
              </ContentBox>

              {/* 오르카소프트 3 */}
              <ContentBox>
                <TextBox>
                  <BigBoldText size="xl">
                    VR 간호 시험 관리 관리자 시스템
                  </BigBoldText>
                  <p>
                    VR 간호시험 결과 확인 및 학생, 선생님을 관리하는 웹 페이지를
                    개발했습니다.
                  </p>
                </TextBox>
                <TextBox>
                  <BigBoldText size="xl">Work</BigBoldText>
                  <div className="space-y-2">
                    <p>- 화면 설계/디자인을 포함한 프론트 단의 기능 개발</p>
                    <p>
                      - router-navigation 을 통해 슈퍼관리자와 일반관리자에게
                      보여지는 화면 통제
                    </p>
                    <p>- restful api 를 통해 서버와 통신하며 CRUD 구현</p>
                    <p>
                      - 학생 성적 데이터와 학생 정보 excel로 다운로드 가능 개발
                    </p>
                  </div>
                </TextBox>
                <TextBox>
                  <BigBoldText size="xl">Technical</BigBoldText>
                  <p>HTML5, Css, Javascript, Vue.js</p>
                </TextBox>
              </ContentBox>
            </div>
          </TwoSeperatedBox>
        </BasicBox>

        {/* 개인프로젝트 및 경험 */}
        <BasicBox>
          <SubHeader>
            <Point>/</Point> Projects & Other Experiences
          </SubHeader>
          {/* 나만의 포켓몬 도감 */}
          <TwoSeperatedBox>
            <div className="mb-10 ">
              <BigBoldText size="2xl">나만의 포켓몬 도감</BigBoldText>
              <SmallText>2023/02</SmallText>
            </div>
            <div>
              <ContentBox>
                <ImageBox>
                  <div>
                    <img
                      src="/images/projects/나만의포켓몬도감.png"
                      alt="나만의 포켓몬 도감"
                    />
                  </div>
                </ImageBox>

                <TextBox>
                  {/* <BigBoldText>Technical</BigBoldText> */}
                  <p>
                    TypeScript 와 Vite, Recoil, Tailwind 를 직접 적용해보고,
                    공부하기 위해 개발한 페이지입니다.
                  </p>
                </TextBox>
                <TextBox>
                  <p>
                    - recoil 을 사용해 현재 적용된 언어의 상태 관리를 함으로써
                    영어와 한국어 지원
                  </p>
                  <p>
                    - 웹의 성능을 높이기 위해 react-lazy-load-image-component
                    라이브러리를 사용해 lazyloading 처리, 트래픽 최소화
                  </p>
                  <p>- react-query를 사용해 무한 스크롤 기능 적용</p>
                </TextBox>

                <TextBox>
                  <SmallText>
                    ※ 해당 프로젝트는 현재{" "}
                    <LinkText href="https://my-pokemon.web.app/">이곳</LinkText>
                    에서 테스트 가능합니다.
                  </SmallText>
                  <SmallText>
                    ※ 코드는{" "}
                    <LinkText href="https://github.com/mirro97/playground-w-ts-react-vite">
                      Github
                    </LinkText>{" "}
                    를 참고해주세요.
                  </SmallText>
                </TextBox>
                <TextBox>
                  <BigBoldText size="xl">Technical</BigBoldText>
                  <p>
                    React, Vite, React-Query, Recoil, Tailwind, TypeScript,
                    Firebase
                  </p>
                </TextBox>
              </ContentBox>
            </div>
          </TwoSeperatedBox>

          {/* React 예제 직접 테스트 해보기 */}
          <TwoSeperatedBox>
            <div className="mb-10">
              <BigBoldText size="2xl">React 예제 실습</BigBoldText>
              <SmallText>2022/07</SmallText>
            </div>
            <div>
              <ContentBox>
                <ImageBox>
                  <div>
                    <img
                      src="/images/projects/코드실습.PNG"
                      alt="React 예제 실습"
                    />
                  </div>
                </ImageBox>

                <TextBox>
                  <p>처음 React 를 공부하며 개발한 페이지입니다.</p>
                  <p>
                    지식은 나눌때 가장 가치 있는 것이라 믿기 때문에 많은
                    사람들이 함께 공부했으면 좋겠다는 마음으로 개발하게
                    되었습니다.
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
                  <SmallText>
                    ※ 해당 프로젝트는 현재{" "}
                    <LinkText href="https://mirro97.github.io/react-playground-result/">
                      이곳
                    </LinkText>
                    에서 테스트 가능합니다.
                  </SmallText>
                  <SmallText>
                    ※ 코드는{" "}
                    <LinkText href="https://github.com/mirro97/react-playground">
                      Github
                    </LinkText>{" "}
                    를 참고해주세요.
                  </SmallText>
                </TextBox>

                <TextBox>
                  <BigBoldText size="xl">Technical</BigBoldText>
                  <p>React</p>
                </TextBox>
              </ContentBox>
            </div>
          </TwoSeperatedBox>
          <TwoSeperatedBox>
            <div className="mb-10">
              <BigBoldText size="2xl">Custom Toast Message</BigBoldText>
              <SmallText>2021/06</SmallText>
            </div>
            <div>
              <ContentBox>
                <ImageBox>
                  <div>
                    <img
                      src="/images/projects/CustomToastMessage.png"
                      alt="커스텀 토스트 메시지"
                    />
                  </div>
                </ImageBox>

                <TextBox>
                  {/* <BigBoldText>Technical</BigBoldText> */}
                  <p>Vue.js 를 사용해 개발한 페이지 입니다.</p>
                  <p>
                    사용자 커스텀이 가능한 컴포넌트를 공부하고자 개발하게
                    되었습니다. 배경색, 노출 위치, 시간, 애니메이션, 제목,
                    메시지의 커스텀이 가능합니다.
                  </p>
                </TextBox>
                <TextBox>
                  <SmallText>
                    ※ 해당 프로젝트는 현재{" "}
                    <LinkText href="https://mirro97.github.io/CutomToastMessage/">
                      이곳
                    </LinkText>
                    에서 테스트 가능합니다.
                  </SmallText>
                </TextBox>

                <TextBox>
                  <BigBoldText size="xl">Technical</BigBoldText>
                  <p>Vue</p>
                </TextBox>
              </ContentBox>
            </div>
          </TwoSeperatedBox>
        </BasicBox>

        {/* 연락처 */}
        <BasicBox>
          <SubHeader>
            <Point>/</Point> Contact
          </SubHeader>
          <TwoSeperatedBox>
            <div>
              <BigBoldText size="xl">Github</BigBoldText>
            </div>
            <div className="mb-7"> https://github.com/mirro97</div>
          </TwoSeperatedBox>
          <TwoSeperatedBox>
            <div>
              <BigBoldText size="xl">Blog</BigBoldText>
            </div>
            <div className="mb-7">https://nychicken.tistory.com/</div>
          </TwoSeperatedBox>
          <TwoSeperatedBox>
            <div>
              <BigBoldText size="xl">Email</BigBoldText>
            </div>
            <div className="mb-7">mirro97@naver.com</div>
          </TwoSeperatedBox>
        </BasicBox>

        {/* 학력 */}
        <BasicBox>
          <SubHeader>
            <Point>/</Point> Education
          </SubHeader>
          <TwoSeperatedBox>
            <div>
              <BigBoldText size="2xl">강원대학교</BigBoldText>
            </div>
            <div>
              <p>컴퓨터 정보통신 공학과 </p>
              <SmallText>2016/03 - 2021/03</SmallText>
            </div>
          </TwoSeperatedBox>
        </BasicBox>
      </BodySection>

      {/* footer */}
      <BottomSection>
        <SmallText>Next.js 13.2.4 / React.js 18.2.0 / Tailwind 3.2.7</SmallText>

        <SmallText>Front-End Engineer, sujeong.k</SmallText>
        <LinkText href="https://github.com/mirro97/my-page">
          📎 Check Code
        </LinkText>
      </BottomSection>
    </>
  );
}
