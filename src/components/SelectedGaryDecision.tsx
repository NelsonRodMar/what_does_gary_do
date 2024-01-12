/* eslint-disable @typescript-eslint/no-explicit-any */
import approvingBtcEtf from '../assets/approving_btc_etf.jpg';
import manipulatingMarketImg from '../assets/manipulating_the_market.jpg';
import { Answer } from '@state/RecordTypes/what_does_gary_do_vxxx.js';

type SelectedGaryDecisionProps = {
  answer: Answer;
  win?: boolean;
};

function SelectedGaryDecision({ answer, win }: SelectedGaryDecisionProps) {
  const LeftGary = () => {
    return (
      <div className='flex w-1/2 flex-col gap-2 self-start'>
        <img
          loading='lazy'
          src={manipulatingMarketImg}
          className={`aspect-square w-full self-stretch overflow-hidden rounded-[50%] object-cover object-center
                      ${answer === Answer.ManipulatingTheMarket ? '' : 'opacity-40'}`}
          alt={Answer.ManipulatingTheMarket}
        />
        {win === undefined && (
          <div
            className={`self-center whitespace-nowrap text-center text-sm font-extrabold tracking-tight
                        ${answer === Answer.ManipulatingTheMarket ? '' : 'opacity-40'}
                        ${
                          answer === Answer.ManipulatingTheMarket
                            ? 'text-primary-green'
                            : 'text-primary-white'
                        }`}
          >
            In the Weeds
          </div>
        )}
      </div>
    );
  };

  const RightGary = () => {
    return (
      <div className='flex w-1/2 flex-col gap-2 self-start'>
        <img
          loading='lazy'
          src={approvingBtcEtf}
          className={`aspect-square w-full self-stretch overflow-hidden rounded-[50%] object-cover object-center
                      ${
                        answer === Answer.ApprovingBTCETF ? '' : 'opacity-40'
                      }`}
          alt={Answer.ApprovingBTCETF}
        />
        {win === undefined && (
          <div
            className={`self-center whitespace-nowrap text-center text-sm font-extrabold tracking-tight
                        ${
                          answer === Answer.ApprovingBTCETF
                            ? ''
                            : 'opacity-40'
                        }
                        ${
                          answer === Answer.ApprovingBTCETF
                            ? 'text-primary-green'
                            : 'text-primary-white'
                        }`}
          >
            Approving BTC ETF
          </div>
        )}
      </div>
    );
  };

  const WinText = () => {
    return (
      <div className='z-10 w-1/2'>
        <p className='text-center text-6xl font-black text-primary-green'>
          YOU
          <br />
          WON!
        </p>
      </div>
    );
  };

  const LoseText = () => {
    return (
      <div className='z-10 w-1/2'>
        <p className='text-center text-6xl font-black text-primary-red'>
          YOU
          <br />
          LOST!
        </p>
      </div>
    );
  };

  return (
    <div className='flex w-full flex-col items-center gap-8'>
      <div className='flex w-[298px] max-w-full items-center justify-between gap-5 self-center'>
        {win === undefined ? (
          <>
            <LeftGary />
            <RightGary />
          </>
        ) : (
          <>
            {win === true && answer === Answer.ManipulatingTheMarket && (
              <>
                <LeftGary />
                <WinText />
              </>
            )}
            {win === true && answer === Answer.ApprovingBTCETF && (
              <>
                <WinText />
                <RightGary />
              </>
            )}
            {win === false && answer === Answer.ManipulatingTheMarket && (
              <>
                <LeftGary />
                <LoseText />
              </>
            )}
            {win === false && answer === Answer.ApprovingBTCETF && (
              <>
                <LoseText />
                <RightGary />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default SelectedGaryDecision;
