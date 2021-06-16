import Meta from 'components/Meta';
import Footer from 'components/Footer';
import Header from 'components/Header';

const Layout = ({ children }) => (
  <>
    <Meta />
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
