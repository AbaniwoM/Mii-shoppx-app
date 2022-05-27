import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
  margin: 40px;
`;

export const div = styled.h1`
  font-family: "Lobster", cursive;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 500;
  right: 50px;
  top: 13px;
  color: white;
`;