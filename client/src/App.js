import React, { useState, useEffect } from 'react';
import "./App.css"
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



const App = () => {

  const [muuttuja, setMuuttuja] = useState([])
  const [toinenMuuttuja, setToinenMuuttuja] = useState()
  

  const GetData = () => {
  
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
          <div>
            <Table striped bordered>
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
                    <td key={data.name}> {data.name} </td>
                    <td key={data.pairing}> {data.pairing} </td>
                    <td key={data.plot}> {data.plot} </td>
                    <td key={data.chapters}> {data.chapters} </td>
                    <td key={data.link}> {data.link} </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
      </>
    );
  }

  const handleClick = () => {
    GetData();
    setToinenMuuttuja(muuttuja);
  };

  return (
    <>
        <div>
          <form>
            <div>
              <Button
                type="button"
                onClick={handleClick}
                variant="dark"
              >
                Show all fics
              </Button>
            </div>
          </form>
        </div>
        <div>{toinenMuuttuja}</div>
    </>
  );
}

export default App