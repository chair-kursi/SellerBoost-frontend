import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import { v4 as uuidv4 } from "uuid";
import { sizeCodeValidator, sizeNameValidator } from "../validators/validation";
import "../../css/services/Addsize.css";
import { Link } from "react-router-dom";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), StyleCode: "", Name: "" },
  ]);
  const [sizeCode, setSizeCode] = useState(null);
  const [sizeCodeErr, setSizeCodeErr] = useState(null);
  const [sizeName, setSizeName] = useState(null);
  const [sizeNameErr, setSizeNameErr] = useState(null);
  const [noSuccess, setNoSuccess] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(), StyleCode: "", Name: "" }]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };
  const saveNewSize = async () => {
    setNoSuccess(null);
    setSuccess(null);
    if (!sizeName || !sizeCode) {
      setNoSuccess("Please Fill all fields!!..");
      return;
    }
    let data = {
      sizeCode: sizeCode,
      sizeName: sizeName,
    };
    const savedSize = await axios({
      method: "post",
      url: "http://localhost:3002/size/add",
    });
    if (savedSize.data) setSuccess("Successfully added the size");
  };

  return (
    <Container>
      <div className="container3">
        <div className="head2">
          <h2>
            {" "}
            <span>Add</span> Size
          </h2>
          <Link to="/">
            <p className="close">X</p>
          </Link>
        </div>
        <p>{noSuccess}</p>
        <p>{success}</p>

        {inputFields.map((inputField) => (
          <div key={inputField.id}>
            <div className="container3_items">
              <div className="container3_item">
                <label>Size Code</label>
                <input
                  type="text"
                  placeholder="Size Code"
                  onChange={(e) => {
                    setSizeCode(e.target.value);
                    if (!sizeCodeValidator(e.target.value) && e.target.value) {
                      setSizeCode(null);
                      setSizeCodeErr("Enter Valid Sizecode");
                    } else setSizeCodeErr(null);
                  }}
                />
              </div>
              <div className="container3_item">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  onChange={(e) => {
                    setSizeName(e.target.value);
                    if (!sizeNameValidator(e.target.value) && e.target.value) {
                      setSizeName(null);
                      setSizeNameErr("Enter Valid size name");
                    } else setSizeNameErr(null);
                  }}
                />
              </div>
              <IconButton
                disabled={inputFields.length === 1}
                onClick={() => handleRemoveFields(inputField.id)}
              >
                <RemoveIcon />
              </IconButton>
              <IconButton onClick={handleAddFields}>
                <AddIcon />
              </IconButton>
            </div>
          </div>
        ))}
        <button className="butt" onClick={saveNewSize}>
          Add Size{" "}
        </button>
      </div>
    </Container>
  );
}

export default App;

// import axios from "axios";
// import React, { useState } from "react";
// import { sizeCodeValidator, sizeNameValidator } from "../validators/validation";
// import "../../css/services/Addsize.css";
// import { Link } from "react-router-dom";
// import Container from "@material-ui/core/Container";

// export default function AddSize() {
//   const [sizeCode, setSizeCode] = useState(null);
//   const [sizeCodeErr, setSizeCodeErr] = useState(null);
//   const [sizeName, setSizeName] = useState(null);
//   const [sizeNameErr, setSizeNameErr] = useState(null);
//   const [noSuccess, setNoSuccess] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const [inputFields, setInputField] = useState([{ sizeCode: "", name: "" }]);

//   const saveNewSize = async () => {
//     setNoSuccess(null);
//     setSuccess(null);
//     if (!sizeName || !sizeCode) {
//       setNoSuccess("Please Fill all fields!!..");
//       return;
//     }
//     let data = {
//       sizeCode: sizeCode,
//       sizeName: sizeName,
//     };
//     const savedSize = await axios({
//       method: "post",
//       url: "http://localhost:3002/size/add",
//     });
//     if (savedSize.data) setSuccess("Successfully added the size");
//   };

//   return (
//     <form>
//       {inputFields.map((inputField, index) => {
//         <div className="container3">
//           <div className="head2">
//             <h2>
//               {" "}
//               <span>Add</span> Size
//             </h2>
//             <Link to="/">
//               <p className="close">X</p>
//             </Link>
//           </div>

//           <p>{noSuccess}</p>
//           <p>{success}</p>
//           <div className="container3_items">
//             <div className="container3_item" >
//               <label htmlFor="">Size Code</label>
//               <input
//                 type="text"
//                 placeholder="Size Code"
//                 onChange={(e) => {
//                   setSizeCode(e.target.value);
//                   if (!sizeCodeValidator(e.target.value) && e.target.value) {
//                     setSizeCode(null);
//                     setSizeCodeErr("Enter Valid Sizecode");
//                   } else setSizeCodeErr(null);
//                 }}
//               />
//             </div>
//             <p>{sizeCodeErr}</p>
//             <div className="container3_item">
//               <label htmlFor="">Name</label>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 onChange={(e) => {
//                   setSizeName(e.target.value);
//                   if (!sizeNameValidator(e.target.value) && e.target.value) {
//                     setSizeName(null);
//                     setSizeNameErr("Enter Valid size name");
//                   } else setSizeNameErr(null);
//                 }}
//               />
//             </div>
//             <p>{sizeNameErr}</p>
//             {/* ORDER CANNOT BE A INPUT FROM USER */}
//           </div>
//           <button className="butt" onClick={saveNewSize}>
//             Add Size
//           </button>
//         </div>;
//       })}
//     </form>
//   );
// }
