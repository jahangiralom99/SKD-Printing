import { useState } from "react";

const FactorySpecs = () => {

  const [open, setOpen] = useState(false)

  return (
    <div id="factory" className="max-w-screen-xl mx-auto px-4 mt-16">
      <h1 className="text-4xl text-center">Factory Specifications</h1>
      <p className="w-32 mx-auto h-[3px] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mt-4"></p>
      <h1 className="text-xl font-semibold text-center mt-4">
        List Of Machinery
      </h1>
      <p className="text-center mt-4">
        We have integrated advanced and modern hardware in our factory to
        provide our clients with the enhanced quality of our products. The list
        of our modern machinery is listed below:
      </p>
      <div className="text-center mt-8">
        <p>
          <span className="font-semibold">Name of Machine:</span> High Speed
          Corrugation Machine with variable control.
        </p>
        <hr className="mt-4 border" />
        <p className="mt-3">
          <span className="font-semibold">Brand :</span> Lal Engineering.
        </p>
        <hr className="mt-4 border" />
        <p className="mt-3">
          <span className="font-semibold">Origin :</span>Bangladesh
        </p>
        <hr className="mt-4 border" />
        <p className="mt-3">
          <span className="font-semibold">Capacity : </span>8 Metric ton
        </p>
        <hr className="mt-4 border" />
        <p className="mt-3">
          <span className="font-semibold">Model :</span> 2015
        </p>
        <hr className="mt-4 border" />
        <p className="mt-3">
          <span className="font-semibold">Quantity :</span>One
        </p>
        <hr className="mt-4 border" />

        {/* OnClick open More Factory  */}
        {
          open && <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mt-8">
            <h1 className="text-xl font-semibold">List Of Machinery</h1>
            <p className="mt-4">
              We have integrated advanced and modern hardware in our factory to
              provide our clients with the enhanced quality of our products. The
              list of our modern machinery is listed below:
            </p>
          </div>
          <div className="text-center mt-12">
            <p>
              <span className="font-semibold">Name of Machine:</span> High Speed
              Corrugation Machine with variable control.
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Brand :</span> Lal Engineering.
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Origin :</span>Bangladesh
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Capacity : </span>8 Metric ton
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Model :</span> 2015
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Quantity :</span>One
            </p>
            <hr className="mt-4 border" />
          </div>
          <div className="text-center mt-12">
            <p>
              <span className="font-semibold">Name of Machine:</span>
              Corrugation Machine.
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Brand :</span>Super Sujata.
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Origin :</span>India
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Capacity : </span>4 Metric ton.
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Model :</span> 2008
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Quantity :</span>One
            </p>
            <hr className="mt-4 border" />
          </div>
          <div className="text-center mt-12">
            <p>
              <span className="font-semibold">Name of Machine:</span>
              Auto Flute Cutting Machine
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Brand :</span>SENY
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Origin :</span> China
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Capacity : </span>20 Metric ton
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Model :</span> 2015
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Quantity :</span>One
            </p>
            <hr className="mt-4 border" />
          </div>
          <div className="text-center mt-12">
            <p>
              <span className="font-semibold">Name of Machine:</span>
              Auto Roll to Sheet Cutting Machine.
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Brand :</span>SENY
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Origin :</span> China
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Capacity : </span>20 Metric ton
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Model :</span> 2002
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Quantity :</span>One
            </p>
            <hr className="mt-4 border" />
          </div>
          <div className="text-center mt-12">
            <p>
              <span className="font-semibold">Name of Machine:</span>
              Guleing Machine.
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Brand :</span>Selim Engineering
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Origin :</span> Bangladesh.
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Capacity : </span>6 Metric ton.(Both)
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Model :</span>2008(Both)
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Quantity :</span>Tow
            </p>
            <hr className="mt-4 border" />
          </div>
          <div className="text-center mt-12">
            <p>
              <span className="font-semibold">Name of Machine:</span>
              Board Pressure 1 & 2.
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Brand :</span>Lal Engineering
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Origin :</span> Bangladesh.
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Capacity : </span>15 Metric ton
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Model :</span>2008
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Quantity :</span>One
            </p>
            <hr className="mt-4 border" />
          </div>
          <div className="text-center mt-12">
            <p>
              <span className="font-semibold">Name of Machine:</span>
              Rotary Creasing & Cutting.
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Brand :</span>(i) Lal Engineering & (ii) Selim Engineering.
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Origin :</span> Bangladesh.
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Capacity : </span>(i) 15 Metric ton & (ii) 10 Metric ton.
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Model :</span>2008
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Quantity :</span>Two
            </p>
            <hr className="mt-4 border" />
          </div>
          <div className="text-center mt-12">
            <p>
              <span className="font-semibold">Name of Machine:</span>
              Rotary Slotting & Cutting.
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Brand :</span>Selim Engineering.
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Origin :</span> Bangladesh.
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Capacity : </span>10 Metric ton
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Model :</span>2008
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Quantity :</span>One
            </p>
            <hr className="mt-4 border" />
          </div>
          <div className="text-center mt-12">
            <p>
              <span className="font-semibold">Name of Machine:</span>
              Automatic Die & Corner Edge Cutting Machine
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Brand :</span>Tiger
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Origin :</span> China
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Capacity : </span>10 Metric ton
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Model :</span>2014
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Quantity :</span>One
            </p>
            <hr className="mt-4 border" />
          </div>
          <div className="text-center mt-12">
            <p>
              <span className="font-semibold">Name of Machine:</span>
              Automatic Printing Slotting & Die Cutting Machine.
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Brand :</span>HBR
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Origin :</span> China
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Capacity : </span>30 Metric ton
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Model :</span>2015
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Quantity :</span>One
            </p>
            <hr className="mt-4 border" />
          </div>
          <div className="text-center mt-12">
            <p>
              <span className="font-semibold">Name of Machine:</span>
              Angular Type Stitching Machine 3 Unit
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Brand :</span>Super Sujata
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Origin :</span> China
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Capacity : </span>15 Metric ton
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Model :</span>2008
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Quantity :</span>One
            </p>
            <hr className="mt-4 border" />
          </div>
          <div className="text-center mt-12">
            <p>
              <span className="font-semibold">Name of Machine:</span>
              Offset Printing
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Brand :</span> Kumuri
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Origin :</span> China
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Capacity : </span>20,000 impression.
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Model :</span>1985
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Quantity :</span>One
            </p>
            <hr className="mt-4 border" />
              </div>
        </div>
        }
        <div onClick={()=>setOpen(true)} className={`mt-6 ${open== true? "hidden" : ""}`}>
          <button className="px-5 py-2 border rounded">Learn More</button>
        </div>
        <div onClick={()=>setOpen(false)} className={`mt-6 ${open== false? "hidden" : ""}`}>
          <button className="px-5 py-2 border rounded">See Less</button>
        </div>
      </div>
    </div>
  );
};

export default FactorySpecs;
