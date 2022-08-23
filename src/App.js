import styled from "styled-components";

const Father = styled.div`
    display: flex;
`;

const Box = styled.div`
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
