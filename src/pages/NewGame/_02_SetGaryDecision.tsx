/* eslint-disable @typescript-eslint/no-explicit-any */
import Nav from '@components/Nav';
import ChooseGaryDecision from '@components/ChooseGaryDecision';
import PageHeader from '@components/PageHeader';
import Button from '@components/Button';
import { Answer } from '@state/RecordTypes/what_does_gary_do_vxxx';
import { Step, useNewGameStore } from './store';

function SetGaryDecision() {
  const [inputs, setInputs, setStep] = useNewGameStore((state) => [
    state.inputs,
    state.setInputs,
    state.setStep,
  ]);

  return (
    <div className='flex h-full flex-col justify-between'>
      <div className='flex h-full w-full flex-col items-center gap-2 px-5'>
        <Nav step={2} />
        <PageHeader
          text='WHAT WOULD YOU LIKE TO GARY DO ?'
          bg='bg-primary-blue'
        />
        <ChooseGaryDecision
          setAnswer={(challenger_answer: Answer) =>
            setInputs({ ...inputs, challenger_answer })
          }
          answer={inputs?.challenger_answer as Answer}
          hiding={true}
        />
        <div className='flex flex-grow flex-col' />
        <Button
          className='mb-6'
          onClick={() => setStep(Step._03_StartWager)}
          disabled={!inputs || !inputs.challenger_answer}
          color='green'
        >
          NEXT
        </Button>
      </div>
    </div>
  );
}

export default SetGaryDecision;
