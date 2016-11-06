describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Angular2 Ultimate Starter by @michaeljota';
    expect(subject).toEqual(result);
  });

  it('should have header', () => {
    let subject = element(by.css('h1')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });

  it('should have <my-home>', () => {
    let subject = element(by.css('my-app my-home')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });

  it('should have "add todo" button', () => {
    let subject = element(by.css('my-add-todo button')).getText();
    let result  = 'Add Todo';
    expect(subject).toEqual(result);
  });

});
