const NewsMetaData = ({ icon, value }) => {
  return (
    <div className="flex items-center space-x-1">
      {icon}
      <span>{value}</span>
    </div>
  );
};

export default NewsMetaData;
