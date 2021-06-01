import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCreateComponent } from './product-create.component';

describe('ProductCreateComponent', () => {
  let component: ProductCreateComponent;
  let fixture: ComponentFixture<ProductCreateComponent>;
  let button: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCreateComponent],
    });
  }));
  fixture = TestBed.createComponent(ProductCreateComponent);
  component = fixture.componentInstance;
  button = fixture.nativeElement.querySelector('button');

  it('should render component', () => {
    expect(button.textContent).toContain('Salvar');
  });
});
