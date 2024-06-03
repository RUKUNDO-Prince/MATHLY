import PropTypes from "prop-types";

const NewsletterHeader = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[2.931rem] max-w-full text-left text-[3.438rem] text-white font-poppins mq750:gap-[1.438rem] ${className}`}
    >
      <div className="w-[5rem] flex flex-row items-start justify-start">
        <div className="h-[5rem] flex-1 relative">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gold w-full h-full z-[1]" />
          <img
            className="absolute top-[0.969rem] left-[0.925rem] w-[3.125rem] h-[3.125rem] overflow-hidden z-[2]"
            loading="lazy"
            alt=""
            src="/letter-svgrepocom.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[1.962rem] max-w-full mq750:gap-[1rem] mq1050:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.881rem] min-w-[23.875rem] max-w-full mq750:gap-[0.938rem] mq750:min-w-full">
          <h1 className="m-0 self-stretch relative text-inherit font-medium font-inherit z-[1] mq450:text-[2.063rem] mq1050:text-[2.75rem]">
            Keep up with the latest
          </h1>
          <p className="m-0 w-[30.156rem] relative text-[1.25rem] font-medium text-darkgray-200 inline-block max-w-full z-[1] mq450:text-[1rem]">
            join our newsletter to stay up to date on features and releases.
          </p>
        </div>
        <div className="w-[33.806rem] flex flex-col items-start justify-start pt-[1.631rem] px-[0rem] pb-[0rem] box-border min-w-[33.806rem] max-w-full text-[1.25rem] mq750:min-w-full mq1050:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[2.062rem] max-w-full shrink-0 mq750:gap-[1rem]">
            <div className="flex flex-row items-start justify-start py-[0rem] px-[1rem]">
              <div className="relative font-medium z-[1] mq450:text-[1rem]">{`Stay up to date `}</div>
            </div>
            <div className="self-stretch rounded-21xl bg-gray-100 flex flex-row items-start justify-between py-[0rem] pr-[0.062rem] pl-[2.562rem] box-border max-w-full gap-[1.25rem] z-[1] text-[1.375rem] text-gainsboro-100 mq750:flex-wrap">
              <div className="self-stretch w-[33.806rem] relative rounded-21xl bg-gray-100 hidden max-w-full" />
              <div className="flex flex-col items-start justify-start pt-[1.256rem] px-[0rem] pb-[0rem]">
                <div className="relative font-medium z-[2] mq450:text-[1.125rem]">
                  Enter your email
                </div>
              </div>
              <button className="cursor-pointer [border:none] pt-[1.131rem] pb-[1.118rem] pr-[1.312rem] pl-[2.25rem] bg-gold rounded-tl-none rounded-tr-21xl rounded-br-21xl rounded-bl-none flex flex-row items-start justify-start gap-[1rem] z-[2]">
                <div className="h-[4.438rem] w-[13.438rem] relative rounded-tl-none rounded-tr-21xl rounded-br-21xl rounded-bl-none bg-gold hidden" />
                <div className="relative text-[1.438rem] font-medium font-poppins text-black text-left inline-block min-w-[7.25rem] z-[3] mq450:text-[1.125rem]">
                  Subscribe
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[1.563rem] h-[1.563rem] relative overflow-hidden shrink-0 z-[3]"
                    alt=""
                    src="/arrowrightupline.svg"
                  />
                </div>
              </button>
            </div>
            <div className="flex flex-row items-start justify-start py-[0rem] px-[0.812rem] box-border max-w-full text-[1.188rem] text-darkgray-100">
              <div className="relative z-[1]">
                <span className="font-medium">{`By subscribing you agree with our `}</span>
                <span className="[text-decoration:underline] font-semibold text-white whitespace-pre-wrap">
                  Privacy Policy.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsletterHeader.propTypes = {
  className: PropTypes.string,
};

export default NewsletterHeader;
