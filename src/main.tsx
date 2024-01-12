/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { PuzzleWalletProvider } from '@puzzlehq/sdk';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className='h-screen w-screen'>
    <PuzzleWalletProvider
      dAppName="What's Gary doing ?"
      dAppDescription='A friendly wager between friends'
      dAppUrl='https://whats-gary-doing.vercel.app/'
      dAppIconURL='http://nelsonrodmar.com/whats-gary-doing/gary_head.png'
    >
      <App />
    </PuzzleWalletProvider>
  </div>
);
