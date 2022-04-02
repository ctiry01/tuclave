import styled from "styled-components";

interface ProgressBarProps {
    progress?: number
    height?: number
    color?: string
}

interface ProgressBarStyles {
    progress: number
    height: number
    color: string
}

export const ProgressBar = ({progress = 50, height = 20, color = '#d90368'}: ProgressBarProps) => {
    return (
        <Wrapper color={color} height={height} progress={progress}>
            <div/>
        </Wrapper>
    )
}

const Wrapper = styled.div<ProgressBarStyles>`
  width: 100%;
  height: ${({height}) => height}px;
  border-radius: 12px;
  border: 1px solid ${({color}) => color};
  overflow: hidden;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({progress}) => progress}%;
    height: 50px;
    background-color: ${({color}) => color};
    transition: background-color 6s;
  }
`