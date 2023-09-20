import { styled } from "styled-components";

const Container = styled.div`
display: flex;
  justify-content: center; /* Horizontally center the child elements */
  align-items: center; /* Vertically center the child elements */
  height: 100vh;`
const GlowText = styled.h1`
      font-size: 6vw;
  color: #fff;
  text-align: center;
  text-shadow: 0 0 10px #fff, 0 0 20px #aaa, 0 0 30px #888, 0 0 40px #555, 0 0 50px #222, 0 0 60px #111, 0 0 70px #333, 0 0 80px #222, 0 0 1000px #111;
  font-family: "Horizons" sans-serif;
`
export default function Landing() {

    return(
        <Container>
            <GlowText>SOUL.BOND</GlowText>
        </Container>
    )
}