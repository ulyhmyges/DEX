type IProps = {
    children: React.ReactNode
}

export default function Container(props: IProps) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card mt-5 text-center">{props.children}</div>
        </div>
      </div>
    </div>
  );
};