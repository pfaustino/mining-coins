import { initDevPanel } from './dev/DevPanel.js';

console.log('mining-coins scaffold');
initDevPanel({ getStatus: () => 'scaffold' });
