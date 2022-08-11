import React from 'react'
import styled from 'styled-components'
import AppHeader from '../components/common/AppHeader'


const AuthBotton = styled.button`
    margin-top: 100px;
    width: 100%;
    height: 30px
`

const IndexPage = () => {

    const handleClick = () => {
        let tmpwindow = window.open("about:blank");
        const clientId="c1b95bd5-f446-45a2-96b6-14434ce48924";
        tmpwindow.location.href = 
        `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`;
    };
  return (
    <div>
        <AppHeader titme = {"토큰 발급 버튼"}></AppHeader>
        <AuthBotton onClick={handleClick}토큰 발급></AuthBotton>
    </div>
  );
};

export default IndexPage