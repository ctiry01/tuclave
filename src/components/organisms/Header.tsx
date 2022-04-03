import React from "react";
import styled from "styled-components";
import {Layout} from "../atoms/Layout";

export const Header = () => {
    return (
        <Wrapper>
            <Layout>
                <SiteBrand>
                    tuclave.es
                </SiteBrand>
            </Layout>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  background: #282c34;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SiteBrand = styled.span`
  color: whitesmoke;
  font-size: 1.5rem;
  padding: 0 1rem;
  font-weight: bold;
`