import approvingBtcEtf from '../assets/approving_btc_etf.jpg';
import manipulatingMarketImg from '../assets/manipulating_the_market.jpg';
import { Answer } from '@state/RecordTypes/what_does_gary_do_vxxx';

type ChooseGaryProps = {
  setAnswer: (answer: Answer) => void;
  answer?: Answer;
  hiding: boolean; // are we setting gary decision ? or finding gary decision ?
};

function ChooseGaryDecision({ setAnswer, answer, hiding }: ChooseGaryProps) {
  return (
    <section className='mt-4 flex max-w-full flex-col gap-4'>
      <div className='flex gap-5'>
        <GaryButton
          imgSrc={manipulatingMarketImg}
          text='Manipulating the market'
          onClick={() => setAnswer(Answer.ManipulatingTheMarket)}
          selected={answer ? answer === Answer.ManipulatingTheMarket : undefined}
        />
        <GaryButton
          imgSrc={approvingBtcEtf}
          text='Approving Bitcoin ETF'
          onClick={() => setAnswer(Answer.ApprovingBTCETF)}
          selected={answer ? answer === Answer.ApprovingBTCETF : undefined}
        />
      </div>
      <p className='self-center whitespace-nowrap text-center text-sm font-extrabold tracking-tight text-primary-green'>
        {((): string => {
          if (answer === undefined && hiding) {
            return 'Manipulating the market';
          } else if (hiding) {
            return `You choose ${answer}`;
          } else {
            return `You think Gary is ${answer}`;
          }
        })()}
      </p>
    </section>
  );
}

type GaryButtonProps = {
  imgSrc: string;
  text: string;
  selected?: boolean;
  onClick: () => void;
};

const GaryButton = ({ imgSrc, text, selected, onClick }: GaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`group flex flex-col self-center rounded-lg outline-primary-green hover:outline ${
        selected ? 'outline' : ''
      } flex w-[150px] flex-col items-center gap-2 p-4 hover:opacity-100`}
    >
      <img
        loading='lazy'
        src={imgSrc}
        className={`aspect-square h-[100px] w-[100px] overflow-hidden rounded-[50%] object-cover object-center ${
          selected || selected === undefined ? '' : 'opacity-40'
        }`}
        alt={text}
      />
      <div
        className={`mt-2.5 whitespace-nowrap text-center text-sm font-extrabold ${
          selected
            ? 'text-primary-green'
            : selected === false
            ? 'text-primary-white opacity-40 group-hover:text-primary-green'
            : 'text-primary-white'
        }`}
      >
        {text}
      </div>
    </button>
  );
};

export default ChooseGaryDecision;
