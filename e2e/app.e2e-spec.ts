import { AwsS3AppPage } from './app.po';

describe('aws-s3-app App', () => {
  let page: AwsS3AppPage;

  beforeEach(() => {
    page = new AwsS3AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
