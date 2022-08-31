import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { BlockArchitecturePage } from "../pages/BlockArchitecturePage";
import { DashboardPage } from "../pages/dashboard/DashboardPage";

import { BlockStatsPage } from "../pages/blockstats/BlockStatsPage";
import { SettingPageAdministator } from "../pages/SettingPageAdministator";

import clsx from "clsx";
import { useStyles, isMobile } from "./MiniDrawerStyles";
import { BlockManagerPageServers } from "../pages/BlockManagerPageServers";
import { BlockManagerPageOrg } from "../pages/BlockManagerPageOrg";
import { BlockManagerPagePeer } from "../pages/BlockManagerPagePeer";
import { BlockManagerPageChannel } from "../pages/BlockManagerPageChannel";
import { BlockManagerPageCAServers } from "../pages/BlockManagerPageCAServers";
import { BlockManagerPageOrdered } from "../pages/BlockManagerPageOrdered";
import { BlockManagerPageChaincodes } from "../pages/BlockManagerPageChaincodes";
import { BlockManagerPageCAUsers } from "../pages/BlockManagerPageCAUsers";
import { BlockHistoryPageTransactions } from "../pages/BlockHistoryPageTransactions";
import { BlockHistoryPageBlocks } from "../pages/BlockHistoryPageBlocks";
import LoginPage from "../pages/LoginPage";
import { SettingPageAuthority } from "../pages/SettingPageAuthority";

import { HistoryPage } from "../pages/resources/HistoryPage";
import { StatsPage } from "../pages/resources/StatsPage";

export const Routing = (props) => {
  const { content, contentShift } = useStyles();
  const { openSideBarStatus } = props;

  const classes = useStyles();

  return (
    <main
      className={clsx(content, {
        [contentShift]: openSideBarStatus,
        [classes.hide]: openSideBarStatus && isMobile(),
      })}
    >
      {/*<SimpleAppBar />*/}
      {/* <div className={toolbar} /> */}
      <Switch>
        <Route exact path="/" component={BlockArchitecturePage} />
        <Route path="/block_architecture" component={BlockArchitecturePage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route
          path="/block_manager_servers"
          component={BlockManagerPageServers}
        />
        <Route path="/block_manager_org" component={BlockManagerPageOrg} />
        <Route
          path="/block_manager_ordered"
          component={BlockManagerPageOrdered}
        />
        <Route path="/block_manager_peer" component={BlockManagerPagePeer} />
        <Route
          path="/block_manager_channel"
          component={BlockManagerPageChannel}
        />
        <Route
          path="/block_manager_chaincodes"
          component={BlockManagerPageChaincodes}
        />
        <Route
          path="/block_manager_caservers"
          component={BlockManagerPageCAServers}
        />
        <Route
          path="/block_manager_causers"
          component={BlockManagerPageCAUsers}
        />
        <Route
          path="/block_history_blocks"
          component={BlockHistoryPageBlocks}
        />
        <Route
          path="/block_history_transactions"
          component={BlockHistoryPageTransactions}
        />
        <Route path="/block_stats" component={BlockStatsPage} />
        <Route path="/resource_history" component={HistoryPage} />
        <Route path="/resource_stats" component={StatsPage} />
        <Route
          path="/setting_administrator"
          component={SettingPageAdministator}
        />
        <Route path="/setting_authority" component={SettingPageAuthority} />
        <Route path="/login" component={LoginPage} />
      </Switch>
      <Redirect to="/" />
    </main>
  );
};
