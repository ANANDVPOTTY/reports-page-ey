import React, { Component } from "react";

import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Test extends Component {
  constructor() {
    super();

    this.state = {
      eylelsFilter: "",
      serviceFilter: "",
      funcFilter: "",
      subfuncFilter: "",
      tableData: [],
      loading: false,
      currentPage: 1,
      postsPerPage: 10,
      selectedRow: [],
      show: false,
    };
  }

  async componentDidMount() {
    await fetch(
      "https://sites.ey.com/sites/AutomateTest/_api/web/lists/getbytitle('VideoHubv2')/items?$top=500",
      {
        headers: {
          accept: "application/json;odata=verbose",
          "Content-Type": "application/json;odata=verbose",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ tableData: data });
        console.log(data);
      });

    await fetch(
      "https://sites.ey.com/sites/AutomateTest/_api/web/lists/getbytitle('VideoHubv2')/items(1)/File",
      {
        headers: {
          accept: "application/json;odata=verbose",
          "Content-Type": "application/json;odata=verbose",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ currentPage: data });
        console.log(data);
      });
  }

  render() {
    return (
      <>
        <div>
          <Table bordered hover className="tablestyle">
            <thead>
              {this.state.tableData.map((itm) => {
                return (
                  <>
                    <tr>
                      <th>{itm.id}</th>
                    </tr>
                  </>
                );
              })}
            </thead>
          </Table>
        </div>
      </>
    );
  }
}
