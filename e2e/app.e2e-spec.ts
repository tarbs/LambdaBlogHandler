import { LambdaBlogHandlerPage } from './app.po';

describe('lambda-blog-handler App', function() {
  let page: LambdaBlogHandlerPage;

  beforeEach(() => {
    page = new LambdaBlogHandlerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
