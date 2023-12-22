import { useFormik } from "formik"
import Inputfield from "./Inputfield";
import { inputs } from "../constants";
import { schema } from "../schema";

const Auth = () => {
    // formik öz. kullnamayi saglar
    const formik = useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },

      onSubmit:(values,actions)=>{
        localStorage.setItem('user',JSON.stringify(values));
        //butun value lari sifirla
        actions.resetForm();
        
      },

      //dogrulama semasi todo

    validationSchema:schema,

    });

    // form da tutulacak veriler
  return (
    <div className="auth-page">
      <div className="container">
        <h3 className="d-flex align-items-center justify-content-center text-center py-5">
          <img height={60} src="/logo-coin.png" alt="logo" />
          <span> Coinmania </span>
        </h3>
        {/* form area */}
        <form onSubmit={formik.handleSubmit}>
          {inputs.map((data, i) => (
            <Inputfield formik={formik} data={data} key={i} />
          ))}

          <button>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Auth
