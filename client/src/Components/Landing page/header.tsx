const Header = () => {
  const title = "IssueZen";
  const links = ["Dashboard", "My Issues", "Our Team"];
  const buttons = ["Log In", "Join Now"];

  return (
    <header className="p-5 bg-customYellow">
      <nav className="container mx-auto flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-slate-700 cursor-pointer">
            {title}
          </h3>
        </div>
        <div className="hidden md:flex flex-grow items-center justify-center">
          {links.map((link, index) => (
            <a key={index} className="mx-4 hover:text-lg cursor-pointer">
              {link}
            </a>
          ))}
        </div>
        <div>
          {buttons.map((button, index) => (
            <button
              key={index}
              className="ml-5 bg-customOrange hover:bg-orange-800 py-1.5 px-5 rounded text-white text-sm"
            >
              {button}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
