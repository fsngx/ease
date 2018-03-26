'use strict';
import { Ease } from './index';
import { expect } from 'chai';
import 'mocha';

describe('Ease unit tests', () => {
    it('should return a number', () => {
        let result:number = Ease.linearEase(10,10,100,100);
        expect(result).to.be.a('number');
    });
});