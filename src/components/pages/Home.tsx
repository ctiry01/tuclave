import React from "react";
import styled from "styled-components";
import {Header} from "../organisms/Header";
import {PasswordBox} from "../organisms/PasswordBox";
import {MoreDetailsAndTerms} from "../organisms/MoreDetailsAndTerms";
import {Layout} from "../atoms/Layout";
import {Footer} from "../organisms/Footer";

export const Home = () => {
    return (
        <>
            <Header/>
            <Layout>
                <Wrapper>
                    <Title>Generador de contraseñas gratis</Title>
                    <SubTitle>Tu clave segura en un solo click</SubTitle>
                    <BigText>Te damos la bienvenida al sitio web "tuclave.es". En esta página podrás crear todas tus
                        contraseñas seguras.</BigText>
                    <PasswordBox/>
                    <MoreDetailsAndTerms/>
                </Wrapper>
            </Layout>
            <Footer/>
        </>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 3rem 3rem 3rem;

  @media screen and (max-width: 768px) {
    padding: 0 1.6rem;
  }
`

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  padding-top: 1rem;
`

const SubTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: normal;
  text-align: center;
`

const BigText = styled.h3`
  font-size: 1.2rem;
  font-weight: normal;
  text-align: center;
  margin-top: 0;
`