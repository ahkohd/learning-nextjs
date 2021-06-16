import Head from 'next/head';
import { useRouter } from 'next/router';
import { pathToTitle } from 'utils/fns';

const Meta = ({ title }) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title ?? pathToTitle(router.pathname)}</title>
    </Head>
  );
};

export default Meta;

Meta.defaultProps = {};
