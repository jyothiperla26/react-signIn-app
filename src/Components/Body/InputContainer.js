import { EachInput } from './EachInput';
import './InputContainer.css';

export function InputContainer() {
  return (
    <div className="column-flex">
      <div className="flex-row">
        <EachInput labelName={"First Name"} placeholder={"Enter first name"}/>
        <EachInput labelName={"Last Name"} placeholder={"Enter last name"}/>
      </div>
      <div className="flex-row">
        <EachInput labelName={"Email"} placeholder={"e.g. john.smith@org.name"}/>
        <EachInput labelName={"Phone Number"} placeholder={"+91"}/>
      </div>
        
    </div>
  );
}