import React from "react";
import styled from "tachyons-components";
import ReactLoading from "react-loading";


function Loader() {
  const Section = styled("div")`
flex flex-wrap content-center justify-center w-100 h-100`;

  const Article = styled("div")`
w-25 ma2 h4 items-center justify-center flex flex-column flex-wrap`;

  const Prop = styled("h3")`
f5 f4-ns mb0 white`;

  const Title = styled("h1")`
f1 f1-ns white w-100 tc`;

  const list = [
    {
      prop: "balls",
      name: "Balls",
    },
    {
      prop: "bars",
      name: "Bars",
    },
    {
      prop: "bubbles",
      name: "Bubbles",
    },
    {
      prop: "cubes",
      name: "Cubes",
    },
    {
      prop: "cylon",
      name: "Cylon",
    },
    {
      prop: "spin",
      name: "Spin",
    },
    {
      prop: "spinningBubbles",
      name: "SpinningBubbles",
    },
    {
      prop: "spokes",
      name: "Spokes",
    },
  ];

  return (
    <Section>
      <Title>Fetching Artwork</Title>
      
        <Article >
          <ReactLoading type='cylon' color="#fff" />
          
        </Article>
     
    </Section>
  );
}

export default Loader;
