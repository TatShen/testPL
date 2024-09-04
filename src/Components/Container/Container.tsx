import classNames from "classnames";
import style from "./Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  const classes = classNames(style.container, className);
  return <div className={classes}>{children}</div>;
};

export default Container;
