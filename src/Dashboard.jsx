
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const handleLogout = () => {
    navigate("/");
  };

  const menuItems = [
    "Dashboard",
    "Profile",
    "Settings",
  ];

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="logo">
          MyDashboard
        </div>

        <nav className="sidebar-menu">

          {menuItems.map((item) => (
            <button
              key={item}
              className={`menu-item ${
                activeMenu === item ? "active" : ""
              }`}
              onClick={() => setActiveMenu(item)}
            >
              {item}
            </button>
          ))}

        </nav>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </aside>


      {/* Main Content */}
      <main className="dashboard-main">

        {/* Topbar */}
        <header className="topbar">

          <div>
            <h2>{activeMenu}</h2>
            <p>Manage your account and activities</p>
          </div>

          <div className="user-box">
            <div className="avatar">
              P
            </div>

            <div>
              <strong>Pratik</strong>
              <span>Developer</span>
            </div>
          </div>

        </header>


        {/* Dashboard Content */}

        {activeMenu === "Dashboard" && (
          <section className="dashboard-content">

            <div className="welcome-card">
              <div>
                <p className="small-text">Welcome back 👋</p>

                <h1>
                  Good to see you, Pratik!
                </h1>

                <p>
                  Here's what's happening with your account today.
                </p>
              </div>

              <div className="welcome-icon">
                🚀
              </div>
            </div>


            {/* Stats */}

            <div className="stats-grid">

              <div className="stat-card">
                <span>Total Projects</span>
                <h2>12</h2>
                <p>+2 this month</p>
              </div>

              <div className="stat-card">
                <span>Completed</span>
                <h2>8</h2>
                <p>67% completion</p>
              </div>

              <div className="stat-card">
                <span>In Progress</span>
                <h2>4</h2>
                <p>Currently working</p>
              </div>

              <div className="stat-card">
                <span>Tasks Done</span>
                <h2>42</h2>
                <p>+8 this week</p>
              </div>

            </div>


            {/* Bottom Section */}

            <div className="dashboard-grid">

              {/* Recent Activity */}

              <div className="panel">

                <div className="panel-header">
                  <h3>Recent Activity</h3>

                  <button>
                    View all
                  </button>
                </div>

                <div className="activity">

                  <div className="activity-item">
                    <div className="activity-icon">
                      ✓
                    </div>

                    <div>
                      <strong>Project completed</strong>
                      <p>Expense Tracker was completed</p>
                    </div>

                    <span>2h ago</span>
                  </div>


                  <div className="activity-item">
                    <div className="activity-icon">
                      +
                    </div>

                    <div>
                      <strong>New project</strong>
                      <p>Login system was created</p>
                    </div>

                    <span>5h ago</span>
                  </div>


                  <div className="activity-item">
                    <div className="activity-icon">
                      ↑
                    </div>

                    <div>
                      <strong>Deployment</strong>
                      <p>Project deployed successfully</p>
                    </div>

                    <span>1d ago</span>
                  </div>

                </div>

              </div>


              {/* Quick Actions */}

              <div className="panel">

                <div className="panel-header">
                  <h3>Quick Actions</h3>
                </div>

                <div className="quick-actions">

                  <button>
                    + New Project
                  </button>

                  <button>
                    👤 Edit Profile
                  </button>

                  <button>
                    ⚙ Settings
                  </button>

                </div>

              </div>

            </div>

          </section>
        )}


        {/* Profile */}

        {activeMenu === "Profile" && (
          <section className="simple-section">

            <div className="profile-card">

              <div className="large-avatar">
                P
              </div>

              <h1>Pratik Gautam</h1>

              <p>Frontend Developer</p>

              <div className="profile-info">
                <p><strong>Email:</strong> pratik@example.com</p>
                <p><strong>Role:</strong> Developer</p>
              </div>

            </div>

          </section>
        )}


        {/* Settings */}

        {activeMenu === "Settings" && (
          <section className="simple-section">

            <div className="settings-card">

              <h1>Settings</h1>

              <div className="setting-row">
                <div>
                  <strong>Email notifications</strong>
                  <p>Receive important account notifications</p>
                </div>

                <input type="checkbox" defaultChecked />
              </div>

              <div className="setting-row">
                <div>
                  <strong>Dark mode</strong>
                  <p>Use dark interface</p>
                </div>

                <input type="checkbox" defaultChecked />
              </div>

            </div>

          </section>
        )}

      </main>

    </div>
  );
};

export default Dashboard;
