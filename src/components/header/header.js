const header = (props) => {
  return (
    <div className="header-container">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default header;
