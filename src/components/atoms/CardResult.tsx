import styled from "styled-components";

interface CardResultProps {
    colorGradientInit?: string
    colorGradientEnd?: string
    children?: string
}

interface CardResultStyles {
    colorGradientInit: string
    colorGradientEnd: string
}

export const CardResult = ({
                               colorGradientInit = '#5c9ead',
                               colorGradientEnd = '#326273',
                               children
                           }: CardResultProps) => {
    return (
        <Wrapper colorGradientInit={colorGradientInit} colorGradientEnd={colorGradientEnd}>
            <p>{children}</p>
        </Wrapper>
    )
}

const Wrapper = styled.div<CardResultStyles>`
  width: 100%;
  height: 80px;
  background: linear-gradient(90deg, ${({colorGradientInit}) => colorGradientInit} 0, ${({colorGradientEnd}) => colorGradientEnd});
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 8px;

  > p {
    font-family: Kalam;
    font-weight: bold;
    margin: 0;
    padding: 0;
    text-align: center;
    color: white;
    font-size: 1.6rem;

    @media screen and (max-width: 400px) {
      font-size: 1.2rem;
    }
  }
`