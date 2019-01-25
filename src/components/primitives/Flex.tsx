import styled from 'styled-components';

interface IFlexProps {
  /** flex-direction property
   * @default row
   */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }: IFlexProps) => direction || 'row'}
`;
