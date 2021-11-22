import styled from "styled-components";

export const SidebarContainer = styled.div`
  flex: 0.3;
  color: white;
  background-color: ${({ theme }) => theme.colors.servers};
  border-top: 1px ${({ theme }) => theme.colors.chat} solid;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px ${({ theme }) => theme.colors.chat} solid;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px ${({ theme }) => theme.colors.chat} solid;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 4px;
    color: ${({ theme }) => theme.colors.servers};
    font-size: 28px;
    background-color: white;
    border-radius: 100%;
  }
`;

export const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    margin-bottom: 5px;
    font-weight: 700;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: ${({ theme }) => theme.colors.online};
  }
`;
