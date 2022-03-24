import { useEffect, useState} from 'react';
import Image from 'next/Image';
import styled from "styled-components";

const Box = styled.div`
  position: fixed;
  background-size: cover;
  z-index: 0;
  top: 0;
`;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  }
}

function BackgroundImg(){
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    const { width, height } = getWindowDimensions();

    setWidth(width);

    setHeight(height);

  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();

      setWidth(width);

      setHeight(height);
  
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (width && height) {
      return (
        <Box>
          <Image
            src="/images/background.jpg"
            alt="Snow mountain background"
            width={width}
            height={height}
        />
      </Box>
      );
    }

    return null;
}

export default BackgroundImg