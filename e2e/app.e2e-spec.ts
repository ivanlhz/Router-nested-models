import { RouterNestedModelsPage } from './app.po';

describe('router-nested-models App', () => {
  let page: RouterNestedModelsPage;

  beforeEach(() => {
    page = new RouterNestedModelsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
