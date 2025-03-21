import React from "react";

function Form() {
  return (
    <form>
      <input
        type="text"
        className="mt-10 w-full rounded-[5px] text-lg text-[#393A4B] p-[18px] bg-white pl-[52px] caret-[#3A7CFD] outline-none"
        placeholder="Create a new todo…"
      />
      <div className="w-5 h-5 rounded-full border border-[#E3E4F1] absolute top-[96px] left-[44px]" />
    </form>
  );
}

export default Form;
