import { average } from './index';

describe('Test Average Function ', () => {
    it('should work ', () => {
        expect(average('222')).toEqual(`Average is 222`);
    });
});
