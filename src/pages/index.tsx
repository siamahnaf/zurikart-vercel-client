import type { NextPage, GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";

//Layout
import Layout from "Layout";

//Components
import Carousel from "Components/Home/Carousel";
import Gallery from "Components/Home/Gallery";
import Advertise from "Components/Home/Advertise";
import Sections from "Components/Home/Sections";
import Articles from "Components/Home/Articles";

//Types import
import { SitesSettings } from "Types/Common/Sites.types";

//Redux
import { wrapper } from "Redux/Store";
import { useAppSelector } from "Redux/Hook";
import { getCategory, getSitesSettings } from "Redux/Action/Common/common.action";
import { getBanners, getSliders, getSections, getGallery, getArticles } from "Redux/Action/Home/home.action";

const Home: NextPage = () => {
  //Selector
  const { sitesData } = useAppSelector(state => state.siteSettings);
  //State
  const [sites, setSites] = useState<SitesSettings>(sitesData);
  useEffect(() => {

  }, [])
  return (
    <Layout title={sites?.siteTitle}>
      <Container maxWidth="xxxl" disableGutters>
        <Grid container spacing={2}>
          <Grid item {...{ md: 8 }}><Carousel /></Grid>
          <Grid item {...{ md: 4 }}><Gallery /></Grid>
        </Grid>
        <Advertise />
        <Sections />
        <Articles />
      </Container>
    </Layout>
  );
};
export default Home;

//Server side data fetching
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async (context) => {
      await store.dispatch(getCategory());
      await store.dispatch(getBanners());
      await store.dispatch(getSliders());
      await store.dispatch(getSections());
      await store.dispatch(getSitesSettings());
      await store.dispatch(getGallery())
      await store.dispatch(getArticles());
      return { props: {} };
    }
)