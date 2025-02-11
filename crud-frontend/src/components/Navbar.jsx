export default function Navbar() {
  return (
    <>
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start"></div>
          <a className="btn btn-ghost text-xl">Clients</a>
        </div>
        <div className="navbar-center">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-48 md:w-auto"
            />
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary">Button</a>
        </div>
      </div>
    </>
  );
}
