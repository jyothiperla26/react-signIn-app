import './EachInput.css';

export function EachInput({labelName, placeholder}) {
  return (
    <div className="flex-column">
        <label id="labelId">{labelName}</label>
        <input id="inputId" className="input-box" placeholder={placeholder}/>
    </div>
  );
}