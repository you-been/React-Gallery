import React, { useState, useCallback } from "react";
import Box from "./Box";

const UseCallback1 = () => {
  const [size, setSize] = useState(100);
  const [isBg, setIsBg] = useState(false);

  const boxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size * 0.5}px`,
      height: `${size}px`,
      textAlign: "center",
      fontWeight: "bold",
    };
  }, [size]);

  return (
    <div>
      <h2>UseCallback1</h2>
      <ul>
        <li>useMemo는 값을 반환하고</li>
        <li>useCallback은 함수를 반환</li>
        <li>
          주로 자식 컴포넌트로 전달되는 콜백함수를 메모이제이션 하여 부모
          컴포넌트의 불필요한 렌더링 방지
        </li>
      </ul>
      <hr />
      <div
        style={{ backgroundColor: isBg ? "lightblue" : "violet", padding: 20 }}>
        <Box boxStyle={boxStyle} />
        <input
          type="number"
          value={size}
          step={10}
          onChange={(e) => setSize(e.target.value)}
        />
        <hr />
        {/* 토글버튼. "lightblue" : "violet" */}
        <button onClick={() => setIsBg(!isBg)}>
          배경색 변경 {isBg ? "violet" : "lightblue"}
        </button>
      </div>
    </div>
  );
};

export default UseCallback1;
