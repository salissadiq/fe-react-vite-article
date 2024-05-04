import NavItem from './NavItem';

export default function Navbar() {
  return (
    <nav className="flex items-center border h-[70px] px-10 mb-10 font-nunito gap-[100px] bg-[#606c38]">
      <div className="font-bold">Article Fetcher</div>
      <div className="text-md flex items-center gap-7">
        <NavItem to="/search" className="" title="Search" />
        <NavItem to="/create-article" className="" title="Create article" />
      </div>
    </nav>
  );
}
