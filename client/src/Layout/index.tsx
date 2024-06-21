import MainContainer from './Main';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  // for light theme use data-bs-theme="light" bg-white text-white
  return <MainContainer>{children}</MainContainer>;
}

export default Layout;
