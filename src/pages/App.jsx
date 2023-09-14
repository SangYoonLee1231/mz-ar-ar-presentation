import React from "react";
import styled from "styled-components";

const App = () => {
  return (
    <MainBody>
      {/* HeaderArea */}
      <HeaderArea height="60px"></HeaderArea>
      {/* Page 0 */}
      <Intro height="700px" bgColor="#ff6262">
        <TitleArea>
          <Title>
            <span id="title-one">LOTTE는</span>
            <span id="title-two">MZ-AR-AR</span>
          </Title>
          <SubTitle>
            <SubTitleTop>
              <span id="subtitle-top-one">베르테르가 숨겨둔 선물을 찾는</span>
              <span id="subtitle-top-two">여정을 떠나보아요</span>
            </SubTitleTop>
            <SubTitleBottom>
              <span id="subtitle-bottom-one">
                선물 상자를 터뜨려서 얻은 포인트는
              </span>
              <span id="subtitle-bottom-two">
                상품권으로 교환하여 사용할 수 있어요!
              </span>
            </SubTitleBottom>
          </SubTitle>
        </TitleArea>
        <ImageArea0>..</ImageArea0>
      </Intro>
      {/* Page 1 */}
      <Page height="850px" bgColor="white">
        <TextArea height="250px">
          <span id="pg1-text-area-one">
            롯데 안의 LOTTE 이야기를 들려드릴게요
          </span>
          <span id="pg1-text-area-two">
            롯데백화점 분당점의 숨겨진 역사를 알 수 있어요
          </span>
        </TextArea>
        <ImageArea1></ImageArea1>
      </Page>
      {/* Page 2 */}
      <Page height="800px" bgColor="#FD9797">
        <TextArea height="250px">
          <span id="pg2-text-area-one">
            증강 현실로 베르테르의 선물을 만나보세요
          </span>
          <span id="pg2-text-area-two">
            카메라로 백화점을 비추면서 찾을 수 있어요
          </span>
        </TextArea>
        <ImageArea2></ImageArea2>
      </Page>
      {/*  */}
      <Page height="800px" bgColor="#8FE6EC">
        <TextArea>
          <span id="pg3-text">문제를 풀면 포인트를 얻을 수 있어요</span>
        </TextArea>
        <ImageArea3></ImageArea3>
      </Page>
      {/*  */}
      <Page height="800px" bgColor="white">
        <TextArea height="150px">
          <span id="pg4-text">이런 문제가 출제될 거에요</span>
        </TextArea>
        <ImageArea3>
          <QuestionArea>
            <span>
              Q. 메이크업포에버에서 판매율이 높은 상품으로, 입자가 매우 고와
              모공과 요철을 포토샵처럼 가려주는 효과로 유명한 제품을 고르시오.
            </span>
          </QuestionArea>
          <QuestionArea>
            <span>
              Q. 직각 삼각형에서 빗변의 길이가 10cm이고 한 다른 변의 길이가
              6cm일 때, 다른 직각 변의 길이는?
            </span>
          </QuestionArea>
          <QuestionArea>
            <span>Q. 63빌딩에서 떨어져도 살 수 있는 방법은?</span>
          </QuestionArea>
          <QuestionArea>
            <span>
              Q. OX문제: 롯데백화점 분당점의 지하2층에는 북스리브로가
              위치해있다.
            </span>
          </QuestionArea>
        </ImageArea3>
      </Page>
      {/*  */}
      <Page height="800px" bgColor="#FD9797">
        <TextArea>
          <span id="pg5-text-area-one">정답을 맞히고 포인트를 확인하세요!</span>
          <span id="pg5-text-area-two">틀려도 포인트를 지급해드려요</span>
          <span id="pg5-text-area-three">
            포인트를 모아서 롯데백화점 상품권으로 교환할 수 있어요
          </span>
        </TextArea>
        <ImageArea3></ImageArea3>
      </Page>
      {/*  */}
      <Page height="800px" bgColor="white">
        <TextArea>
          <span className="pg6-text">상품권 교환 페이지에서</span>
          <span className="pg6-text">
            차곡차곡 모은 포인트를 교환할 수 있습니다
          </span>
        </TextArea>
        <ImageArea3></ImageArea3>
      </Page>
      {/*  */}
      <Outro height="600px" bgColor="#ff6262">
        <OutroTextArea>
          <span id="outro-text-one">내 손바닥에서 즐기는 살아있는 백화점</span>
          <span id="outro-text-two">MZ-AR-AR</span>
          <span id="outro-text-three">지금 바로 플레이하세요!!</span>
        </OutroTextArea>
        <ButtonArea>
          <Button
            onClick={() => {
              window.open("app.mzarar.kro.kr");
            }}
            target="_blank"
          >
            <span>MZ-AR-AR 다운로드</span>
            <img src="./images/qr-code.png" width="70px" />
          </Button>
        </ButtonArea>
      </Outro>
    </MainBody>
  );
};

const MainBody = styled.div``;

const HeaderArea = styled.div`
  height: ${(props) => props.height || "800px"};
`;

//

const Intro = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height || "800px"};
  background-color: ${(props) => props.bgColor || "white"};
`;

const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 600px;
  width: 40%;
  /* border: 1px solid green; */
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 300px;
  padding: 0px 10px;

  #title-one {
    font-size: 40px;
  }

  #title-two {
    padding-top: 10px;
    font-size: 70px;
    font-family: "MyLotteBold";
  }
`;

const SubTitle = styled.div`
  height: 300px;
  padding: 0px 15px;
`;

const SubTitleTop = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;

  span {
    font-size: 30px;
    padding: 5px 0px;
  }
`;

const SubTitleBottom = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;

  span {
    font-size: 20px;
    padding: 5px 0px;
  }
`;

const ImageArea0 = styled.div`
  height: 600px;
  width: 40%;
  /* border: 1px solid green; */
`;

//

const Page = styled.div`
  height: ${(props) => props.height || "800px"};
  background-color: ${(props) => props.bgColor || "white"};
`;

//

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height || "200px"};
  /* border: 1px solid grey; */
  color: black;

  #pg1-text-area-one {
    font-size: 40px;
  }

  #pg1-text-area-two {
    font-size: 30px;
    padding-top: 40px;
  }

  #pg2-text-area-one {
    font-size: 40px;
    color: white;
  }

  #pg2-text-area-two {
    font-size: 30px;
    padding-top: 40px;
    color: white;
  }

  #pg3-text {
    font-size: 30px;
    /* color: white; */
  }

  #pg4-text {
    font-size: 25px;
  }

  #pg5-text-area-one {
    font-size: 30px;
    color: white;
  }

  #pg5-text-area-two {
    font-size: 20px;
    padding-top: 35px;
    color: white;
  }

  #pg5-text-area-three {
    font-size: 20px;
    padding-top: 20px;
    color: white;
  }

  .pg6-text {
    font-size: 25px;
    padding: 15px 0px;
  }
`;

const ImageArea1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  /* border: 1px solid grey; */
`;

const ImageArea2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  /* border: 1px solid grey; */
`;

const ImageArea3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 700px;
  /* border: 1px solid grey; */
`;

const QuestionArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65vw;
  height: 90px;
  background-color: #ff6262;
  border-radius: 50px;
  margin: 25px 0px;

  span {
    width: 55vw;
    line-height: 25px;
    font-size: 20px;
  }
`;

//

const Outro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height || "800px"};
  background-color: ${(props) => props.bgColor || "white"};
`;

const OutroTextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;

  #outro-text-one {
    font-size: 25px;
    padding: 0px 0px 50px 0px;
    color: white;
  }

  #outro-text-two {
    font-size: 60px;
    padding: 0px 0px 50px 0px;
    color: white;
    font-family: "MyLotteBold";
  }

  #outro-text-three {
    font-size: 25px;
    color: white;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  padding: 20px 0px 40px 0px;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 60vh;
  background-color: white;
  border: none;
  border-radius: 40px;

  span {
    font-size: 25px;
    padding-right: 5px;
    font-family: "MyLotteBold";
  }
`;

export default App;
