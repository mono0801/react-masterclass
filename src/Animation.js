import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
    display: flex;
`;

const rotationAnimation = keyframes`
    0%{
        transform: rotate(0deg);
        border-radius: 0px;
    }
    50%{
        transform: rotate(180deg);
        border-radius: 100px;
    }
    100%{
        transform: rotate(360deg);
        border-radius: 0px;
    }
`;

const Box = styled.div`
    height: 200px;
    width: 200px;
    background-color: wheat;
    animation: ${rotationAnimation} 1.2s linear infinite;

    display: flex;
    justify-content: center;
    align-items: center;

    // Box 컴포넌트 안에 있는 span을 직접 설정할 수 있다
    span {
        font-size: 500%;

        // span:hover => &:hover 대체 가능
        &:hover {
            font-size: 700%;
        }
        &:active {
            opacity: 0;
        }
    }
`;

function Animation() {
    return (
        <Wrapper>
            <Box>
                <span>🤔</span>
            </Box>
        </Wrapper>
    );
}

export default Animation;
