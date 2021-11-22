import styled from "styled-components";

export const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.black};
    opacity: 0.8;
  }

  > .MuiSvgIcon-root {
    color: white;
    font-size: 38px;
  }

  > h3 {
    font-size: 12px;
    font-weight: 500;
  }
  > h3 > span {
    padding: 15px;
  }
`;

export const SideBarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
