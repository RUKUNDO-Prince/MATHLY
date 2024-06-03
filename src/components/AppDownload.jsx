import PropTypes from "prop-types";

const AppDownload = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-row items-start justify-end pt-[0rem] pb-[5.531rem] pr-[3.562rem] pl-[3.875rem] box-border max-w-full text-left text-[3.313rem] text-white font-poppins lg:pb-[3.625rem] lg:box-border mq750:pl-[1.938rem] mq750:pr-[1.75rem] mq750:pb-[2.375rem] mq750:box-border ${className}`}
    >
      <div className="h-[71.875rem] w-[72.563rem] rounded-xl [background:linear-gradient(180deg,_#666,_#000_65%)] overflow-hidden shrink-0 flex flex-col items-end justify-start pt-[4.737rem] px-[5.125rem] pb-[44.4rem] box-border gap-[1.562rem] max-w-full lg:pt-[2rem] lg:px-[2.563rem] lg:pb-[18.75rem] lg:box-border mq750:h-auto mq750:pt-[1.313rem] mq750:pb-[12.188rem] mq750:box-border">
        <div className="w-[60.606rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[4.35rem] box-border gap-[1.512rem] shrink-0 [debug_commit:bf4bc93] max-w-full">
          <div className="w-[57.556rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
            <h1 className="m-0 relative text-inherit font-medium font-inherit z-[1] mq450:text-[2rem] mq1050:text-[2.625rem]">
              <span>{`Get `}</span>
              <span className="text-gold">Binexopay</span>
              <span> mobile app</span>
            </h1>
          </div>
          <h3 className="m-0 self-stretch relative text-[1.875rem] font-medium font-inherit text-center z-[1] mq450:text-[1.125rem] mq1050:text-[1.5rem]">
            With Binexopay, you can access your account anywhere, anytime, for
            balance and so much more.
          </h3>
        </div>
        <div className="w-[60.231rem] flex flex-row items-start justify-center max-w-full">
          <button className="cursor-pointer [border:none] pt-[0.812rem] pb-[0.875rem] pr-[2.687rem] pl-[3.375rem] bg-white rounded-mini flex flex-row items-start justify-start box-border gap-[1.156rem] shrink-0 [debug_commit:bf4bc93] max-w-full z-[1] mq750:flex-wrap mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
            <div className="h-[4.688rem] w-[24.063rem] relative rounded-mini bg-white hidden max-w-full" />
            <div className="flex flex-col items-start justify-start pt-[0.537rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[1.875rem] h-[2.063rem] relative overflow-hidden shrink-0 z-[2]"
                alt=""
                src="/googleplayicon-svgrepocom.svg"
              />
            </div>
            <b className="relative text-[2rem] font-semibold font-poppins text-black text-left z-[2] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
              Download App
            </b>
          </button>
        </div>
        <img
          className="mr-[-17.438rem] w-[101.356rem] h-[70.313rem] relative object-cover shrink-0 [debug_commit:bf4bc93] max-w-[163%]"
          alt=""
          src="/iphone-13-pro@2x.png"
        />
      </div>
    </section>
  );
};

AppDownload.propTypes = {
  className: PropTypes.string,
};

export default AppDownload;
