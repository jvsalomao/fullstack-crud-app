export default function Tablelist() {
  const clients = [
    {
      id: 1,
      name: "João Salomão",
      email: "joao.salomao@gmail.com",
      job: "Developer",
      rate: "100",
      isactive: true,
    },
    {
      id: 2,
      name: "Marcos Paulo",
      email: "marcos-paulo27@gmail.com",
      job: "Engineer",
      rate: "75",
      isactive: false,
    },
    {
      id: 3,
      name: "Marcio Delia",
      email: "marciosolove@gmail.com",
      job: "Doctor",
      rate: "90",
      isactive: true,
    },
  ];
  return (
    <>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Rate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="hover">
            {/* row 1 */}

            {clients.map((client) => (
              // eslint-disable-next-line react/jsx-key
              <tr>
                <th>{client.id}</th>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.job}</td>
                <td>{client.rate}</td>
                <td>
                  <button
                    className={`btn rounded-full w-20 ${
                      client.isactive ? `btn-primary` : `btn-outline-primary`
                    }`}
                  ></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
