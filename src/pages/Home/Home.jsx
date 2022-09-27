import React from 'react';
import Layout from "../../components/Layout/Layout";
import MainBanner from "../../components/Home/MainBanner/MainBanner";
import FutureGameBanner from "../../components/Home/FutureGameBanner/FutureGameBanner";
import Backers from "../../components/Home/Backers/Backers";
import OurEdge from "../../components/Home/OurEdge/OurEdge";
import OurGames from "../../components/Home/OurGames/OurGames";
import Faqs from "../../components/Home/Faqs/Faqs";


const Home = () => {
    return (
        <Layout>
            <MainBanner/>
            <FutureGameBanner/>
            <Backers/>
            <OurEdge/>
            <OurGames/>
            <Faqs/>
        </Layout>
    );
};


export default Home;