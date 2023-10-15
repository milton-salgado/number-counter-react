import { useState } from "react";
import styled from "styled-components";

const MainStyle = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
`;

const MainSectionStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5%;
    background-color: white;
    border-radius: 30px;
    color: red;
    width: 250px;
    height: 250px;
    font-weight: bold;
    justify-content: space-around;
`;

const MainSectionParagraphStyle = styled.p`
    font-size: 64px;
`;

const MainSectionButtonsSectionStyle = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    width: 100%;
`;

const MainSectionButtonStyle = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50px;
    background-color: red;
    font-size: 25px;
    font-weight: bold;
    &:hover {
        cursor: pointer;
    }
`;

const MainSectionButtonIncrementStyle = styled(MainSectionButtonStyle)``;
const MainSectionButtonZeroStyle = styled(MainSectionButtonStyle)``;
const MainSectionButtonDecrementStyle = styled(MainSectionButtonStyle)``;

function Main() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <MainStyle>
                <MainSectionStyle>
                    <MainSectionParagraphStyle>
                        {number}
                    </MainSectionParagraphStyle>
                    <MainSectionButtonsSectionStyle>
                        <MainSectionButtonIncrementStyle
                            onClick={() =>
                                setNumber(number < 10 ? number + 1 : number)
                            }
                        >
                            +
                        </MainSectionButtonIncrementStyle>
                        <MainSectionButtonZeroStyle
                            onClick={() => setNumber(0)}
                        >
                            0
                        </MainSectionButtonZeroStyle>
                        <MainSectionButtonDecrementStyle
                            onClick={() =>
                                setNumber(number > 0 ? number - 1 : number)
                            }
                        >
                            -
                        </MainSectionButtonDecrementStyle>
                    </MainSectionButtonsSectionStyle>
                </MainSectionStyle>
            </MainStyle>
        </>
    );
}

export default Main;
