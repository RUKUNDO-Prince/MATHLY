import PropTypes from "prop-types";

const TestimonialQuote = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-[0rem] pb-[3.918rem] pr-[3.562rem] pl-[3.875rem] box-border max-w-full text-left text-[3.438rem] text-black font-poppins mq750:pl-[1.938rem] mq750:pr-[1.75rem] mq750:box-border mq450:pb-[1.688rem] mq450:box-border mq1050:pb-[2.563rem] mq1050:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[6.375rem] max-w-full lg:gap-[3.188rem] mq750:gap-[1.563rem]">
        <div className="w-[48.481rem] flex flex-row items-start justify-start py-[0rem] px-[1.75rem] box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-[2.063rem] mq1050:text-[2.75rem]">{`Join 15+ million people who are trusting us with their money. `}</h1>
        </div>
        <div className="self-stretch rounded-xl [background:linear-gradient(180deg,_#666,_#000)] flex flex-col items-start justify-start pt-[3.562rem] pb-[1.5rem] pr-[1.25rem] pl-[2.875rem] box-border gap-[3.437rem] max-w-full text-[1.75rem] text-white mq450:gap-[1.688rem] mq450:pt-[2.313rem] mq450:pb-[1.25rem] mq450:box-border mq1050:pl-[1.438rem] mq1050:box-border">
          <div className="w-[72.563rem] h-[27.569rem] relative rounded-xl [background:linear-gradient(180deg,_#666,_#000)] hidden max-w-full" />
          <p className="m-0 w-[46.006rem] relative inline-block max-w-full z-[1] mq450:text-[1.375rem]">
            Overall, this app has been a life-changer for me. It has
            revolutionized the way I approach my finances, providing me with
            tools, insights, and security I need to unlock my financial freedom.
          </p>
          <div className="w-[40.188rem] flex flex-row items-start justify-start py-[0rem] px-[0.937rem] box-border max-w-full text-[2.188rem]">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq750:flex-wrap">
              <h3 className="m-0 relative text-inherit font-medium font-inherit z-[1] mq450:text-[1.313rem] mq1050:text-[1.75rem]">
                Ellena Putri
              </h3>
              <div className="w-[12.625rem] flex flex-col items-start justify-start pt-[0.156rem] px-[0rem] pb-[0rem] box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[3.312rem]">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                    <div className="w-[4.375rem] flex flex-row items-start justify-start">
                      <div className="h-[4.375rem] flex-1 relative">
                        <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gainsboro-100 w-full h-full z-[1]" />
                        <img
                          className="absolute top-[0.906rem] left-[0.95rem] w-[2.563rem] h-[2.563rem] overflow-hidden object-contain z-[2]"
                          loading="lazy"
                          alt=""
                          src="/arrowrightsline.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[4.375rem] flex flex-row items-start justify-start">
                      <div className="h-[4.375rem] flex-1 relative">
                        <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-goldenrod-100 w-full h-full z-[1]" />
                        <img
                          className="absolute top-[0.906rem] left-[1.075rem] w-[2.563rem] h-[2.563rem] overflow-hidden z-[2]"
                          loading="lazy"
                          alt=""
                          src="/arrowrightsline-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-[11.875rem] flex flex-row items-start justify-start py-[0rem] px-[2.25rem] box-border">
                    <div className="h-[0.725rem] flex-1 flex flex-row items-start justify-start gap-[0.693rem]">
                      <div className="h-[0.688rem] flex-1 relative rounded-35xl bg-goldenrod-100 z-[1]" />
                      <div className="h-[0.688rem] w-[0.688rem] relative rounded-[50%] bg-gainsboro-200 z-[1]" />
                      <div className="h-[0.688rem] w-[0.688rem] relative rounded-[50%] bg-gainsboro-200 z-[1]" />
                      <div className="h-[0.688rem] w-[0.688rem] relative rounded-[50%] bg-gainsboro-200 z-[1]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TestimonialQuote.propTypes = {
  className: PropTypes.string,
};

export default TestimonialQuote;
