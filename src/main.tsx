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
      dAppUrl='https://wheresalex.puzzle.online'
      dAppIconURL='https://wheresalex.puzzle.online/gary_head.png'
    >
      <App />
    </PuzzleWalletProvider>
  </div>
);
