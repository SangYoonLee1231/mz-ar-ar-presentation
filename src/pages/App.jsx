import React from "react";
import styled from "styled-components";

const App = () => {
  return (
    <MainBody>
      <Intro height="800px" bgColor="#ff6262">
        <TitleArea>
          <Title>..</Title>
          <SubTitle>..</SubTitle>
        </TitleArea>
        <ImageArea>..</ImageArea>
      </Intro>
      <Page height="800px" bgColor="white">
        page-one
      </Page>
      <Page height="800px" bgColor="white">
        page-two
      </Page>
      <Page height="800px" bgColor="white">
        page-three
      </Page>
      <Page height="800px" bgColor="white">
        page-four
      </Page>
      <Page height="800px" bgColor="white">
        page-five
      </Page>
      <Outro height="800px" bgColor="white">
        page-six
      </Outro>
    </MainBody>
  );
};

const MainBody = styled.div``;

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
`;

const Title = styled.div``;

const SubTitle = styled.div``;

const ImageArea = styled.div``;

//

const Page = styled.div`
  height: ${(props) => props.height || "800px"};
  background-color: ${(props) => props.bgColor || "white"};
`;

//

const Outro = styled.div`
  height: ${(props) => props.height || "800px"};
  background-color: ${(props) => props.bgColor || "white"};
`;

export default App;
