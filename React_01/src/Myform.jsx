  import { useFormStatus } from 'react-dom';
  
  export function Myform() {

      const {pending} = useFormStatus();
      console.log(pending);
      
    return (
      <>
        
          <input type="text" name="Name" id="name" />
          <br />
          <br />
          <input type="text" name="Password" id="pass" />
          <br />
          <br />
          <button disabled ={pending}>{pending?"Submiting...":"Submit"}</button>
       
      </>
    );
  }