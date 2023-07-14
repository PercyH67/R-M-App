import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postUser } from "../../redux/Actions";
// import validateRegister from './validate'


const RegisterForm = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [registerData, setRegisterData] = useState({
      name: '',
      email: '',
      password: '',
      image: ''
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setRegisterData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  
    // const handleImageChange = (event) => {
    //   const file = event.target.files[0];
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     setRegisterData((prevData) => ({
    //       ...prevData,
    //       image: reader.result
    //     }));
    //   };
    //   reader.readAsDataURL(file);
    // };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      // Aquí puedes realizar la lógica para el registro, como enviar los datos al servidor
     const {data} = await dispatch(postUser(registerData))
      alert(data)
      navigate("/home")
      // Restablecer los campos del formulario
      setRegisterData({
        name: '',
        email: '',
        password: '',
        image: ''
      });
    };
  
    return (
        <div className="p-16">
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-white p-6 rounded shadow-md">
                <h2 className="text-3xl text-blue-400 mb-4 text-center font-bold">Register</h2>
                <div className="">
                  <div className="mb-4">
                  <label className="block text-lg mb-2 ">Name:</label>
                  <input
                      type="text"
                      name="name"
                      value={registerData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                  </div>
                  <div className="mb-4">
                  <label className="block text-lg mb-2">Email:</label>
                  <input
                      type="email"
                      name="email"
                      value={registerData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                  </div>
                  <div className="mb-4">
                  <label className="block text-lg mb-2">Password:</label>
                  <input
                      type="text"
                      name="password"
                      value={registerData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                  </div>
                  <div className="mb-4">
                  <label className="block text-lg mb-2">Image:</label>
                  <input
                      type="file"
                      accept="image/*"
                      // onChange={handleImageChange}
                      className="w-full"
                  />
                  </div>
                </div>
                {/* {registerData.image && (
                <div className="mb-4">
                    <img src={registerData.image} alt="Selected" className="w-24" />
                </div>
                )} */}
                <div className=" text-center">
                    <button type="submit"  className="bg-blue-500 hover:bg-blue-700 text-white px-8 py-2 rounded font-bold">
                    Register
                    </button>
                </div>
            </form>
        </div>

    );
  };

  export default RegisterForm;