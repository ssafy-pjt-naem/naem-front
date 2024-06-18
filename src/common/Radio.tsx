interface RadioParam{
    name : string;
    value : string;
    label : string;
}

function Radio({name, value, label} : RadioParam){


    return(
        <div className="inline-flex items-center">
        <label className="relative flex items-center p-1 rounded-full cursor-pointer">
          <input name={name} type="radio"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-main transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-main checked:before:bg-main hover:before:opacity-10"/>
          <span
            className="absolute text-main transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
            </svg>
          </span>
        </label>
        {label}
      </div>
    )
}

export default Radio;