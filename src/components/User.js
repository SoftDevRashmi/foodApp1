const User = (props) => {
  return (
    <div className="user-card">
      <h1>User Name:{props.name}</h1>
      <h2>Location:Newyork</h2>
      <h2>Contact:</h2>
    </div>
  );
};

export default User;
