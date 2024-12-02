import { Outlet } from "react-router-dom";
const ContainerForm = () => {
  return (
    <div action="input">
      <div className="bg-form">
        <div className="auth-form">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ContainerForm;
