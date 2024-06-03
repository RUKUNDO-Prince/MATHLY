import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-row items-start justify-end pt-[0rem] px-[2.937rem] pb-[2.881rem] box-border max-w-full text-left text-[2.5rem] text-black font-poppins lg:pl-[1.438rem] lg:pr-[1.438rem] lg:box-border mq750:pb-[1.875rem] mq750:box-border ${className}`}
    >
      <div className="flex flex-col items-end justify-start gap-[5.093rem] max-w-full lg:gap-[2.563rem] mq750:gap-[1.25rem]">
        <div className="flex flex-row items-start justify-start gap-[4.337rem] max-w-full lg:flex-wrap lg:gap-[2.188rem] mq750:gap-[1.063rem]">
          <div className="w-[31.013rem] flex flex-col items-start justify-start pt-[4.518rem] px-[0rem] pb-[0rem] box-border max-w-full mq450:pt-[2.938rem] mq450:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[2.237rem] max-w-full mq750:gap-[1.125rem]">
              <h2 className="m-0 relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-[1.5rem] mq1050:text-[2rem]">
                One App for Everyone
              </h2>
              <p className="m-0 self-stretch relative text-[1.563rem] font-medium text-gray-300 mq450:text-[1.25rem]">
                With this app, you can effortlessly track your spending, set
                budgets, manage investments, and pay bills, or simply keeping
                your daily expenses in check—all in one place.
              </p>
            </div>
          </div>
          <div className="h-[11rem] w-[16.644rem] relative text-[1.125rem] text-white">
            <div className="absolute h-full top-[0rem] bottom-[0rem] left-[0rem] w-[11.375rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-gray-200 w-full h-full z-[3]" />
              <img
                className="absolute top-[1.981rem] left-[1.569rem] w-[2rem] h-[2.556rem] z-[4]"
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
            </div>
            <b className="absolute top-[5.5rem] left-[1.75rem] font-semibold inline-block w-[10.044rem] h-[3.75rem] z-[4]">
              Fingerprint recognition
            </b>
          </div>
          <div className="w-[15.125rem] flex flex-col items-start justify-start pt-[4.093rem] px-[0rem] pb-[0rem] box-border text-[0.5rem] text-gray-500">
            <div className="self-stretch flex flex-row items-start justify-start relative">
              <div className="w-[25.438rem] !m-[0] absolute bottom-[-14.631rem] left-[-16.456rem] flex flex-row items-start justify-start">
                <div className="h-[24.5rem] flex-1 relative max-w-full">
                  <div className="absolute top-[6.125rem] left-[6.375rem] rounded-[50%] box-border w-[12.688rem] h-[12.313rem] border-[0px] border-dashed border-gray-400" />
                  <div className="absolute top-[3.125rem] left-[3.188rem] rounded-[50%] box-border w-[19.063rem] h-[18.313rem] z-[1] border-[0px] border-dashed border-gray-400" />
                  <div className="absolute top-[0rem] left-[0rem] rounded-[50%] box-border w-full h-full z-[2] border-[0px] border-dashed border-gray-400" />
                  <img
                    className="absolute top-[18.188rem] left-[6.344rem] rounded-12xs w-[4rem] h-[4rem] z-[4]"
                    loading="lazy"
                    alt=""
                    src="/star-15.svg"
                  />
                </div>
              </div>
              <div className="flex-1 shadow-[4px_6px_33px_rgba(0,_0,_0,_0.17)] rounded-xl bg-white overflow-hidden flex flex-col items-start justify-start pt-[1.837rem] pb-[0.987rem] pr-[0.687rem] pl-[1.062rem] gap-[0.5rem] z-[3]">
                <img
                  className="w-[1.875rem] h-[1.875rem] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/cardcreditcreditcard-svgrepocom.svg"
                />
                <div className="flex flex-row items-start justify-start py-[0rem] px-[0.25rem]">
                  <div className="relative font-medium inline-block min-w-[3.063rem]">
                    Card holder
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.062rem] pl-[0.25rem] text-[1.25rem] text-black">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start relative">
                      <img
                        className="h-[6.438rem] w-[7.294rem] absolute !m-[0] top-[-3.687rem] right-[-4.212rem] rounded-md z-[1]"
                        alt=""
                        src="/rectangle-299.svg"
                      />
                      <b className="relative font-semibold z-[2] mq450:text-[1rem]">
                        Phillip Martin
                      </b>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mt-[-0.019rem] text-[0.813rem] text-gray-600">
                      <div className="flex flex-col items-start justify-start pt-[0.575rem] px-[0rem] pb-[0rem]">
                        <div className="relative font-medium inline-block min-w-[3.688rem]">
                          ****9934
                        </div>
                      </div>
                      <div className="w-[6.075rem] flex flex-row items-start justify-start pt-[2.262rem] px-[0.562rem] pb-[0.675rem] box-border relative text-[0.719rem] text-white">
                        <img
                          className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-md max-w-full overflow-hidden max-h-full object-contain"
                          loading="lazy"
                          alt=""
                          src="/rectangle-300.svg"
                        />
                        <div className="flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem]">
                          <div className="relative font-extralight inline-block min-w-[2.063rem] z-[1]">
                            05/28
                          </div>
                        </div>
                        <div className="relative text-[0.438rem] font-medium inline-block min-w-[2.063rem] z-[1] ml-[-2.063rem]">
                          Due date
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[56.269rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-[1.125rem]">
          <div className="w-[14.375rem] rounded-xl bg-wheat flex flex-col items-start justify-start pt-[1.187rem] px-[1.125rem] pb-[1.437rem] box-border gap-[0.937rem] z-[3]">
            <div className="w-[14.375rem] h-[8rem] relative rounded-xl bg-wheat hidden" />
            <div className="w-[2.938rem] h-[2.625rem] relative rounded-6xs bg-gold z-[4]">
              <div className="absolute top-[0rem] left-[0rem] rounded-6xs bg-gold w-full h-full hidden" />
              <img
                className="absolute top-[0.188rem] left-[0.438rem] w-[2.188rem] h-[2.25rem] overflow-hidden z-[5]"
                loading="lazy"
                alt=""
                src="/facescancircle-svgrepocom.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.687rem] pl-[0.75rem]">
              <b className="flex-1 relative font-semibold z-[4]">
                Face recognition
              </b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
