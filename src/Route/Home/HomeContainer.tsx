import React from 'react';
import HomePresenter from './HomePresenter';
import { useQuery } from 'react-apollo';
import { recentStatus } from '../../types/api';
import { RECENT_STATUS } from './HomeQueries';

const HomeContainer: React.FC<any> = () => {
  const { data: statusData, loading } = useQuery<recentStatus>(RECENT_STATUS);

  if (loading) {
    return <div></div>;
  } else if (!loading && statusData) {
    return <HomePresenter statusData={statusData} />;
  } else {
    return <div>error</div>;
  }
};

export default HomeContainer;
