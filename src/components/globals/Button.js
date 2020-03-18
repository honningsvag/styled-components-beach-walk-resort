import styled from 'styled-components';
import { setRem, setColor, setFonts, setLetterSpacing, setBorder, setTransition } from '../../styles';

export const PrimaryButton = styled.button`
  display: inline-block;
  background: ${setColor.primaryColor};
  color: ${setColor.mainWhite};
  text-transform: capitalize;
  font-size: ${setRem(18)};
  ${setFonts.main};
  padding: ${setRem(17)} ${setRem(36)};
  ${setBorder({color: setColor.primaryColor})};
  ${setLetterSpacing(3)};
  ${setTransition({time: '0.5s'})};

  &:hover {
    background: transparent;
    color: ${setColor.primaryColor};
  }
  text-decoration: none;
  cursor: pointer;
  outline: none;
  ${props => `margin: ${props.top || 0} ${props.bottom || 0} ${props.right || 0}  ${props.left || 0}`}
  
`;

export const SmallButton = styled(PrimaryButton)`
  padding: ${setRem(9)} ${setRem(12)};

`;