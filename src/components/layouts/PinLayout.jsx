export default function PinLayout() {
  return (
    <div className="w-[90%] flex flex-col justify-center items-center justify-items-center mx-auto h-[100vh] bg-slate-600 lg:w-[40%]">
      {/* === Header ===*/}
      <div className="w-full h-[15vh] bg-red-400">
        Header
        <p>15 viewport height</p>
      </div>

      {/* ========================= */}
      {/* == Is Submitted Layout == */}
      {/* ========================= */}
      {/* <div className="w-full h-[70vh] bg-teal-500">
        
      </div> */}
      {/* ================================ */}
      {/* == End Of Is Submitted Layout == */}
      {/* ================================ */}


      {/* ============================= */}
      {/* == Is not Submitted Layout == */}
      {/* ============================= */}
        <>
          {/* === Alert === */}
          <div className="w-full h-[20vh] bg-green-400">
            Alert
            <p>20 viewport height</p>
          </div>
          
          {/* === Pin Screen === */}
          <div className="w-full h-[10vh] bg-yellow-400">
            Pin
            <p>10 viewport height</p>
          </div>
          
          {/* === Buttons === */}
          <div className="w-full h-[45vh] bg-blue-400">
            Buttons
            <p>45 viewport height</p>
          </div>
        </>
      {/* ==================================== */}
      {/* == End Of Is Not Submitted Layout == */}
      {/* ==================================== */}
    </div>
  )
}
