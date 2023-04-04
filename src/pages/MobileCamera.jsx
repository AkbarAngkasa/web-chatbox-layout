import Webcam from "react-webcam"

export default function MobileCamera() {
  const videoConstraints = {
    facingMode: "user"
  };

  return (
    // Wrapper
    <div className="relative flex flex-col items-center justify-center h-screen">
      {/* ============ */}
      {/* == Header == */}
      {/* ============ */}
      <div className="absolute top-0 z-50 h-[25vh] w-full bg-red-300">
        Header
        <p>25 viewport height absolute</p>
      </div>
      {/* == Camera == */}
      <Webcam
        videoConstraints={videoConstraints}
        className="mx-auto h-screen absolute bg-slate-300"
      />
      {/* ============ */}
      {/* == Footer == */}
      {/* ============ */}
      <div className="absolute bottom-0 z-50 h-[25vh] w-full bg-green-300 flex flex-col">
          {/* Take Photo */}
          <button className="bg-blue-400 rounded-full p-2 m-2 text-white">
            <i className="fa-solid fa-circle-dot"></i>
          </button>
          <p>25 viewport height absolute</p>
      </div>
    </div>
  )
}