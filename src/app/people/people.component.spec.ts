/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PeopleComponent } from './people.component';
import { SwapiService } from '../shared/';

describe('Component: People', () => {
  let component;
  beforeEachProviders(() => [
    PeopleComponent
  ]);

  beforeEach(inject([PeopleComponent], (c) => {
    component = c;
  }));


  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
