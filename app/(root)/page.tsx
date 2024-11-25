import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBankBalance from "@/components/TotalBankBalance";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async() => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account adn transaction efficiently "
          />
          <TotalBankBalance
            accounts={[]}
            totalBanks={1}
            totalCurrBalance={1230.55}
          />
        </header>
        Recent Transaction
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 4234.12 }]}
      />
    </section>
  );
};

export default Home;
