import axios from "axios";
import { useEffect, useState } from "react";

const Summary = () => {
  const [ data , setData] = useState({});
  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:3000/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      console.log("USER:", res.data.user.firstName);
      setData(res.data.user.firstName);
    } catch (err) {
      console.error(err);
    }
  };
  
  useEffect(() => {
    fetchUser();
  }, []);
  
  return (
    <div className="summary">
      <div className="username">
        <h6>{`Hi , ${data}`}</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </div>
  );
};

export default Summary;
