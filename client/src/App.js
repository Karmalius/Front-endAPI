import React, { useState, useEffect } from 'react';
import "./App.css"
import { Table } from 'react-bootstrap';

const App = () => {
  const [muuttuja, setMuuttuja] = useState([])

  useEffect(() => {
    fetch("https://ficlibrary.herokuapp.com/api/getall")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setMuuttuja(data)
      });
  }, [])

  return (
    <>
      {
        <div>
      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Pairing</th>
            <th>Plot</th>
            <th>Chapters</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {muuttuja.map((data) => (
            <tr>
              <td> {data.name} </td>
              <td> {data.pairing} </td>
              <td> {data.plot} </td>
              <td> {data.chapters} </td>
              <td> {data.link} </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
}
    </>
  );
}

export default App