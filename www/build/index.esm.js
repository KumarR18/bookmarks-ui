import { A as ActiveRouter } from './active-router-82933e3d.js';
import './match-path-760e1797.js';
import './index-7e7ca1ac.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
