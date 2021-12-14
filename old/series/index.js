import React from 'react';
import { Container } from 'reactstrap';
import Navbar from '../../components/Navbar/Navbar';
import NavSm from '../../components/NavSm/NavSm';
import SeriesHeader from '../../components/SeriesHeader/SeriesHeader';
import EpisodeList from '../../components/EpisodeLIst/EpisodeList';
import QouteSec from '../../components/QouteSec/QouteSec';
import Footer from '../../components/Footer/Footer';
import styles from '../../styles/landing.module.scss';
import { bottom_data_dolly } from '../../utils/bottom.data';
import Bugsnag from '@bugsnag/js';
import BugsnagPluginReact from '@bugsnag/plugin-react';

Bugsnag.start({
  apiKey: '58b6c41b161aed925e80aa1a814b4d3a', // don't care about using env vars for this because it will show up in the web site anyway
  plugins: [new BugsnagPluginReact()],
});

const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React);

const Series = () => {
  return (
    <ErrorBoundary>
      <Container fluid className='p-0'>
        <div className={styles.landing_container}>
          <Navbar />
          <NavSm />
          <SeriesHeader />
          <EpisodeList />
          <QouteSec data={bottom_data_dolly} />
          <Footer />
        </div>
      </Container>
    </ErrorBoundary>
  );
};

export default Series;
