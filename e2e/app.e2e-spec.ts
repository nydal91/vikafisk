import { VikafiskPage } from './app.po';

describe('vikafisk App', function() {
  let page: VikafiskPage;

  beforeEach(() => {
    page = new VikafiskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
