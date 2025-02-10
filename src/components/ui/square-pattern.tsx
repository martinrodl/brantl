import * as React from "react";

const AlternatingContinuousTriangles = React.memo(function AlternatingContinuousTriangles() {
  return (
    <div>
      <div
        className="h-[148px] w-[296px] bg-[url('/icons/vector-right.svg')] bg-repeat"
        style={{ backgroundSize: "74px 148px" }}
      />
      <div
        className="h-[148px] w-[296px] -rotate-180 bg-[url('/icons/vector-right.svg')] bg-repeat"
        style={{ backgroundSize: "74px 148px" }}
      />
    </div>
  );
});

export default AlternatingContinuousTriangles;
