import React from "react";
import styled from "styled-components";

const App = () => {
  return (
    <MainBody>
      <Intro>
        <Title>..</Title>
        <SubTitle>..</SubTitle>
        <ImageArea>..</ImageArea>
      </Intro>
      <Page>page-two</Page>
      <Page>page-three</Page>
      <Page>page-four</Page>
      <Page>page-five</Page>
      <Outro>page-six</Outro>
    </MainBody>
  );
};

const MainBody = styled.div``;

const Intro = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 800px;
  background-color: #ff6262;
`;

const Title = styled.div``;

const SubTitle = styled.div``;

const ImageArea = styled.div``;

const Page = styled.div``;

const Outro = styled.div``;

export default App;
