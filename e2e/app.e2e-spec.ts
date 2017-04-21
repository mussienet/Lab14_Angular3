import { Lab14AssignmentPage } from './app.po';

describe('lab14-assignment App', () => {
  let page: Lab14AssignmentPage;

  beforeEach(() => {
    page = new Lab14AssignmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
