import React from 'react';

const UserList = () => {

    const [data, setData] = React.useState([]);

    const getData = () => {
        fetch("http://localhost:8000/user").then((response) => response.json()).then((result) => {
            console.log(result);
            setData(result)
        }).catch((error) => console.log(error));
    };

    React.useEffect(() => {
        getData();
    }, []);

  return (
    <div>
        {data.length > 0 &&
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {data.length > 0 ? data.map((value, index) => {
        return  <tr>
        <th scope="row">{index + 1}</th>
        <td>{value.username}</td>
        <td>{value.email}</td>
      </tr>
    }) : "No Data Found"}
  </tbody>
</table>
}
    </div>
  )
}

export default UserList