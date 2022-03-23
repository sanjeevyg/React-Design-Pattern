import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`

const Pane = styled.div`
    flex: ${props => props.weight}
`

export const SplitScreen = ({
    children,
    leftweight,
    rightweight
}) => {
    const [left, right] = children;
    return (
        <Container>
            <Pane weight={leftweight}>
                {left}
            </Pane>
            <Pane weight={rightweight}>
                {right}
            </Pane>
        </Container>
    )
}