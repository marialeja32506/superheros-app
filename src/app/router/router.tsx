import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../../components/dashboard-layout/dashboard-layout";
import ContentPage from "../../components/content-page/content-page";
import PowerStats from "../../components/views/power-stats";
import Appearance from "../../components/views/appearance";
import Biography from "../../components/views/biography";
import HeroDetail from "../../components/views/detail-heros";
import Work from "../../components/views/work";
import Connections from "../../components/views/connections";

const Router = () => {
  return (
    <Fragment>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<ContentPage />} />
          <Route path="/:id" element={<HeroDetail />} />
          <Route path="/powerstats" element={<PowerStats />} />
          <Route path="/appearance" element={<Appearance />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/work" element={<Work />} />
          <Route path="/connections" element={<Connections />} />
        </Routes>
      </DashboardLayout>
    </Fragment>
  );
};

export default Router;
