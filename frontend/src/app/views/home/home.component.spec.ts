import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HeaderService } from 'src/app/components/template/header/header.service';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let serice: HeaderService;

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
