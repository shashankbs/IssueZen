const Header = () => {
  const title = "IssueZen";
  const links = ["Dashboard", "My Issues", "Our Team"];
  const buttons = ["Log In", "Join Now"];
  return (
    <>
      <header className=" p-5 bg-customYellow">
        <nav className="flex items-center">
          <div>
            <h3 className="ml-5 text-2xl align-top font-semibold text-slate-700 cursor-pointer">
              {title}
            </h3>
          </div>
          <div className="ml-auto">
            {links.map((link) => (
              <a className="mr-5 hover:text-lg cursor-pointer">{link}</a>
            ))}
          </div>
          <div>
            {buttons.map((button) => (
              <button className="ml-5 bg-customOrange hover:bg-orange-800 py-1.5 px-5 rounded text-white text-sm">
                {button}
              </button>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
