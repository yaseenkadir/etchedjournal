import { TestBed } from '@angular/core/testing';

import { ClockService } from './clock.service';

describe('ClockService', () => {
    let service: ClockService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.get(ClockService);
    });

    it('now is recent', () => {
        const start = new Date().getTime();
        const actual = service.now();
        const end = new Date().getTime();

        expect(start).toBeLessThanOrEqual(actual.getTime());
        expect(end).toBeGreaterThanOrEqual(actual.getTime());
    });

    it('nowMillis is recent', () => {
        const start = new Date().getTime();
        const actual = service.nowMillis();
        const end = new Date().getTime();

        expect(start).toBeLessThanOrEqual(actual);
        expect(end).toBeGreaterThanOrEqual(actual);
    });
});

export class FakeClock extends ClockService {
    public time: number;

    constructor(time: number) {
        super();
        this.time = time;
    }

    public nowMillis(): number {
        return this.time;
    }

    public now(): Date {
        return new Date(this.time);
    }
}
