// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className='flex flex-col mb-6 items-center mt-20 lg:mt-16 '>
      {children}
    </div>
  );
}

export default Layout;
