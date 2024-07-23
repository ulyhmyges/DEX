import "./Container.css";

type IProps = {
  children: React.ReactNode;
};
//card card-no-border mt-5 mb-5 text-center

export default function Container(props: IProps) {
  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="row w-100 justify-content-center">
        <div className="shadow-lg rounded-3 border-0 mt-5 mb-5 text-center card-padding">
          {props.children}
        </div>
      </div>
    </div>
  );
}
