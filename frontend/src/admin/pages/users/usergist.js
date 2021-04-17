import React from "react";
import { useQuery } from "@apollo/react-hooks";

import TableReusable from "../../components/TableReusable";
import { findallUsers } from "../../graphql/gql";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

function UsersGist() {
  const { data, loading } = useQuery(findallUsers);
  const tablelabels = ["Name", "UserName", "Email", "Badges", "Certificates"];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ width: "100%" }}>
        <Header />
        <div style={{ minHeight: "100vh", backgroundColor: "#ebedef" }}>
          <div
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "#fff",
            }}
          >
            {data && (
              <TableReusable
                flag="usergist"
                tablelabels={tablelabels}
                tablelist={data.findallUsers}
              ></TableReusable>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default UsersGist;
