import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.812rem] box-border max-w-full text-left text-[2.5rem] text-black font-poppins ${className}`}
    >
      <div className="flex-1 flex flex-row items-end justify-start gap-[6.218rem] max-w-full lg:gap-[3.125rem] mq750:gap-[1.563rem] mq1050:flex-wrap">
        <div className="h-[34.763rem] w-[29.375rem] flex flex-row items-start justify-start relative min-w-[29.375rem] max-w-full mq750:min-w-full mq1050:flex-1">
          <div className="h-full w-full absolute !m-[0] top-[0rem] bottom-[0rem] left-[0rem]">
            <img
              className="absolute top-[2.05rem] left-[0rem] w-[21.031rem] h-[32.713rem] object-contain"
              alt=""
              src="/image-9@2x.png"
            />
            <div className="absolute top-[0rem] left-[10.994rem] w-[18.381rem] h-[30.813rem] z-[1] flex items-center justify-center">
              <img
                className="w-full h-full z-[1] object-contain absolute left-[0rem] top-[0.25rem] [transform:scale(1.177)]"
                loading="lazy"
                alt=""
                src="/image-10@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.75rem] box-border min-w-[24.813rem] min-h-[30.625rem] max-w-full mq750:pb-[1.813rem] mq750:box-border mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4.45rem] mq750:gap-[2.25rem] mq450:gap-[1.125rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[2.25rem] mq750:gap-[1.125rem]">
              <h2 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-[1.5rem] mq1050:text-[2rem]">
                Personalize your financial insights and goals
              </h2>
              <p className="m-0 self-stretch relative text-[1.563rem] font-medium text-gray-300 mq450:text-[1.25rem]">
                Track your spending patterns, analyze income or expenses easily,
                and receive personalized recommendations to optimize your
                financial habits.
              </p>
            </div>
            <button className="cursor-pointer [border:none] pt-[0.993rem] pb-[0.818rem] pr-[2.062rem] pl-[2.625rem] bg-gold rounded-mini flex flex-row items-start justify-start gap-[1rem] mq450:pl-[1.25rem] mq450:box-border">
              <div className="h-[4.188rem] w-[16.875rem] relative rounded-mini bg-gold hidden" />
              <b className="relative text-[1.563rem] font-semibold font-poppins text-black text-left whitespace-nowrap z-[1] mq450:text-[1.25rem]">
                Get Started
              </b>
              <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[2.125rem] h-[2.188rem] relative overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/arrowrightfill.svg"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
