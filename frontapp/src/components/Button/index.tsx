import "./Button.css";

type IProps = {
  onClick: () => void;
  connector: {
    name: string;
  };
  className?: string;
  disabled?: boolean;
};
//card card-no-border mt-5 mb-5 text-center

export default function Button({
  onClick,
  connector,
  className,
  disabled = false,
}: IProps) {
  return (
    <div className="container d-flex align-items-center justify-content-center bg-light">
      <div className="row w-100">
      
            <button
              type="button"
              className={`btn btn-outline-primary ${className}`}
              onClick={onClick}
              disabled={disabled}
            >
              {connector.name}
            </button>
  
      </div>
    </div>
  );
}
