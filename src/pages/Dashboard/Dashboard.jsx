import React  from "react";
import { Search, Users, HelpCircle, DollarSign, Monitor,ArrowUp,ArrowDown, LayoutDashboard,ShoppingCart,ArrowUpRightSquare,Menu} from "lucide-react";

import "./Dashboard.css"; 
import { useState } from "react";

export const Dashboard = () => {
 const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
 const toggleSidebar = () => {
    setSidebarCollapsed(prev => !prev);
 }
  return (
    <div className="dashboard-container">
     
      {/* <button className="mobile-toggle" onClick={toggleSidebar}>
        <Menu size={24}/>
      </button> */}


   <aside className={`dashboard-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
       <a className="dashboard-logo" onClick={toggleSidebar}><span className="icon_first"><LayoutDashboard size={24}/></span><span className="icon_text first">Dashboard.v01</span></a>
     
        <nav className="dashboard-menu">
          <a href="#"><LayoutDashboard size={24}/><span className="icon_text">Dashboard    ›</span></a>
          <a href="#"><ShoppingCart size={24}/><span className="icon_text">Product    ›</span></a>
          <a href="#" className="active"><Users size={24}/><span className="icon_text">Customers   ›</span></a>
          <a href="#"><DollarSign size={24}/><span className="icon_text">Income  ›</span></a>
          <a href="#"><ArrowUpRightSquare size={24}/><span className="icon_text">Promote  ›</span></a>
          <a href="#"><HelpCircle size={24}/><span className="icon_text">Help   ›</span></a>
        </nav>
        <div className="dashboard-upgrade">
          <p>Upgrade to PRO to get access all Features!</p>
          <button>Get Pro Now!</button>
        </div>
        <div className="dashboard-profile">
          <img src="../../assets/Evano_img.png" alt="avatar" />
          <span>Evano</span>
          <small>Project Manager</small>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        {/* Header */}
        
        <div className="dashboard-header">
            <p>Hello Evano 👋🏼,</p>
            <div className="dashboard-search">
             <Search size={30} color="gray" className="dashboard-search-icon" />
    <input type="text" placeholder="Search" />
  </div>
</div>


        {/* Metrics */}
        <div className="dashboard-metrics">
          <div className="metric-card">
            <div className="users_logo">
            <Users size={24} />
            </div>
            <div>
              <p>Total Customers</p>
              <h2>5,423</h2>
              <small className="metric-up"><ArrowUp size={15} className="Arrow_up"/><span className="highlight">16%</span> this month</small>
            </div>
          </div>
          <div className="metric-card">
           
            <div className="users_logo">
            <Users size={24} />
            </div>
            <div >
              <p>Members</p>
              <h2>1,893</h2>
              <small className="metric-down"><ArrowDown size={15} className="Arrow_down"/><span className="highlight_red">1%</span> this month</small>
            </div>
          </div>
          <div className="metric-card">
              <div className="users_logo">
                <Monitor size={24} />
              </div>

  <div className="Active_now">
    <p>Active Now</p>
    <h2>189</h2>
    <div className="profile_images">
      <img src="../../assets/image 1.png" />
      <img src="../../assets/image 2.png" />
      <img src="../../assets/image 3.png" />
      <img src="../../assets/image 4.png" />
      <img src="../../assets/image 5.png" />
    </div>
  </div>
</div>

        </div>

        {/* Customers Table */}
        <div className="dashboard-table">
          <div className="table-header">
            <h2>All Customers</h2>
            <div className="search_cust"> 
          <div className="table-search">
            <Search className="search-icon" size={20} color="gray" />
            <input type="text" placeholder="Search"  className="search_placeholder"/>
          </div>
           </div>
            <p className="srch_cust">short by:</p>
            <select>
              <option>Newest</option>
              <option>Oldest</option>
            </select>
            </div>
          
          <table>
            <thead>
              <tr style={{color:"gray"}}>
                <th>Customer Name</th>
                <th>Company</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Country</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Jane Cooper",
                  company: "Microsoft",
                  phone: "(225) 555-0118",
                  email: "jane@microsoft.com",
                  country: "United States",
                  status: "Active"
                },
                {
                  name: "Floyd Miles",
                  company: "Yahoo",
                  phone: "(205) 555-0100",
                  email: "floyd@yahoo.com",
                  country: "Kiribati",
                  status: "Inactive"
                },
                 {
                  name: "Jane Cooper",
                  company: "Microsoft",
                  phone: "(225) 555-0118",
                  email: "jane@microsoft.com",
                  country: "United States",
                  status: "Inactive"
                },
                 {
                  name: "Jane Cooper",
                  company: "Microsoft",
                  phone: "(225) 555-0118",
                  email: "jane@microsoft.com",
                  country: "United States",
                  status: "Inactive"
                },
                 {
                  name: "Jane Cooper",
                  company: "Microsoft",
                  phone: "(225) 555-0118",
                  email: "jane@microsoft.com",
                  country: "United States",
                  status: "Inactive"
                },
                {
                  name: "Floyd Miles",
                  company: "Yahoo",
                  phone: "(205) 555-0100",
                  email: "floyd@yahoo.com",
                  country: "Kiribati",
                  status: "Active"
                }
                // add more as needed
              ].map((cust, idx) => (
                <tr key={idx}>
                  <td>{cust.name}</td>
                  <td>{cust.company}</td>
                  <td>{cust.phone}</td>
                  <td>{cust.email}</td>
                  <td>{cust.country}</td>
                  <td>
                    <span
                      className={`status-badge ${
                        cust.status === "Active" ? "active" : "inactive"
                      }`}
                    >
                      {cust.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <div className="table-footer">
            <p className="table_ft_text" style={{ fontSize: "15px", color: "#B5B7C0", fontWeight: "bold" }}>Showing data 1 to 8 of 256K entries</p>
            {/* Pagination */}
            <div className="pagination">
              <button className="Inactive">&lt;</button>
              <button className="active">1</button>
              <button className="Inactive">2</button>
              <button className="Inactive">3</button>
              <button className="Inactive">4</button>
              
            </div>
          </div>
       
      </main>
    </div>
  );
}

