import React, { useState } from "react";
import ROLE from "../../../common/Role";
import SummaryApi from "../../../common/Index";
import { toast } from "react-toastify";

const ChangeUserRole = ({
  name,
  email,
  role,
  userId,
  onClose,
  callFunc,
}) => {

  const [userRole,setUserRole] = useState(role)

  const handleOnChangesSelect = (e) => {
    setUserRole(e.target.value)
    console.log(e.target.value)
  }

  const updateUserRole = async() =>{
    const fetchResponse = await fetch(SummaryApi.updateUser.url,{
      method : SummaryApi.updateUser.method,
      credentials : 'include',
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify({
        userId : userId,
        role : userRole
      })
    })

    const responseData = await fetchResponse.json()

    if(responseData.success){
      toast.success(responseData.message)
      onClose()
      callFunc()
    }

    console.log("role updated",responseData)
  }

  return (
    <div className="position-absolute  z-10 d-flex justify-content-center bg-danger ">
      <div className="bg-white  shadow-lg px-5 py-2">

      <div className="text-end">
      <button className="border-0 bg-transparent" onClick={onClose}>
        <i class="fa-solid fa-xmark text-dark "></i>
        </button>
      </div>
        <h3 className="pb-3 fw-bolded">Change User Role</h3>
        <p>Name : {name}</p>
        <p>Email : {email} </p>
        <div className="d-flex justify-content-between">
          <p className="pt-3 fw-bolder">Role:</p>
          <select className="border-0 fw-bolder" value={userRole} onChange={handleOnChangesSelect}>
            {Object.values(ROLE).map((el) => {
              return (
                <option value={el} key={el}>
                  {el}
                </option>
              );
            })}
          </select>
        </div>

        <div className="text-center">
        <button className="border-0 rounded bg-danger fw-bolder text-white shadow-lg py-1 px-3 text-center" onClick={updateUserRole}>Change Role</button>
        </div>
      </div>
    </div>
  );
}

export default ChangeUserRole;
