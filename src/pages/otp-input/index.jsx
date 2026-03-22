import { useRef, useState } from "react";

export default function OtpInput() {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const inputsRef = useRef([]);
  console.log(otp, "otp");
  console.log(inputsRef.current, "ref");

  const handleOnchange = (item, index) => {
    const newOtp = [...otp];
    newOtp[index] = item;
    setOtp(newOtp);

    if (item && index < otp.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeydown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("text").slice(0, 4);
    const newOtp = pastedData.split("");
    setOtp(newOtp);

    newOtp.forEach((_, i) => {
      if (inputsRef.current[i]) inputsRef.current[i] = newOtp[i];
    });
  };

  return (
    <div onPaste={handlePaste}>
      {otp.map((item, index) => {
        return (
          <input
            key={index}
            maxLength={1}
            value={item}
            ref={(el) => (inputsRef.current[index] = el)}
            onChange={(e) => handleOnchange(e.target.value, index)}
            onKeyDown={(e) => handleKeydown(e, index)}
            style={{
              width: "40px",
              height: "40px",
              textAlign: "center",
              fontSize: "20px",
            }}
          />
        );
      })}
    </div>
  );
}
