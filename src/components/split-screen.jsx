import {styled} from 'styled-components';

const Container = styled.div`
    display: flex;
`;
const Panel = styled.div`
    flex: ${( props ) => props.flex };
`

export const SplitScreen=({ children, leftSideWidth = 1, rightSideWidth = 1 })=>{
const[ left, right ] = children;
return(
    <Container>
        <Panel flex={leftSideWidth}>
           {left}
        </Panel>
        <Panel flex={rightSideWidth}>
          {right} 
        </Panel>
    </Container>
)
}