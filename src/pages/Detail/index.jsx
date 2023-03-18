import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./index.scss";


function Detail() {
  const { empid } = useParams();

  const [data, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/products/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [empid]); 

  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">
        Kembali
      </Link>

      <table className="table">
        {data && (
          <tbody>
            <tr>
              <td>ID</td>
              <td>{empid._id}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{empid.name}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{empid.price}</td>
            </tr>
            <tr>
              <td>Stock</td>
              <td>{empid.stock}</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}

export default Detail;
