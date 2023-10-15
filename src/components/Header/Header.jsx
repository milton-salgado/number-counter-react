import styled from "styled-components";

const HeaderStyle = styled.header`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderH1Style = styled.h1`
    font-size: 72px;
    font-weight: bold;
    color: white;
    text-align: center;
`;

function Header() {
    return (
        <>
            <HeaderStyle>
                <HeaderH1Style>Contador</HeaderH1Style>
            </HeaderStyle>
        </>
    );
}

export default Header;
