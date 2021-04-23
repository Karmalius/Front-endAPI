import { useState } from 'react';
import "./App.css"
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const Fictable = ({ muuttuja }) => {

  return (
    <>
      {muuttuja.length > 0 && <div>
        <Table striped responsive="sm">
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
              <tr key={data._id}>
                <td key={data.name}> {data.name} </td>
                <td key={data.pairing}> {data.pairing} </td>
                <td key={data.plot}> {data.plot} </td>
                <td key={data.chapters}> {data.chapters} </td>
                <td key={data.link}><a href="{data.link}">Read</a></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>}
    </>
  );

}

const App = () => {

  const [all, setAll] = useState([])
  const [name, setName] = useState('')
  const [id, setId] = useState('')

  const getData = () => {

    fetch("https://ficlibrary.herokuapp.com/api/getall")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setAll(data)
      });
  }

  const getName = () => {

    fetch("https://ficlibrary.herokuapp.com/api/name/" + name)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setAll(data)
      });
  }

  const getId = () => {

    fetch("https://ficlibrary.herokuapp.com/api/" + id)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setAll(data)
      });
  }

  return (
    <>
    <Container className="container">
    <Jumbotron className="jumbotron">
    <h1>Harry Potter - The FicLibrary</h1>
    </Jumbotron>
      <div>
        <form>
          <div>
            <Button
              type="button"
              className="allfics"
              onClick={getData}
              variant="success"
            >
              SHOW ALL FICS
              </Button>
            
          </div>
          <div>
            <p>SEARCH BY NAME</p>
          <input
        type="search"
        value={name}
        onChange={(event) => setName(event.target.value)}
        name="name"
        className="form-control"
        placeholder="Example: Draco Malfoy and the Letter from the Future"
      />
            <Button
              type="button"
              onClick={getName}
              variant="success"
            >
              SEARCH
              </Button>
          </div>
          <div>
          <p>SEARCH BY ID</p>
          <input
        type="search"
        value={id}
        onChange={(event) => setId(event.target.value)}
        name="id"
        className="form-control"
        placeholder="Example: 6066e79cdfe1269a82c6c0ca"
      />
            <Button
              type="button"
              onClick={getId}
              variant="success"
            >
              SEARCH
              </Button>
          </div>
        </form>
        <Fictable muuttuja={all} />
      </div>
      </Container>
    </>
  );

}

export default App