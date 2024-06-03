import PropTypes from "prop-types";

const QuickLinksTitle = ({ className = "" }) => {
  return (
    <div
      className={`w-[68.819rem] flex flex-row items-start justify-start py-[0rem] px-[0.062rem] box-border max-w-full text-left text-[1.563rem] text-darkgray-100 font-poppins ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start gap-[4.568rem] max-w-full lg:gap-[2.313rem] mq750:gap-[1.125rem]">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
          loading="lazy"
          alt=""
          src="/footer.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.187rem] pl-[0.5rem] box-border max-w-full">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-between max-w-full gap-[1.25rem]">
            <div className="w-[15.906rem] flex flex-col items-start justify-start pt-[0.462rem] px-[0rem] pb-[0rem] box-border text-[1.625rem] text-goldenrod-100 font-biryani">
              <div className="self-stretch flex flex-col items-start justify-start gap-[2.131rem] mq450:gap-[1.063rem]">
                <div className="self-stretch flex flex-row items-start justify-end">
                  <div className="w-[11.6rem] flex flex-row items-start justify-start relative">
                    <img
                      className="h-[7.031rem] w-[8.275rem] absolute !m-[0] bottom-[-2.106rem] left-[-6.487rem] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/logo-1.svg"
                    />
                    <b className="flex-1 relative font-extrabold shrink-0 z-[2] mq450:text-[1.313rem]">
                      BinexoPay
                    </b>
                  </div>
                </div>
                <i className="relative text-[1.25rem] italic font-poppins text-darkgray-100 z-[1] mq450:text-[1rem]">
                  Your money at your tips
                </i>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.312rem] pl-[0rem] gap-[1.875rem]">
              <div className="relative font-medium z-[1] mq450:text-[1.25rem]">
                Quick Access
              </div>
              <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.187rem] pl-[1.125rem] text-[1.375rem] text-white">
                <div className="flex flex-col items-start justify-start gap-[1.062rem]">
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem]">
                    <div className="relative font-medium inline-block min-w-[4.125rem] z-[1] mq450:text-[1.125rem]">
                      Home
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[1.062rem]">
                    <div className="flex flex-col items-start justify-start pt-[0.562rem] px-[0rem] pb-[0rem]">
                      <div className="w-[0.938rem] h-[0.938rem] relative rounded-[50%] bg-gold z-[1]" />
                    </div>
                    <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[6.188rem] z-[1] mq450:text-[1.125rem]">
                      About us
                    </a>
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem]">
                    <div className="relative font-medium inline-block min-w-[6.063rem] z-[1] mq450:text-[1.125rem]">
                      Features
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem]">
                    <div className="relative font-medium inline-block min-w-[5.625rem] z-[1] mq450:text-[1.125rem]">
                      Reviews
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[19.688rem] flex flex-row items-end justify-start gap-[1.75rem]">
              <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.375rem]">
                <img
                  className="w-[1.875rem] h-[1.875rem] relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/whatsappline.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[2.687rem] mq450:gap-[1.313rem]">
                <div className="relative font-medium z-[1] mq450:text-[1.25rem]">
                  Contact us:
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2.312rem]">
                  <div className="flex-1 flex flex-row items-end justify-between gap-[1.25rem]">
                    <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.312rem]">
                      <img
                        className="w-[1.875rem] h-[1.875rem] relative overflow-hidden shrink-0 z-[1]"
                        loading="lazy"
                        alt=""
                        src="/linkedinfill.svg"
                      />
                    </div>
                    <img
                      className="h-[1.875rem] w-[1.875rem] relative overflow-hidden shrink-0 z-[1]"
                      loading="lazy"
                      alt=""
                      src="/instagramfill.svg"
                    />
                    <img
                      className="h-[1.875rem] w-[1.875rem] relative overflow-hidden shrink-0 z-[1]"
                      loading="lazy"
                      alt=""
                      src="/twitterxline.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

QuickLinksTitle.propTypes = {
  className: PropTypes.string,
};

export default QuickLinksTitle;
