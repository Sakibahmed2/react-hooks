const withBorder = (WrappedComponent) => {
  return (props) => {
    return (
      <div className="border-4 rounded-full border-purple-500">
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withBorder;
