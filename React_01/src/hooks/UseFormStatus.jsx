import { useFormStatus } from 'react-dom';
import { Myform } from '../Myform';

export function UseFormStatus() {

  async function handleSubmit() {
    await new Promise((res) => {
      setTimeout(res, 2000);
    });
    console.log("submit");
  }

  


  return (
  <>
  <form action={handleSubmit}>
        <Myform></Myform>

  </form>
  
  
  </>
  );
}
