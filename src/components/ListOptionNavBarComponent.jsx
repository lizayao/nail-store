import OptionNavBarComponent from "./OptionNavBarComponent";

const ListOptionNavBarComponent = (props) => {
  const { nameOption } = props;

  return (
    <div className="navbar-nav">
      {nameOption.map((item, index) => {
        return <OptionNavBarComponent key={index} titleOption={item} />;
      })}
    </div>
  );
};

export default ListOptionNavBarComponent;
