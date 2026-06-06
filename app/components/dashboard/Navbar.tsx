const Navbar = () => {
  return (
    <div className=" bg-gray-900 border-b border-gray-800">
    <div className="max-w-7xl mx-auto flex items-center px-6 py-4">
      <div className="font-bold text-xl tracking-tight">Criptotrack</div>
      <div className="ml-auto flex gap-4">
        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Dashboard</a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Portfolio</a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Transactions</a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Profile</a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Settings</a>
      </div>
    </div>
    </div>
  );
}; 
export default Navbar;
