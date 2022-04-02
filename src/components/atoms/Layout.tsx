import React, {ReactNode} from 'react';
import styled from "styled-components";

interface LayoutProps {
    children: ReactNode
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <Wrapper>
            <Inner>
                {children}
            </Inner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
`
