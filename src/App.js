import styled from "styled-components";

const Father = styled.div`
    display: flex;
`;

const Box = styled.div`
    // ${(props) => props.bgColor}을 통해 컴포넌트에서 설정한 prop을 가져옴
    background-color: ${(props) => props.bgColor};
    width: 100px;
    height: 100px;
`;

// Box의 css를 상속받아 확장함
const Circle = styled(Box)`
    border-radius: 50%;
`;

const Text = styled.span`
    color: white;
`;

function App() {
    return (
        <Father>
            <Box bgColor="teal">
                <Text>hello</Text>
            </Box>
            <Circle bgColor="black" />
        </Father>
    );
}

export default App;
