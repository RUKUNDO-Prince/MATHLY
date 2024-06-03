import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[1.887rem] pr-[29.062rem] pl-[1.25rem] box-border max-w-full text-left text-[3.125rem] text-black font-poppins lg:pr-[14.5rem] lg:box-border mq750:pr-[7.25rem] mq750:box-border mq450:pr-[1.25rem] mq450:box-border ${className}`}
    >
      <div className="w-[41.55rem] flex flex-col items-start justify-start gap-[4.506rem] max-w-full mq750:gap-[2.25rem] mq450:gap-[1.125rem]">
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start relative">
            <h1 className="m-0 self-stretch h-[22.106rem] relative text-inherit font-semibold font-inherit inline-block shrink-0 z-[1] mq450:text-[1.875rem] mq1050:text-[2.5rem]">
              <p className="m-0">
                Control your financial future easily with Binexopay .
              </p>
            </h1>
            <img
              className="w-[2.544rem] h-[3.613rem] absolute !m-[0] top-[4.919rem] right-[10.269rem] object-contain z-[2]"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className="w-[33.081rem] flex flex-row items-start justify-start py-[0rem] px-[0.062rem] box-border max-w-full mt-[-5.8rem] text-[1.375rem] text-gray-300">
            <p className="m-0 flex-1 relative font-medium inline-block max-w-full z-[4] mq450:text-[1.125rem]">
              We facilitate payments for your convenience. Ensure your
              transactions are straightforward and secure.
            </p>
          </div>
        </div>
        <button className="cursor-pointer [border:none] pt-[0.868rem] pb-[0.943rem] pr-[2.062rem] pl-[2.375rem] bg-gold rounded-mini flex flex-row items-start justify-start whitespace-nowrap hover:bg-goldenrod-200">
          <div className="h-[4.188rem] w-[16.875rem] relative rounded-mini bg-gold hidden" />
          <b className="relative text-[1.563rem] font-semibold font-poppins text-black text-left z-[1]">
            Create account
          </b>
        </button>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
