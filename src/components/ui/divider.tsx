import * as React from "react";

const Divider = React.memo(function Divider() {
  return (
    <>
      <div className="h-[18px] w-full bg-[url('/vector.svg')] bg-[length:40px_18px] bg-repeat-x" />
      <div className="h-[18px] w-[calc(100%_-_40px)] translate-x-[20px] bg-[url('/vector.svg')] bg-[length:40px_18px] bg-repeat-x" />
    </>
  );
});

export default Divider;
