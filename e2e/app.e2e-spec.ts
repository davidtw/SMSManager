import { SMSManagerPage } from './app.po';

describe('smsmanager App', () => {
  let page: SMSManagerPage;

  beforeEach(() => {
    page = new SMSManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
