import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import CategoryList from '../CategoryList/CategoryList';
import FeatureJobs from '../FeatureJobs/FeatureJobs';

const Home = () => {
    return (
        <div>
          <HomeBanner></HomeBanner>
          <CategoryList></CategoryList>
          <FeatureJobs></FeatureJobs>
        </div>
    );
};

export default Home;