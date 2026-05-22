const Navbar = () => {
  return (
    <div className=" bg-gray-900">
    <div className="max-w-7xl mx-auto flex items-center px-6 py-4">
      <div>Criptotrack</div>
      <div className="ml-auto flex gap-4">
        <a href="#">Dashboard</a>
        <a href="#">Portfolio</a>
        <a href="#">Transactions</a>
        <a href="#">Profile</a>
        <a href="#">Settings</a>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
