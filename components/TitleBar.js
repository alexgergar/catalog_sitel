const styles = {
  padding: 10,
};

const TitleBar = (props) => (
  <div style={styles}>
    <h2 className="mb-0">{props.title}</h2>
  </div>
);

export default TitleBar;
