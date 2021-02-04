import s from './Main.module.css';

const Main = ({ children }) => {
  return <main className={s.main}>{children}</main>;
};

export default Main;
