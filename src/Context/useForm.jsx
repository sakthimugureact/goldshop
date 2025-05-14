import  { useState } from 'react'

function useForm() {
    const [values,setValues] = useState({
        name:"",
        lastname:"",
        company:"",
        business:"",
        email:"",
        phone:"",
        whatsapp:"",
        country:"",
        state:"",
        city:"",
        password:"",
        cnfpass:"",
        findus:"",
        business:""
    })
    const [error,setError] = useState({
       name:"",
        lastname:"",
        company:"",
        business:"",
        email:"",
        phone:"",
        whatsapp:"",
        country:"",
        state:"",
        city:"",
        password:"",
        cnfpass:"",
        findus:"",
        business:""
})

const [loginvalues,setLoginvalues] = useState({
  email:"",
  password:""
})
const [loginerr,setLoginerr] = useState({
  email:"",
  password:""
})

    const getValues = (e) =>{
        const {name,value} = e.target;
        setValues({...values,[name]:value});
        setError({...error,[name]:""})
    }

    const getLoginvalues = (e) =>{
      const {name,value} = e.target;
      setLoginvalues({...loginvalues,[name]:value});
      setLoginerr({...loginerr,[name]:""})
    }

    const validateLogin = (e) =>{
      let newErr = {};
      let isVal = true;

      if (!loginvalues.email.trim()) {
        newErr.email = 'Email Required';
        isVal = false;
      } 
      else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(loginvalues.email)) {
        newErr.email = 'Enter a Valid Email';
        isVal = false;
      }

      if (!loginvalues.password.trim()) {
        newErr.password = 'Password Required';
        isVal = false;
      } 

      setLoginerr(newErr)
      return isVal;
    }



    const validateForm = () => {
    
        let newErrors = {};
        let isValid = true;
    
        if (!values.name.trim()) {
          newErrors.name = 'Name Required';
          isValid = false;
        }

          if (!values.lastname.trim()) {
          newErrors.lastname = 'Last Name Required';
          isValid = false;
        }
        
          if (!values.company.trim()) {
          newErrors.company = 'Company Name Required';
          isValid = false;
        }
        
          if (!values.business.trim()) {
          newErrors.business = 'Business Name Required';
          isValid = false;
        }
        
        if (!values.email.trim()) {
          newErrors.email = 'Email Required';
          isValid = false;
        } 
        else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
          newErrors.email = 'Enter a Valid Email';
          isValid = false;
        }
        
        if(!values.phone.trim()){
            newErrors.phone = "Phone Number Required"
            isValid = false;
        }
        else if(!/^\d{10}$/.test(values.phone)){
            newErrors.phone = "Enter a Valid Number"
            isValid = false;
        }

        if(!values.whatsapp.trim()){
            newErrors.whatsapp = "Whatsapp Number Required"
            isValid = false;
        }
        else if(!/^\d{10}$/.test(values.whatsapp)){
            newErrors.whatsapp = "Enter a Valid Number"
            isValid = false;
        }

        
        if (!values.country.trim()) {
          newErrors.country = 'Country Required';
          isValid = false;
        } 

         if (!values.state.trim()) {
          newErrors.state = 'State Required';
          isValid = false;
        }
        
         if (!values.city.trim()) {
          newErrors.city = 'City Required';
          isValid = false;
        } 

        if (!values.password.trim()) {
          newErrors.password = 'Password Required';
          isValid = false;
        } 
        
        if (!values.cnfpass.trim()) {
          newErrors.cnfpass = 'Confirm Password Required';
          isValid = false;
        } 
        else if(values.password!==values.cnfpass){
          newErrors.cnfpass="Password Not Matched"
        }

        if (!values.findus.trim()) {
          newErrors.findus = 'Fill This Box';
          isValid = false;
        } 
        
        if (!values.business.trim()) {
          newErrors.business = 'Business Name Required';
          isValid = false;
        } 
        
        setError(newErrors);
        return isValid;
      };
    return {values,error,getValues,validateForm,loginerr,loginvalues,getLoginvalues,validateLogin,setLoginerr}
}

export default useForm
