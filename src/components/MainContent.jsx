const MainContent = ({ children }) => {
  return (
    <div className="mx-7">
      <div className="flex flex-wrap py-9">{children}</div>
    </div>
  );
};

export default MainContent;
