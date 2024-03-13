import React from 'react'

function Register(props) {
    let btnText,passType;
    const btnStyle={
        backgroundColor:"",
        color:"white"
    };
    if(props.showpass===true)
    {
        btnText="Hide Password";
        passType="text";
        btnStyle.backgroundColor="red";
    }
    else{
        btnText="Show Password";
        passType="password";
        btnStyle.backgroundColor="green";
    }
  return (
    <div>
    <label for="password">password:</label>
    <br/>
      <input type={passType} name="password" />
      <br/><br/>
    <button type="button" name="btn_pass" style={btnStyle} onClick={props.showPassHandler}>{btnText}</button>
    </div>
  )
}

export default Register;
