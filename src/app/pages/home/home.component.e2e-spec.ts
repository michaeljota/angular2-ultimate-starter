describe('App', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/#/home');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Angular2 Ultimate Starter by @michaeljota';
    expect(subject).toEqual(result);
  });

  it('should have `todo app example` myXLarge', () => {
    let subject = element(by.css('[myXLarge]')).getText();
    let result  = 'Todo App Example';
    expect(subject).toEqual(result);
  });

});
