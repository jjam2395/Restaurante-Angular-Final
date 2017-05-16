import { RestauranteAngularFinalPage } from './app.po';

describe('restaurante-angular-final App', () => {
  let page: RestauranteAngularFinalPage;

  beforeEach(() => {
    page = new RestauranteAngularFinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
