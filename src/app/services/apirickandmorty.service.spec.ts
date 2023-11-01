import { TestBed } from '@angular/core/testing';

import { ApirickandmortyService } from './apirickandmorty.service';

describe('ApirickandmortyService', () => {
	let service: ApirickandmortyService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ApirickandmortyService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
