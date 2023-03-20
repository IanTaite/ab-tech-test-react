export const ProductTitleWithThumb = ({ title, thumbnail }) => {
  const containerStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center'
  };
  const titleStyles={
    marginLeft: "12px",
    marginRight: "12px",
  };
  return (
    <div style={containerStyles}>
      <div>
        <img
          style={{ width: "64px", height: "64px" }}
          src={thumbnail}
          alt={title}
        />
      </div>
      <div style={titleStyles}>{title}</div>
    </div>
  );
};
