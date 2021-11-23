import styled from "styled-components";
import { Avatar } from "@material-ui/core";

export const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.servers};
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;

  > .MuiSvgIcon-root {
    color: white;
    margin-left: auto;
    margin-right: 30px;
  }
`;

export const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export const HeaderSearch = styled.div`
  display: flex;
  flex: 0.4;
  opacity: 1;
  padding: 0 50px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.channels};
  border: 1px ${({ theme }) => theme.colors.chat} solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }

  > .MuiSvgIcon-root {
    color: white;
  }
`;

export const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;

  > .MuiSvgIcon-root {
    color: white;
  }
`;
