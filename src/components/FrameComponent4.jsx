import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`w-[75.694rem] flex flex-row items-start justify-end pt-[0rem] px-[3.812rem] pb-[2.881rem] box-border max-w-full lg:pl-[1.875rem] lg:pr-[1.875rem] lg:box-border ${className}`}
    >
      <header className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-left text-[1.5rem] text-goldenrod-100 font-biryani">
        <div className="w-[44.756rem] flex flex-col items-start justify-start pt-[0.425rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[3.343rem] max-w-full mq750:gap-[1.688rem]">
            <a className="[text-decoration:none] w-[11.6rem] relative font-extrabold text-[inherit] inline-block shrink-0 [debug_commit:bf4bc93] whitespace-nowrap z-[2]">
              BinexoPay
            </a>
            <nav className="m-0 flex-1 flex flex-col items-start justify-start pt-[0.2rem] px-[0rem] pb-[0rem] box-border max-w-full mq1050:hidden">
              <nav className="m-0 self-stretch flex flex-row items-start justify-between shrink-0 [debug_commit:bf4bc93] gap-[1.25rem] text-left text-[1.375rem] text-white font-poppins">
                <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[4.188rem] z-[1]">
                  Home
                </a>
                <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[6.25rem] whitespace-nowrap z-[1]">
                  About us
                </a>
                <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[6.125rem] z-[1]">
                  Features
                </a>
                <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[5.75rem] z-[1]">
                  Reviews
                </a>
              </nav>
            </nav>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[0.937rem] pr-[2.437rem] pl-[2.75rem] bg-gold rounded-mini flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-goldenrod-200">
          <div className="h-[3.75rem] w-[14.688rem] relative rounded-mini bg-gold hidden" />
          <a className="[text-decoration:none] relative text-[1.25rem] font-semibold font-poppins text-black text-left z-[2]">
            Download now
          </a>
        </button>
      </header>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
