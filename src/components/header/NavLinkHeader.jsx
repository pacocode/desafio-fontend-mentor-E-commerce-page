const NavLinkHeader = ({ text }) => {
  return (
    <>
      <a href="#" className="group relative py-8">
        <span className="group-hover:text-orange-primary">{text}</span>
        <span className="absolute bottom-0 left-0 block h-1 w-full scale-x-0 transition-all duration-200 group-hover:scale-100 group-hover:bg-orange-primary"></span>
      </a>
      {/*             
            <a href="#" className="relative py-8">
                <span className="peer">{text}</span>
                <span className="absolute bottom-0 block w-full h-3 peer-hover:bg-pink-500"></span>
            </a> 
        */}
    </>
  );
};

export default NavLinkHeader;
