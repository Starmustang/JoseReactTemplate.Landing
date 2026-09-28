type Props = {
  children: any | any[];
};

/**
 * The page shell. Document metadata lives in the Metadata API (layout.tsx):
 * the empty <title>/<meta name="description"> this used to render were hoisted
 * into <head> ahead of the real tags, and crawlers — WhatsApp, Slack, Facebook
 * — read the first tag they find, so previews came out blank.
 */
const PageContainer = ({ children }: Props) => <div>{children}</div>;

export default PageContainer;
