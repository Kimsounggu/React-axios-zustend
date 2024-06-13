import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getUserInfo } from "../lib/Auth";

const Layout = ({ user, setUser }) => {
  const navigate = useNavigate();
  useEffect(() => {
    getUserInfo().then((res) => {
      console.log(res);
      if (res) {
        setUser({
          userId: res.id,
          nickname: res.nickname,
          avatar: res.avatar,
        });
      } else {
        handleLogout();
      }
    });
  }, []);

  const handleLogout = () => {
    setUser(null);
    navigate("/Login");
    localStorage.clear();
  };
  return (
    <>
      <Navbar>
        <NavItem>
          <NavItem to="/">Home</NavItem>
          <NavItem to="Profile">내 프로필</NavItem>
        </NavItem>
        <NavItem></NavItem>
        <UserProfile>
          {user && (
            <>
              <UserAvatar src={user.avatar} alt="User Avatar" />
              <UserName> {user.nickname}</UserName>
              <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
            </>
          )}
        </UserProfile>
      </Navbar>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </>
  );
};

export default Layout;

export const Navbar = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: calc(100% - 2rem);
  top: 0;
  z-index: 1000;
  max-width: 1240px;
`;

export const NavItem = styled(Link)`
  color: white;
  margin: 0, 10px;
  text-decoration: none;
  margin-right: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const UserName = styled.span`
  color: white;
  margin-right: 20px;
`;

export const LogoutButton = styled.button`
  padding: 8px 12px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
`;

export const PageContainer = styled.div`
  padding: 6rem 2rem; /* Naver heigth */
`;
