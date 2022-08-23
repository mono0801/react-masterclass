import styled from "styled-components";

const Father = styled.div`
    display: flex;
`;

const Box_1 = styled.div`
    background-color: teal;
    width: 100px;
    height: 100px;
`;

const Box_2 = styled.div`
    background-color: black;
    width: 100px;
    height: 100px;
`;

const Text = styled.span`
    color: white;
`;

function App() {
    return (
        <Father>
            <Box_1>
                <Text>hello</Text>
            </Box_1>
            <Box_2 />
        </Father>
    );
}

export default App;
