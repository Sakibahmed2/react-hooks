const UserAvatar = ({ imgUrl }) => {
  return (
    <div>
      <img className="w-20 rounded-full " src={imgUrl} alt="" />
    </div>
  );
};

export default UserAvatar;
