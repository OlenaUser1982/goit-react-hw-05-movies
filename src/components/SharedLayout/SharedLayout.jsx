import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Ul, Header, HeaderLink } from './SharedLayout.styled';
const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Ul>
            <li>
              <HeaderLink to="/">Home</HeaderLink>
            </li>
            <li>
              <HeaderLink to="/movies">Movies</HeaderLink>
            </li>
          </Ul>
        </nav>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
