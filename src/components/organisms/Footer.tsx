import React from "react";
import styled from "styled-components";
import {Layout} from "../atoms/Layout";
import {GitHubIcon} from "../atoms/icons/GitHubIcon";

export const Footer = () => {
    return (
        <Wrapper>
            <Layout>
                <Content>
                    <Text>tuclave.es - {new Date().getFullYear()}</Text>
                    <a href="https://github.com/ctiry01/tuclave" target="_blank">
                        <GitHubIcon size={2} color="white"/>
                    </a>
                </Content>
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
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Text = styled.p`
  margin: 0;
  padding-bottom: 1rem;
  color: white;
`